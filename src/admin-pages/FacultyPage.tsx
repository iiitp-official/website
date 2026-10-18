import React, { useCallback, useEffect, useState } from 'react';
import { Search, Edit2, AlertCircle, X, Plus, Trash2, RefreshCw } from 'lucide-react';
import { apiRequest } from '../admin-api/client';
import { useAuth } from '../context/AuthContext';
import { AccessDenied } from '../admin-components/AccessDenied';
import { LoadingSpinner } from '../admin-components/LoadingSpinner';
import { EmptyState } from '../admin-components/EmptyState';
import { Modal } from '../admin-components/Modal';
import { ConfirmDialog } from '../admin-components/ConfirmDialog';
import { FileUploadInput } from '../admin-components/FileUploadInput';
import { Pagination } from '../admin-components/Pagination';

// ── Types ────────────────────────────────────────────────────────────────────

interface FacultyRow {
  id: number;
  slug: string;
  name: string;
  designation?: string | null;
  department?: string | null;
  photo_url?: string | null;
  email: string;
}

interface FacultyDetail extends FacultyRow {
  bio?: string | null;
  education?: string | null;
  expertise?: string | null;
  phone?: string | null;
  linkedin_url?: string | null;
  google_scholar?: string | null;
  orcid?: string | null;
  scopus_url?: string | null;
  resume_url?: string | null;
  is_published?: boolean;
  publications: any[];
  projects: any[];
  patents: any[];
  seminars: any[];
  supervisions: any[];
}

type ResourceKey = 'publications' | 'projects' | 'patents' | 'seminars' | 'supervisions';

const RESOURCES: { key: ResourceKey; label: string; singular: string }[] = [
  { key: 'publications', label: 'Publications', singular: 'Publication' },
  { key: 'projects', label: 'Projects', singular: 'Project' },
  { key: 'patents', label: 'Patents', singular: 'Patent' },
  { key: 'seminars', label: 'Seminars / Talks', singular: 'Seminar' },
  { key: 'supervisions', label: 'Supervisions', singular: 'Supervision' },
];

// Fields rendered per sub-resource in the add/edit child form
const CHILD_FIELDS: Record<ResourceKey, { name: string; label: string; type: 'text' | 'number' | 'select' | 'textarea'; options?: string[] }[]> = {
  publications: [
    { name: 'title', label: 'Title *', type: 'text' },
    { name: 'authors', label: 'Authors', type: 'text' },
    { name: 'journal', label: 'Journal / Venue', type: 'text' },
    { name: 'year', label: 'Year', type: 'number' },
    { name: 'doi_or_link', label: 'DOI / Link', type: 'text' },
    { name: 'pub_type', label: 'Type', type: 'select', options: ['journal', 'conference', 'book_chapter'] },
    { name: 'display_order', label: 'Order', type: 'number' },
  ],
  projects: [
    { name: 'title', label: 'Title *', type: 'text' },
    { name: 'funding_agency', label: 'Funding Agency', type: 'text' },
    { name: 'amount', label: 'Amount', type: 'text' },
    { name: 'duration', label: 'Duration', type: 'text' },
    { name: 'status', label: 'Status', type: 'select', options: ['ongoing', 'completed'] },
    { name: 'display_order', label: 'Order', type: 'number' },
  ],
  patents: [
    { name: 'title', label: 'Title *', type: 'text' },
    { name: 'patent_number', label: 'Patent Number', type: 'text' },
    { name: 'status', label: 'Status', type: 'text' },
    { name: 'year', label: 'Year', type: 'number' },
    { name: 'display_order', label: 'Order', type: 'number' },
  ],
  seminars: [
    { name: 'title', label: 'Title *', type: 'text' },
    { name: 'event_name', label: 'Event', type: 'text' },
    { name: 'venue', label: 'Venue', type: 'text' },
    { name: 'date_text', label: 'Date', type: 'text' },
    { name: 'display_order', label: 'Order', type: 'number' },
  ],
  supervisions: [
    { name: 'student_name', label: 'Student Name', type: 'text' },
    { name: 'degree', label: 'Degree', type: 'select', options: ['PhD', 'MTech', 'BTech'] },
    { name: 'topic', label: 'Topic', type: 'text' },
    { name: 'status', label: 'Status', type: 'select', options: ['ongoing', 'completed'] },
    { name: 'year', label: 'Year', type: 'number' },
    { name: 'display_order', label: 'Order', type: 'number' },
  ],
};

