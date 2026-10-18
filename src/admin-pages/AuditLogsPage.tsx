import React from 'react';
import { ClipboardList } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AccessDenied } from '../admin-components/AccessDenied';
import { useEffect, useState } from 'react';
import { apiRequest } from '../admin-api/client';

export const AuditLogsPage: React.FC = () => {
  const { isAdmin } = useAuth();
  const [logs, setLogs] = useState<any[]>([]);
  useEffect(() => { if (isAdmin) apiRequest<{ logs: any[] }>('/v1/admin/audit-logs?limit=100').then((r) => setLogs(r.logs)); }, [isAdmin]);

  if (!isAdmin) {
    return <AccessDenied sectionName="Audit Logs" />;
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Audit Logs</h1>
          <p>System audit trail recording content mutations, publishing actions, and session logins.</p>
        </div>
      </div>

      <div className="table-card">
        {logs.length ? <table><thead><tr><th>Time</th><th>User</th><th>Action</th><th>Resource</th></tr></thead><tbody>{logs.map((l) => <tr key={l.id}><td>{new Date(l.created_at).toLocaleString()}</td><td>{l.user_email || '—'}</td><td>{l.action}</td><td>{l.resource} {l.resource_id || ''}</td></tr>)}</tbody></table> : <div className="empty-state-box">
          <div className="empty-state-icon">
            <ClipboardList size={40} strokeWidth={1.5} color="#9ca3af" />
          </div>
          <h3 className="empty-state-title">Audit Trail</h3>
          <p className="empty-state-desc">
            All CMS operations (create, draft updates, publish, archive, delete) are actively recorded in the audit_logs database table with IP snapshots and action diffs.
          </p>
        </div>}
      </div>
    </div>
  );
};
