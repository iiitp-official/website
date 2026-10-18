import React, { useCallback, useEffect, useState } from 'react';
import { Search, RefreshCw, AlertCircle, UserX, UserCheck, ShieldCheck } from 'lucide-react';
import { apiRequest } from '../admin-api/client';
import { useAuth } from '../context/AuthContext';
import { AccessDenied } from '../admin-components/AccessDenied';
import { LoadingSpinner } from '../admin-components/LoadingSpinner';
import { EmptyState } from '../admin-components/EmptyState';
import { Modal } from '../admin-components/Modal';

interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'faculty';
  is_active: boolean;
  last_login_at?: string | null;
  created_at: string;
  sections?: string[];
}

const ALL_SECTIONS = ['notices', 'news', 'careers', 'etenders'];

export const UsersPage: React.FC = () => {
  const { isAdmin, user: me } = useAuth();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [busy, setBusy] = useState(false);
  const [sectionUser, setSectionUser] = useState<AdminUser | null>(null);
  const [sectionInput, setSectionInput] = useState('');

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const q = new URLSearchParams();
      if (search.trim()) q.set('search', search.trim());
      if (roleFilter) q.set('role', roleFilter);
      q.set('limit', '100');
      const qs = q.toString();
      const res = await apiRequest<{ users: AdminUser[]; pagination: { total: number } }>(
        `/v1/admin/users${qs ? `?${qs}` : ''}`
      );
      setUsers(res.users);
      setTotal(res.pagination.total);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load users');
    } finally {
      setLoading(false);
    }
  }, [search, roleFilter]);

  useEffect(() => {
    if (isAdmin) fetchUsers();
    else setLoading(false);
  }, [isAdmin, fetchUsers]);

  if (!isAdmin) return <AccessDenied sectionName="User Administration" />;

  const mutate = async (fn: () => Promise<unknown>, failMsg: string) => {
    try {
      setBusy(true);
      await fn();
      await fetchUsers();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : failMsg);
    } finally {
      setBusy(false);
    }
  };

  const changeRole = (u: AdminUser, role: string) =>
    mutate(
      () =>
        apiRequest(`/v1/admin/users/${u.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ role }),
        }),
      'Failed to update role'
    );

  const toggleActive = (u: AdminUser) =>
    mutate(
      () =>
        apiRequest(`/v1/admin/users/${u.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ is_active: !u.is_active }),
        }),
      'Failed to update status'
    );

  const addSection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionUser || !sectionInput.trim()) return;
    const section = sectionInput.trim().toLowerCase();
    await mutate(
      () =>
        apiRequest(`/v1/admin/users/${sectionUser.id}/sections`, {
          method: 'POST',
          body: JSON.stringify({ sections: [section] }),
        }),
      'Failed to assign section'
    );
    setSectionInput('');
  };

  const removeSection = (u: AdminUser, section: string) =>
    mutate(
      () => apiRequest(`/v1/admin/users/${u.id}/sections/${section}`, { method: 'DELETE' }),
      'Failed to remove section'
    );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>User Management</h1>
          <p>{total} users — change roles, activate/deactivate, assign editor sections.</p>
        </div>
        <button type="button" className="secondary-button" onClick={fetchUsers} disabled={loading}>
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
              placeholder="Search by email or name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchUsers()}
            />
          </div>
          <select className="filter-select" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
            <option value="">All roles</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>
      </div>

      {error ? (
        <div className="error-box">
          <AlertCircle size={18} /> <span>{error}</span>
        </div>
      ) : loading ? (
        <div className="table-card">
          <LoadingSpinner message="Loading users..." />
        </div>
      ) : users.length === 0 ? (
        <div className="table-card">
          <EmptyState title="No users found" description="Nobody matches this filter." />
        </div>
      ) : (
        <div className="table-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Sections</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} style={u.is_active ? undefined : { opacity: 0.55 }}>
                  <td>
                    <div className="row-main-title">{u.name}</div>
                    <div className="row-meta-links">
                      <span className="meta-id">{u.email}</span>
                      {me?.id === u.id && <span className="meta-link">(you)</span>}
                    </div>
                  </td>
                  <td>
                    <select
                      className="filter-select"
                      value={u.role}
                      disabled={busy}
                      onChange={(e) => changeRole(u, e.target.value)}
                      title="Change role"
                    >
                      <option value="admin">admin</option>
                      <option value="editor">editor</option>
                      <option value="faculty">faculty</option>
                    </select>
                  </td>
                  <td>
                    {u.role === 'editor' ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {(u.sections || []).map((s) => (
                          <span key={s} className="category-pill">
                            {s}{' '}
                            <button
                              type="button"
                              title={`Remove ${s}`}
                              onClick={() => removeSection(u, s)}
                              style={{ marginLeft: 4, cursor: 'pointer' }}
                            >
                              ×
                            </button>
                          </span>
                        ))}
                        <button
                          type="button"
                          className="small-button secondary"
                          onClick={() => {
                            setSectionUser(u);
                            setSectionInput('');
                          }}
                        >
                          + section
                        </button>
                      </div>
                    ) : (
                      <span className="date-text">—</span>
                    )}
                  </td>
                  <td>
                    <span className={`category-pill ${u.is_active ? '' : 'archived'}`}>
                      {u.is_active ? 'active' : 'inactive'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons-cell">
                      <button
                        type="button"
                        className={`action-icon-btn ${u.is_active ? 'delete' : 'publish'}`}
                        title={u.is_active ? 'Deactivate' : 'Activate'}
                        disabled={busy || me?.id === u.id}
                        onClick={() => toggleActive(u)}
                      >
                        {u.is_active ? <UserX size={16} /> : <UserCheck size={16} />}
                      </button>
                      {u.role === 'admin' && <ShieldCheck size={16} className="text-muted" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal
        isOpen={!!sectionUser}
        onClose={() => setSectionUser(null)}
        title={`Assign section — ${sectionUser?.email}`}
        subtitle="Editors can only manage their assigned sections."
      >
        <form onSubmit={addSection} className="cms-modal-form">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Section</label>
              <select className="form-input" value={sectionInput} onChange={(e) => setSectionInput(e.target.value)}>
                <option value="">Select…</option>
                {ALL_SECTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="secondary-button" onClick={() => setSectionUser(null)}>
              Done
            </button>
            <button type="submit" className="primary-button" disabled={!sectionInput || busy}>
              Assign
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
