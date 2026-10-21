const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  canRefresh = true
): Promise<T> {
  const isFormData = options.body instanceof FormData;

  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string> || {}),
  };
  if (options.method && !['GET', 'HEAD', 'OPTIONS'].includes(options.method.toUpperCase())) {
    const csrf = document.cookie.split('; ').find((item) => item.startsWith('csrfToken='))?.split('=')[1];
    if (csrf) headers['x-csrf-token'] = decodeURIComponent(csrf);
  }

  if (!isFormData && !headers['Content-Type']) {
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

  if (!response.ok) {
    if (response.status === 401 && canRefresh && !path.startsWith('/v1/auth/')) {
      const refreshed = await fetch(`${API_BASE_URL}/v1/auth/refresh`, { method: 'POST', credentials: 'include' });
      if (refreshed.ok) return apiRequest<T>(path, options, false);
    }
    const message =
      typeof data === 'object' && data !== null && 'error' in data
        ? String(data.error)
        : `Request failed with status ${response.status}`;

    throw new Error(message);
  }

  return data as T;
}
