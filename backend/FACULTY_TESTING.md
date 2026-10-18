# Faculty CMS — Testing Guide

How to test the faculty backend end-to-end on your local machine.
Covers: database seeding, dev server, browser playground, `curl` commands,
authenticated write tests, and troubleshooting.

---

## 1. Prerequisites

| Requirement | Check / install |
|---|---|
| MySQL 8.x running | `mysql -u root -p -e "SELECT 1;"` should succeed |
| Database exists | `CREATE DATABASE IF NOT EXISTS iiitp_cms;` |
| Node deps installed | `cd backend && npm install` |
| `backend/.env` configured | Copy from `.env.example` if missing (see §2) |
| Prisma client generated | `npx prisma generate` (runs automatically on `npm install`) |

### 2. Configure `backend/.env`

Minimum working local config:

```env
DATABASE_URL="mysql://root:<your-mysql-password>@localhost:3306/iiitp_cms"
GOOGLE_CLIENT_ID=<your-google-oauth-client-id>.apps.googleusercontent.com
JWT_SECRET=<any-long-random-string-min-32-chars>
JWT_REFRESH_SECRET=<a-different-long-random-string>
CORS_ORIGINS=http://localhost:5174,http://localhost:4173
COOKIE_SECURE=false
NODE_ENV=development
PORT=4000
```

> `GOOGLE_CLIENT_ID` is only needed for login/write tests. Read tests work without it.

---

## 3. Migrate + seed the database

Run from the `backend/` folder:

```powershell
# 1. Push the schema to MySQL (creates all tables)
npx prisma db push

# 2. Seed everything (notices, news, careers, e-tenders,
#    faculty + children, scholarships, staff, alumni, MoUs, press)
npm run db:seed
```

Expected tail output:

```
  ✅ Faculty seeded (44 profiles)
  ✅ Scholarships seeded (10 records)
  ✅ Non-teaching staff seeded (37 records)
  ✅ Alumni seeded
  ✅ MoUs seeded (2 records)
  ✅ Press coverage seeded (7 records)
✨ Database Seeding Completed in ~2s!
```

Re-running is safe (faculty uses upsert; others delete + re-insert).

### Verify row counts (optional)

```powershell
npx prisma studio   # opens a DB browser at http://localhost:5555
```

Or check key tables directly:

```sql
SELECT COUNT(*) FROM faculty_profiles;      -- expect 44
SELECT COUNT(*) FROM faculty_publications;  -- expect ~555
SELECT COUNT(*) FROM faculty_projects;      -- expect ~69
SELECT COUNT(*) FROM faculty_supervisions;  -- expect ~92
```

---

## 4. Start the API server

```powershell
cd backend
npm run dev
```

Wait for:

```
info: 🚀 API listening on port 4000 (development)
```

Health check (new terminal):

```powershell
Invoke-WebRequest -Uri "http://localhost:4000/health" -UseBasicParsing
# expect: {"status":"ok","db":"connected",...}
```

---

## 5. Test in the browser (easiest)

Open the Faculty API Playground:

```
http://localhost:4000/faculty.html
```

| Card | Endpoint | Auth? | What to do |
|---|---|---|---|
| 1. List | `GET /v1/faculty` | No | Click **Fetch Faculty List**. Try search `CSE`, limit `5`. Expect `total: 44`. |
| 2. Detail | `GET /v1/faculty/:slug` | No | Copy a `slug` from step 1 (e.g. `amartya-paul`), fetch. Expect profile + `publications`, `projects`, `patents`, `seminars`, `supervisions` arrays. |
| 3. Edit | `PATCH /v1/faculty/:id` | **Yes** | Enter profile ID + new designation, click PATCH. |
| 4. Add/Delete child | `POST /v1/faculty/:id/publications` etc. | **Yes** | Enter profile ID + title, POST. Copy the returned item `id`, then DELETE it. |

> The 🔒 cards need a login session first: open `http://localhost:4000/`
> (Auth Playground) in the **same browser** → seed a dev invite for your
> Google email with role `admin` → Sign in with Google. Cookies are shared,
> so return to `faculty.html` and the write buttons will work.

---

## 6. Test with `curl` / PowerShell

Base URL: `http://localhost:4000`

### 6a. Public reads (no login)

