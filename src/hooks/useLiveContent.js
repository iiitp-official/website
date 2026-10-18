import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

function absolutize(url) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return String(iso);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function fmtDmy(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return String(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}-${mm}-${d.getFullYear()}`;
}

async function getJson(path) {
  const res = await fetch(`${API_BASE}${path}`, { credentials: "include" });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

/** Live notices from CMS; falls back to static JSON when API is unreachable. */
export function useLiveNotices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const data = await getJson("/v1/notices?limit=100");
        if (!on) return;
        setNotices(
          (data.notices || []).map((n) => ({
            id: n.id,
            title: n.title,
            date: fmtDate(n.notice_date),
            category: n.category || "General",
            link: n.link_url || absolutize(n.file_url) || "/notice",
          }))
        );
      } catch {
        try {
          const mod = await import("../data/notices.json");
          if (on) setNotices(mod.default || []);
        } catch {
          if (on) setNotices([]);
        }
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);
  return { notices, loading };
}

/** Live news from CMS; falls back to static JSON when API is unreachable. */
export function useLiveNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const data = await getJson("/v1/news?limit=100");
        if (!on) return;
        setNews(
          (data.news || []).map((n) => ({
            id: n.id,
            title: n.title,
            date: fmtDate(n.news_date),
            excerpt: n.excerpt || "",
            link: n.link_url || absolutize(n.file_url) || "/news",
          }))
        );
      } catch {
        try {
          const mod = await import("../data/news.json");
          if (on) setNews(mod.default || []);
        } catch {
          if (on) setNews([]);
        }
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);
  return { news, loading };
}

/** Live careers from CMS; falls back to static JSON when API is unreachable. */
export function useLiveCareers() {
  const [data, setData] = useState({ live: [], archive: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const [liveRes, pastRes] = await Promise.all([
          getJson("/v1/careers?type=live&limit=100"),
          getJson("/v1/careers?type=past&limit=100"),
        ]);
        if (!on) return;
        const map = (c) => ({
          title: c.title,
          date: fmtDate(c.post_date || c.created_at),
          lastDate: c.last_date ? fmtDmy(c.last_date) : "",
          buttons: (c.buttons || []).map((b) => ({
            label: b.label,
            link: b.url || absolutize(b.file_url) || "#",
            file: absolutize(b.file_url),
            isInternalRoute: !!b.url && b.url.startsWith("/"),
          })),
        });
        setData({
          live: (liveRes.careers || []).map(map),
          archive: (pastRes.careers || []).map(map),
        });
      } catch {
        try {
          const mod = await import("../data/careers.json");
          if (on) setData(mod.default || { live: [], archive: [] });
        } catch {
          if (on) setData({ live: [], archive: [] });
        }
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);
  return { data, loading };
}

/** Live e-tenders from CMS; falls back to static JSON when API is unreachable. */
export function useLiveEtenders() {
  const [data, setData] = useState({ live: [], archive: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const [liveRes, pastRes] = await Promise.all([
          getJson("/v1/etenders?type=live&limit=100"),
          getJson("/v1/etenders?type=past&limit=100"),
        ]);
        if (!on) return;
        const map = (t) => ({
          title: t.title,
          tenderNumber: t.tender_number || "—",
          fileUrl: absolutize(t.file_url),
          corrigendumUrl: absolutize(t.corrigendum_url),
          submissionDate: t.submission_date || "—",
        });
        setData({
          live: (liveRes.etenders || []).map(map),
          archive: (pastRes.etenders || []).map(map),
        });
      } catch {
        try {
          const mod = await import("../data/etenders.json");
          if (on) setData(mod.default || mod);
        } catch {
          if (on) setData({ live: [], archive: [] });
        }
      } finally {
        if (on) setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);
  return { data, loading };
}
