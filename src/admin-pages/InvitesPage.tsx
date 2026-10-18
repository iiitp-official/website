import React, { useCallback, useEffect, useState } from 'react';
import { Plus, Trash2, AlertCircle, RefreshCw, MailCheck } from 'lucide-react';
import { apiRequest } from '../admin-api/client';
import { useAuth } from '../context/AuthContext';
import { AccessDenied } from '../admin-components/AccessDenied';
import { LoadingSpinner } from '../admin-components/LoadingSpinner';
import { EmptyState } from '../admin-components/EmptyState';
import { Modal } from '../admin-components/Modal';
import { ConfirmDialog } from '../admin-components/ConfirmDialog';

interface Invite {
  id: number;
  email: string;
  role: 'admin' | 'editor' | 'faculty';
  sections?: string[] | null;
  accepted: boolean;
  expires_at?: string | null;
  created_at: string;
  inviter?: { id: number; name: string; email: string } | null;
}

const ALL_SECTIONS = ['notices', 'news', 'careers', 'etenders'];

export const InvitesPage: React.FC = () => {
  const { isAdmin } = useAuth();
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [revokeId, setRevokeId] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);

  const [email, setEmail] = useState('');
  const [role, setRole] = useState('editor');
  const [sections, setSections] = useState<string[]>(['notices']);
  const [formError, setFormError] = useState<string | null>(null);

  const fetchInvites = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await apiRequest<{ invites: Invite[] }>('/v1/admin/invites');
      setInvites(res.invites);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load invites');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) fetchInvites();
    else setLoading(false);
  }, [isAdmin, fetchInvites]);

  if (!isAdmin) return <AccessDenied sectionName="Invites Administration" />;

  const toggleSection = (s: string) =>
    setSections((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setFormError('Email is required.');
      return;
    }
    try {
      setBusy(true);
      setFormError(null);
      await apiRequest('/v1/admin/invites', {
        method: 'POST',
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          role,
          sections: role === 'editor' ? sections : undefined,
        }),
      });
      setEmail('');
      setRole('editor');
      setSections(['notices']);
      setIsCreateOpen(false);
      fetchInvites();
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : 'Failed to create invite');
    } finally {
      setBusy(false);
    }
  };

  const handleRevoke = async () => {
    if (!revokeId) return;
    try {
      setBusy(true);
      await apiRequest(`/v1/admin/invites/${revokeId}`, { method: 'DELETE' });
      setRevokeId(null);
      fetchInvites();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to revoke invite');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Invites Management</h1>
          <p>Invite editors/faculty — they sign in with Google and the invite is claimed automatically.</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="secondary-button" onClick={fetchInvites} disabled={loading}>
            <RefreshCw size={16} /> Refresh
          </button>
          <button type="button" className="primary-button" onClick={() => setIsCreateOpen(true)}>
            <Plus size={18} /> New Invite
          </button>
        </div>
      </div>

      {error ? (
        <div className="error-box">
          <AlertCircle size={18} /> <span>{error}</span>
        </div>
      ) : loading ? (
        <div className="table-card">
          <LoadingSpinner message="Loading invites..." />
        </div>
      ) : invites.length === 0 ? (
        <div className="table-card">
          <EmptyState
            title="No invites yet"
            description="Create an invite so a new editor or faculty member can sign in."
            actionLabel="+ New Invite"
            onAction={() => setIsCreateOpen(true)}
          />
        </div>
      ) : (
        <div className="table-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Email & Role</th>
                <th>Sections</th>
                <th>Status</th>
                <th>Expires</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invites.map((inv) => (
                <tr key={inv.id}>
                  <td>
                    <div className="row-main-title">{inv.email}</div>
                    <div className="row-meta-links">
                      <span className="meta-id">role: {inv.role}</span>
                      {inv.inviter && <span className="meta-link">by {inv.inviter.email}</span>}
                    </div>
                  </td>
                  <td>
                    {inv.role === 'editor' ? (
                      ((inv.sections as string[]) || []).join(', ') || '—'
                    ) : (
                      <span className="date-text">—</span>
                    )}
                  </td>
                  <td>
                    <span className="category-pill">{inv.accepted ? 'accepted' : 'pending'}</span>
                  </td>
                  <td>
                    <span className="date-text">
                      {inv.expires_at ? new Date(inv.expires_at).toLocaleDateString() : '—'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons-cell">
                      {!inv.accepted && (
                        <button
                          type="button"
                          className="action-icon-btn delete"
                          title="Revoke invite"
                          onClick={() => setRevokeId(inv.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                      {inv.accepted && <MailCheck size={16} className="text-muted" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal
        isOpen={isCreateOpen}
        onClose={() => !busy && setIsCreateOpen(false)}
        title="Create Invite"
        subtitle="The person signs in with Google using this email — no password needed."
      >
        <form onSubmit={handleCreate} className="cms-modal-form">
          {formError && (
            <div className="form-error-banner">
              <AlertCircle size={16} /> <span>{formError}</span>
            </div>
          )}
          <div className="form-grid">
            <div className="form-group full-width">
              <label className="form-label">
                Email <span className="required-star">*</span>
              </label>
              <input
                type="email"
                className="form-input"
                required
                placeholder="name@cse.iiitp.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select className="form-input" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="editor">editor</option>
                <option value="faculty">faculty</option>
                <option value="admin">admin</option>
              </select>
            </div>
            {role === 'editor' && (
              <div className="form-group">
                <label className="form-label">Sections</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {ALL_SECTIONS.map((s) => (
                    <label key={s} style={{ display: 'flex', gap: 4, fontSize: 13 }}>
                      <input type="checkbox" checked={sections.includes(s)} onChange={() => toggleSection(s)} />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="modal-actions">
            <button type="button" className="secondary-button" onClick={() => setIsCreateOpen(false)} disabled={busy}>
              Cancel
            </button>
            <button type="submit" className="primary-button" disabled={busy}>
              {busy ? 'Sending…' : 'Create Invite'}
            </button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={!!revokeId}
        onClose={() => setRevokeId(null)}
        onConfirm={handleRevoke}
        title="Revoke Invite"
        message="The invite link will stop working. Continue?"
        confirmLabel="Revoke"
        variant="danger"
        loading={busy}
      />
    </div>
  );
};