```powershell
# List (first 2)
Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty?limit=2" -UseBasicParsing

# Search + pagination
Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty?search=CSE&page=1&limit=50" -UseBasicParsing

# Detail by slug (copy a slug from the list response)
Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty/amartya-paul" -UseBasicParsing

# Pretty-print with PowerShell
((Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty?limit=2" -UseBasicParsing).Content | ConvertFrom-Json).faculty |
  Format-Table name, slug, department
```

Expected: `200 OK`, `pagination.total = 44`, detail contains the five
child arrays.

### 6b. Authenticated writes (login required)

Writes use `httpOnly` cookies, so use a session to persist them:

```powershell
# 1. Create a session object
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession

# 2. Log in via the Auth Playground in your browser first
#    (sets cookies), OR paste tokens here.
#    Quickest manual path: log in at http://localhost:4000/ ,
#    then export cookies from browser devtools into $session.

# 3. Edit a profile (admin, or faculty owner with matching email)
Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty/1" `
  -Method PATCH -ContentType "application/json" `
  -Body '{"designation":"Associate Professor"}' `
  -WebSession $session -UseBasicParsing

# 4. Add a child item (resources: publications | projects | patents | seminars | supervisions)
Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty/1/publications" `
  -Method POST -ContentType "application/json" `
  -Body '{"title":"Test publication — delete me"}' `
  -WebSession $session -UseBasicParsing

# 5. Edit a child item (copy its id from step 4)
Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty/1/publications/12" `
  -Method PATCH -ContentType "application/json" `
  -Body '{"title":"Updated title"}' `
  -WebSession $session -UseBasicParsing

# 6. Delete the child item
Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty/1/publications/12" `
  -Method DELETE -WebSession $session -UseBasicParsing
# expect: 204 No Content
```

> Tip: the browser playground (`faculty.html` cards 3–4) does all of the
> above with one click once you're logged in — prefer it over manual curl.

### 6c. Negative tests (security)

```powershell
# Unknown slug → 404
try { Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty/no-such-person" -UseBasicParsing }
catch { [int]$_.Exception.Response.StatusCode }   # expect 404

# PATCH without login → 403
try { Invoke-WebRequest -Uri "http://localhost:4000/v1/faculty/1" -Method PATCH `
  -ContentType "application/json" -Body '{"designation":"x"}' -UseBasicParsing }
catch { [int]$_.Exception.Response.StatusCode }   # expect 403

# Faculty user editing SOMEONE ELSE's profile → 403
# (log in as a faculty account whose email ≠ profile email, then PATCH)
```

---

## 7. Test via the Admin Dashboard (optional)

```powershell
# Terminal 1 — backend
cd backend; npm run dev

# Terminal 2 — admin SPA
cd admin; npm install; npm run dev   # http://localhost:5174
```

1. Log in with an `admin` invite (Auth Playground → role `admin`).
2. Open **Faculty Profiles** in the sidebar.
3. List loads from `GET /v1/faculty`; **Edit** → change name/designation/bio → **Save** (`PATCH /v1/faculty/:id`).
4. Open **Audit Logs** to confirm the change was logged.

---

## 8. Automated regression tests

```powershell
cd backend
npm test
```

Covers schema, auth, middleware, admin/content/media routes
(`tests/step1`–`step9`). All must pass before committing changes.

---

## 9. Troubleshooting

| Symptom | Cause → Fix |
|---|---|
| `db:seed` fails with access denied | Wrong password in `DATABASE_URL`; verify with `mysql -u root -p` |
| `faculty_profiles` count is 0 after seed | Old seeder — `git pull` latest `prisma/seed/index.ts` (faculty wiring) and re-run `npm run db:seed` |
| Server crashes on start (`envalid`) | Missing env var — read the error, it names the variable; check §2 |
| `GET /v1/faculty` returns `[]` | DB reseeded empty / wrong DB name in `DATABASE_URL`; check counts (§3) |
| 🔒 buttons return 401/403 in playground | Not logged in, or logged in as faculty trying to edit another profile — log in via `/` with an `admin` invite |
| Google button doesn't render on `/` | Wrong `GOOGLE_CLIENT_ID` or origin not in Google Console authorized JS origins (`http://localhost:4000`) |
| Port 4000 in use | `taskkill /F /IM node.exe` (kills all node — careful), then `npm run dev` again |
