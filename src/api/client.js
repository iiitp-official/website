// Base fetch wrapper for the public content API (Phase 5B).
// Falls back silently on failure — callers keep whatever data they already have (bundled JSON).
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export async function apiGet(path, params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, value);
    }
  });
  const qs = query.toString();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`${API_BASE_URL}${path}${qs ? `?${qs}` : ''}`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Request to ${path} failed with status ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function apiRequest(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  const method = (options.method || 'GET').toUpperCase();
  if (!['GET', 'HEAD', 'OPTIONS'].includes(method)) {
    const csrf = document.cookie
      .split('; ')
      .find((item) => item.startsWith('csrfToken='))
      ?.split('=')[1];
    if (csrf) headers['x-csrf-token'] = decodeURIComponent(csrf);
  }

  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    credentials: 'include',
    headers,
  });
  const contentType = response.headers.get('content-type');
  const data = contentType?.includes('application/json')
    ? await response.json()
    : await response.text();
  if (!response.ok) throw new Error(data?.error || `Request failed with status ${response.status}`);
  return data;
}