function childTitle(resource: ResourceKey, item: any): string {
  return item.title || item.student_name || item.event_name || `Item #${item.id}`;
}

function childMeta(resource: ResourceKey, item: any): string {
  switch (resource) {
    case 'publications':
      return [item.authors, item.journal, item.year].filter(Boolean).join(' · ');
    case 'projects':
      return [item.funding_agency, item.status].filter(Boolean).join(' · ');
    case 'patents':
      return [item.patent_number, item.status, item.year].filter(Boolean).join(' · ');
    case 'seminars':
      return [item.event_name, item.venue, item.date_text].filter(Boolean).join(' · ');
    case 'supervisions':
      return [item.degree, item.topic, item.status].filter(Boolean).join(' · ');
    default:
      return '';
  }
}

const EMPTY_PROFILE = {
  name: '', designation: '', department: '', bio: '', education: '', expertise: '',
  phone: '', linkedin_url: '', google_scholar: '', orcid: '', scopus_url: '',
  resume_url: '', photo_url: '', is_published: true,
};

// ── Component ────────────────────────────────────────────────────────────────

export const FacultyPage: React.FC = () => {
  const { user, canAccessSection } = useAuth();
  const hasAccess = canAccessSection('faculty');

  const [rows, setRows] = useState<FacultyRow[]>([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 12, total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Edit modal state
  const [detail, setDetail] = useState<FacultyDetail | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [form, setForm] = useState<Record<string, any>>({ ...EMPTY_PROFILE });
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | ResourceKey>('profile');
  const [savedNote, setSavedNote] = useState('');

  // Child add/edit state
  const [childResource, setChildResource] = useState<ResourceKey>('publications');
  const [childItem, setChildItem] = useState<any | null>(null); // null = closed, {id?} = editing
  const [childForm, setChildForm] = useState<Record<string, any>>({});
  const [childBusy, setChildBusy] = useState(false);
  const [deleteChild, setDeleteChild] = useState<{ resource: ResourceKey; id: number } | null>(null);

  const fetchList = useCallback(
    async (page = 1) => {
      try {
        setLoading(true);
        setListError(null);
        const q = new URLSearchParams({ page: String(page), limit: '12' });
        if (search.trim()) q.set('search', search.trim());
        const res = await apiRequest<{ faculty: FacultyRow[]; pagination: any }>(`/v1/faculty?${q}`);
        setRows(res.faculty);
        setPagination({
          page: res.pagination.page,
          limit: res.pagination.limit,
          total: res.pagination.total,
          totalPages: res.pagination.pages ?? 1,
        });
      } catch (err: unknown) {
        setListError(err instanceof Error ? err.message : 'Failed to load faculty');
      } finally {
        setLoading(false);
      }
    },
    [search]
  );

  useEffect(() => {
    if (hasAccess) fetchList(1);
    else setLoading(false);
  }, [hasAccess, fetchList]);

  if (!hasAccess) return <AccessDenied sectionName="Faculty Profiles" />;

  const openEditor = async (row: FacultyRow) => {
    try {
      setLoadingDetail(true);
      setDetail(null);
      setFormError(null);
      setSavedNote('');
      setActiveTab('profile');
      const res = await apiRequest<{ faculty: FacultyDetail }>(`/v1/faculty/${row.slug}`);
      const d = res.faculty;
      setDetail(d);
      setForm({
        name: d.name || '', designation: d.designation || '', department: d.department || '',
        bio: d.bio || '', education: d.education || '', expertise: d.expertise || '',
        phone: d.phone || '', linkedin_url: d.linkedin_url || '', google_scholar: d.google_scholar || '',
        orcid: d.orcid || '', scopus_url: d.scopus_url || '', resume_url: d.resume_url || '',
        photo_url: d.photo_url || '', is_published: d.is_published ?? true,
      });
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to load profile');
    } finally {
      setLoadingDetail(false);
    }
  };

  const closeEditor = () => {
    if (saving || childBusy) return;
    setDetail(null);
    setChildItem(null);
  };

  const set = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!detail) return;
    if (!String(form.name).trim()) {
      setFormError('Name is required.');
      return;
    }
    try {
      setSaving(true);
      setFormError(null);
      const payload = { ...form, name: String(form.name).trim() };
      const res = await apiRequest<{ faculty: FacultyDetail }>(`/v1/faculty/${detail.id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
      });
      setDetail(res.faculty);
      setSavedNote('Profile saved.');
      fetchList(pagination.page);
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : 'Failed to save profile');
    } finally {
      setSaving(false);
    }
  };

  const reloadDetail = async () => {
    if (!detail) return;
    const res = await apiRequest<{ faculty: FacultyDetail }>(`/v1/faculty/${detail.slug}`);
    setDetail(res.faculty);
  };

  const openChildEditor = (resource: ResourceKey, item?: any) => {
    setChildResource(resource);
    const fields = CHILD_FIELDS[resource];
    const init: Record<string, any> = {};
    fields.forEach((f) => {
      init[f.name] = item?.[f.name] ?? (f.type === 'select' ? f.options?.[0] ?? '' : '');
    });
    setChildForm(init);
    setChildItem(item ? { ...item } : { id: null });
  };

  const handleSaveChild = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!detail) return;
    try {
      setChildBusy(true);
      const body: Record<string, any> = {};
      Object.entries(childForm).forEach(([k, v]) => {
        if (v === '' || v === null || v === undefined) return;
        body[k] = typeof v === 'string' && /^\d+$/.test(v) && (k === 'year' || k === 'display_order') ? Number(v) : v;
      });
      if (childItem?.id) {
        await apiRequest(`/v1/faculty/${detail.id}/${childResource}/${childItem.id}`, {
          method: 'PATCH',
          body: JSON.stringify(body),
        });
      } else {
        await apiRequest(`/v1/faculty/${detail.id}/${childResource}`, {
          method: 'POST',
          body: JSON.stringify(body),
        });
      }
      setChildItem(null);
      await reloadDetail();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to save entry');
    } finally {
      setChildBusy(false);
    }
  };

  const handleDeleteChild = async () => {
    if (!detail || !deleteChild) return;
    try {
      setChildBusy(true);
      await apiRequest(`/v1/faculty/${detail.id}/${deleteChild.resource}/${deleteChild.id}`, {
        method: 'DELETE',
      });
      setDeleteChild(null);
      await reloadDetail();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to delete entry');
    } finally {
      setChildBusy(false);
    }
  };

  const canEditRow = (row: FacultyRow) =>
    user?.role === 'admin' || user?.email?.toLowerCase() === row.email?.toLowerCase();

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Faculty Profiles</h1>
          <p>Browse profiles — click Edit for the full popup editor (details, links, publications, projects, patents, talks, supervisions).</p>
        </div>
        <button type="button" className="secondary-button" onClick={() => fetchList(1)} disabled={loading}>
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      <div className="filter-card">
        <div className="filter-row">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by name or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchList(1)}
            />
            {search && (
              <button type="button" className="clear-search-btn" onClick={() => { setSearch(''); fetchList(1); }}>
                <X size={16} />
              </button>
            )}
          </div>
          <button type="button" className="secondary-button filter-btn" onClick={() => fetchList(1)}>
            Apply Filter
          </button>
        </div>
      </div>

      {listError ? (
        <div className="error-box">
          <AlertCircle size={18} /> <span>{listError}</span>
          <button type="button" className="retry-button" onClick={() => fetchList(1)}>Retry</button>
        </div>
      ) : loading ? (
        <div className="table-card"><LoadingSpinner message="Loading faculty..." /></div>
      ) : rows.length === 0 ? (
        <div className="table-card">
          <EmptyState title="No faculty found" description="Try clearing your search." />
        </div>
      ) : (
        <div className="table-card">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Name</th>
                <th style={{ width: '20%' }}>Department</th>
                <th style={{ width: '25%' }}>Email</th>
                <th style={{ width: '15%', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((f) => (
                <tr key={f.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {f.photo_url ? (
                        <img src={f.photo_url} alt={f.name} className="faculty-photo" />
                      ) : (
                        <span className="faculty-photo-fallback">{f.name.charAt(0).toUpperCase()}</span>
                      )}
                      <div>
                        <div className="row-main-title">{f.name}</div>
                        <div className="row-meta-links">
                          <span className="meta-id">{f.designation || '—'}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td><span className="category-pill">{f.department || '—'}</span></td>
                  <td><span className="date-text">{f.email}</span></td>
                  <td>
                    <div className="action-buttons-cell">
                      <button
                        type="button"
                        className="action-icon-btn"
                        title={canEditRow(f) ? 'Edit full profile' : 'Only admin or profile owner can edit'}
                        disabled={!canEditRow(f)}
                        onClick={() => openEditor(f)}
                      >
                        <Edit2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination pagination={pagination} onPageChange={(p) => fetchList(p)} disabled={loading} />
        </div>
      )}

      {/* ── FULL PROFILE EDITOR MODAL ── */}
      <Modal
        isOpen={!!detail || loadingDetail}
        onClose={closeEditor}
        title={detail ? `Edit — ${detail.name}` : 'Loading profile…'}
        subtitle="Everything here is editable. Profile fields save via Save; list entries save instantly."
        maxWidth="860px"
      >
        {loadingDetail || !detail ? (
          <LoadingSpinner message="Loading full profile..." />
        ) : (
          <>
            {formError && (
              <div className="form-error-banner"><AlertCircle size={16} /> <span>{formError}</span></div>
            )}
            {savedNote && <div className="draft-notice-banner" style={{ marginBottom: 12 }}>{savedNote}</div>}

            <div className="tabs-row">
              {(['profile', ...RESOURCES.map((r) => r.key)] as ('profile' | ResourceKey)[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  className={activeTab === t ? 'primary-button' : 'secondary-button'}
                  style={{ padding: '6px 12px', fontSize: 13 }}
                  onClick={() => setActiveTab(t)}
                >
                  {t === 'profile' ? 'Profile' : RESOURCES.find((r) => r.key === t)?.label}
                </button>
              ))}
            </div>

            {activeTab === 'profile' && (
              <form onSubmit={handleSaveProfile} className="cms-modal-form">
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="form-label">Full Name <span className="required-star">*</span></label>
                    <input type="text" className="form-input" required value={form.name} onChange={(e) => set('name', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Designation</label>
                    <input type="text" className="form-input" value={form.designation} onChange={(e) => set('designation', e.target.value)} placeholder="e.g. Assistant Professor" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Department</label>
                    <select className="form-input" value={form.department} onChange={(e) => set('department', e.target.value)}>
                      <option value="">—</option>
                      <option value="CSE">CSE</option>
                      <option value="ECE">ECE</option>
                      <option value="ASH">ASH</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Bio</label>
                    <textarea className="form-textarea" rows={3} value={form.bio} onChange={(e) => set('bio', e.target.value)} />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Education</label>
                    <textarea className="form-textarea" rows={2} value={form.education} onChange={(e) => set('education', e.target.value)} />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Expertise</label>
                    <textarea className="form-textarea" rows={2} value={form.expertise} onChange={(e) => set('expertise', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-input" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn URL</label>
                    <input type="url" className="form-input" value={form.linkedin_url} onChange={(e) => set('linkedin_url', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Google Scholar</label>
                    <input type="url" className="form-input" value={form.google_scholar} onChange={(e) => set('google_scholar', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ORCID</label>
                    <input type="text" className="form-input" value={form.orcid} onChange={(e) => set('orcid', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Scopus URL</label>
                    <input type="url" className="form-input" value={form.scopus_url} onChange={(e) => set('scopus_url', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Resume URL</label>
                    <input type="url" className="form-input" value={form.resume_url} onChange={(e) => set('resume_url', e.target.value)} />
                  </div>
                  <FileUploadInput
                    value={form.photo_url || ''}
                    onChange={(v) => set('photo_url', v)}
                    context="faculty"
                    label="Profile Photo"
                    placeholder="/uploads/photo.jpg or https://..."
                    accept="image/*"
                  />
                  <div className="form-group">
                    <label className="form-label">Visibility</label>
                    <label style={{ display: 'flex', gap: 8, fontSize: 13, alignItems: 'center' }}>
                      <input type="checkbox" checked={!!form.is_published} onChange={(e) => set('is_published', e.target.checked)} />
                      Published on public website
                    </label>
                  </div>
                </div>
                <div className="modal-actions">
                  <button type="button" className="secondary-button" onClick={closeEditor} disabled={saving}>Close</button>
                  <button type="submit" className="primary-button" disabled={saving}>
                    {saving ? 'Saving…' : 'Save Profile'}
                  </button>
                </div>
              </form>
            )}

            {activeTab !== 'profile' && (
              <ChildTab
                resource={activeTab}
                items={(detail as any)[activeTab] || []}
                onAdd={() => openChildEditor(activeTab)}
                onEdit={(item) => openChildEditor(activeTab, item)}
                onDelete={(id) => setDeleteChild({ resource: activeTab, id })}
              />
            )}
          </>
        )}
      </Modal>

      {/* ── CHILD ADD/EDIT MODAL ── */}
      <Modal
        isOpen={!!childItem}
        onClose={() => !childBusy && setChildItem(null)}
        title={`${childItem?.id ? 'Edit' : 'Add'} ${RESOURCES.find((r) => r.key === childResource)?.singular}`}
        maxWidth="620px"
      >
        <form onSubmit={handleSaveChild} className="cms-modal-form">
          <div className="form-grid">
            {CHILD_FIELDS[childResource].map((f) => (
              <div className="form-group" key={f.name} style={f.type === 'textarea' || f.name === 'title' || f.name === 'topic' ? { gridColumn: 'span 2' } : undefined}>
                <label className="form-label">{f.label}</label>
                {f.type === 'select' ? (
                  <select
                    className="form-input"
                    value={childForm[f.name] ?? ''}
                    onChange={(e) => setChildForm((c) => ({ ...c, [f.name]: e.target.value }))}
                  >
                    {(f.options || []).map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={f.type === 'number' ? 'number' : 'text'}
                    className="form-input"
                    value={childForm[f.name] ?? ''}
                    onChange={(e) => setChildForm((c) => ({ ...c, [f.name]: e.target.value }))}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="modal-actions">
            <button type="button" className="secondary-button" onClick={() => setChildItem(null)} disabled={childBusy}>Cancel</button>
            <button type="submit" className="primary-button" disabled={childBusy}>
              {childBusy ? 'Saving…' : childItem?.id ? 'Save Changes' : 'Add Entry'}
            </button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={!!deleteChild}
        onClose={() => setDeleteChild(null)}
        onConfirm={handleDeleteChild}
        title="Delete Entry"
        message="Remove this entry permanently? This cannot be undone."
        confirmLabel="Delete"
        variant="danger"
        loading={childBusy}
      />
    </div>
  );
};

// ── Sub-resource tab ─────────────────────────────────────────────────────────

function ChildTab({
  resource, items, onAdd, onEdit, onDelete,
}: {
  resource: ResourceKey;
  items: any[];
  onAdd: () => void;
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}) {
  const label = RESOURCES.find((r) => r.key === resource)?.singular || 'Entry';
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
        <button type="button" className="primary-button" style={{ padding: '6px 12px', fontSize: 13 }} onClick={onAdd}>
          <Plus size={15} /> Add {label}
        </button>
      </div>
      {items.length === 0 ? (
        <div className="empty-buttons-hint">No entries yet — click Add {label}.</div>
      ) : (
        items.map((item) => (
          <div className="child-block" key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
              <div>
                <div className="child-block-title">{childTitle(resource, item)}</div>
                {childMeta(resource, item) && <div className="child-block-meta">{childMeta(resource, item)}</div>}
              </div>
              <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                <button type="button" className="small-icon-button" title="Edit" onClick={() => onEdit(item)}>
                  <Edit2 size={14} />
                </button>
                <button type="button" className="small-icon-button delete" title="Delete" onClick={() => onDelete(item.id)}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
