import React from "react";
import { Routes, Route, NavLink, Navigate, Link, useNavigate } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Newspaper,
  Briefcase,
  FileCheck,
  UserPlus,
  ClipboardList,
  LogOut,
  Users as UsersIcon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { DashboardHome } from "../admin-pages/DashboardHome";
import { NoticesManager } from "../admin-pages/NoticesManager";
import { NewsManager } from "../admin-pages/NewsManager";
import { CareersManager } from "../admin-pages/CareersManager";
import { ETendersManager } from "../admin-pages/ETendersManager";
import { FacultyPage } from "../admin-pages/FacultyPage";
import { UsersPage } from "../admin-pages/UsersPage";
import { InvitesPage } from "../admin-pages/InvitesPage";
import { AuditLogsPage } from "../admin-pages/AuditLogsPage";
import "../admin.css";

const NAV = [
  { section: "CMS", items: [
    { label: "Dashboard", path: "", icon: LayoutDashboard },
    { label: "Notices", path: "notices", icon: FileText, sectionKey: "notices" },
    { label: "News", path: "news", icon: Newspaper, sectionKey: "news" },
    { label: "Careers", path: "careers", icon: Briefcase, sectionKey: "careers" },
    { label: "E-Tenders", path: "etenders", icon: FileCheck, sectionKey: "etenders" },
    { label: "Faculty Profiles", path: "faculty", icon: UsersIcon, sectionKey: "faculty" },
  ]},
  { section: "Administration", items: [
    { label: "Users", path: "users", icon: UsersIcon, adminOnly: true },
    { label: "Invites", path: "invites", icon: UserPlus, adminOnly: true },
    { label: "Audit Logs", path: "audit-logs", icon: ClipboardList, adminOnly: true },
  ]},
];

export default function DashboardPage() {
  const { user, loading, isAdmin, canAccessSection, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loading && !user) navigate("/login", { replace: true });
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="admin-root">
        <div style={{ padding: 64, textAlign: "center", color: "#94a3b8" }}>Checking session…</div>
      </div>
    );
  }
  if (!user) return null;

  const filtered = NAV.map((g) => ({
    ...g,
    items: g.items.filter((item) => {
      if (item.adminOnly && !isAdmin) return false;
      if (item.sectionKey && !canAccessSection(item.sectionKey)) return false;
      return true;
    }),
  })).filter((g) => g.items.length > 0);

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "A";

  return (
    <div className="admin-root">
      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-mark">IIIT</div>
            <div>
              <div className="brand-title">IIIT Pune</div>
              <div className="brand-subtitle">CMS Dashboard</div>
            </div>
          </div>
          <nav className="navigation">
            {filtered.map((group) => (
              <div className="nav-group" key={group.section}>
                <div className="nav-section-title">{group.section}</div>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path ? `/dashboard/${item.path}` : "/dashboard"}
                      end={item.path === ""}
                      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                    >
                      <Icon size={19} strokeWidth={1.8} />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            ))}
          </nav>
          <div className="sidebar-footer">
            <button className="logout-button" type="button" onClick={logout}>
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <main className="main-area">
          <header className="topbar">
            <div>
              <div className="topbar-title">Content Management System</div>
              <div className="topbar-subtitle">
                <Link to="/" className="admin-back-link">← View public website</Link>
              </div>
            </div>
            <div className="user-placeholder">
              {user?.avatar_url ? (
                <img src={user.avatar_url} alt={user.name} className="avatar-img" />
              ) : (
                <div className="avatar">{initial}</div>
              )}
              <div>
                <div className="user-name">{user?.name || "Administrator"}</div>
                <div className="user-role">{user?.role || "admin"}</div>
              </div>
            </div>
          </header>

          <section className="content">
            <Routes>
              <Route index element={<DashboardHome />} />
              <Route path="notices" element={<NoticesManager />} />
              <Route path="news" element={<NewsManager />} />
              <Route path="careers" element={<CareersManager />} />
              <Route path="etenders" element={<ETendersManager />} />
              <Route path="faculty" element={<FacultyPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="invites" element={<InvitesPage />} />
              <Route path="audit-logs" element={<AuditLogsPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </section>

          <footer className="admin-footer">
            <span>IIIT Pune — CMS Dashboard · Signed in as {user?.email}</span>
            <Link to="/">Back to website →</Link>
          </footer>
        </main>
      </div>
    </div>
  );
}
