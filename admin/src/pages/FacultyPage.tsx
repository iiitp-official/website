import React, { useEffect, useState } from 'react';
import { apiRequest } from '../api/client';
import { useAuth } from '../context/useAuth';
import { AccessDenied } from '../components/AccessDenied';

type Faculty = { id: number; name: string; email: string; designation?: string; department?: string; bio?: string };
export const FacultyPage: React.FC = () => {
  const { user, isAdmin } = useAuth(); const [items, setItems] = useState<Faculty[]>([]); const [selected, setSelected] = useState<Faculty | null>(null); const [message, setMessage] = useState('');
  useEffect(() => { apiRequest<{ faculty: Faculty[] }>('/v1/faculty?limit=100').then((r) => setItems(r.faculty)).catch((e) => setMessage(e.message)); }, []);
  const save = async () => { if (!selected) return; try { const r = await apiRequest<{ faculty: Faculty }>(`/v1/faculty/${selected.id}`, { method: 'PATCH', body: JSON.stringify(selected) }); setItems(items.map((x) => x.id === selected.id ? r.faculty : x)); setMessage('Profile saved.'); } catch (e) { setMessage((e as Error).message); } };
  if (!isAdmin && user?.role !== 'faculty') return <AccessDenied sectionName="Faculty Profiles" />;
  return <div className="page"><div className="page-header"><div><h1>Faculty Profiles</h1><p>Browse profiles and edit your own profile.</p></div></div>{message && <p>{message}</p>}<div className="table-card"><table><thead><tr><th>Name</th><th>Department</th><th>Email</th><th /></tr></thead><tbody>{items.map((f) => <tr key={f.id}><td>{f.name}</td><td>{f.department || '—'}</td><td>{f.email}</td><td><button className="button secondary" onClick={() => setSelected({ ...f })}>Edit</button></td></tr>)}</tbody></table></div>{selected && <div className="modal-overlay"><div className="modal"><h2>Edit profile</h2><label>Name<input value={selected.name} onChange={(e) => setSelected({ ...selected, name: e.target.value })} /></label><label>Designation<input value={selected.designation || ''} onChange={(e) => setSelected({ ...selected, designation: e.target.value })} /></label><label>Bio<textarea value={selected.bio || ''} onChange={(e) => setSelected({ ...selected, bio: e.target.value })} /></label><button className="button" onClick={save}>Save</button><button className="button secondary" onClick={() => setSelected(null)}>Cancel</button></div></div>}</div>;
};
