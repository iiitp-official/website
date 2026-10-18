import { useCallback, useEffect, useRef, useState } from 'react';

const base = import.meta.env.VITE_API_BASE_URL || '';
const cache = new Map();
export function useApi(url, options = {}) {
  const [state, setState] = useState({ data: null, loading: Boolean(url), error: null });
  const abortRef = useRef(null);
  const request = useCallback(async (override = {}) => {
    if (!url) return;
    abortRef.current?.abort(); abortRef.current = new AbortController();
    const key = `${base}${url}`;
    if (options.cache !== false && cache.has(key)) setState({ data: cache.get(key), loading: false, error: null });
    else setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const response = await fetch(key, { ...override, signal: abortRef.current.signal });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      const data = await response.json(); cache.set(key, data); setState({ data, loading: false, error: null }); return data;
    } catch (error) { if (error.name !== 'AbortError') setState({ data: null, loading: false, error }); }
  }, [url, options.cache]);
  useEffect(() => { request(); return () => abortRef.current?.abort(); }, [request]);
  return { ...state, refetch: request };
}
