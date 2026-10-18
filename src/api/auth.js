import { apiRequest } from "./client";

export const getMe = () => apiRequest("/v1/auth/me");
export const logout = () => apiRequest("/v1/auth/logout", { method: "POST" });
export const googleLogin = (idToken, nonce) =>
  apiRequest("/v1/auth/google", {
    method: "POST",
    body: JSON.stringify({ id_token: idToken, nonce }),
  });

// CMS test helpers (role-gated by backend)
export const listNotices = (params = "") => apiRequest(`/v1/notices${params}`);
export const createNotice = (payload) =>
  apiRequest("/v1/notices", { method: "POST", body: JSON.stringify(payload) });
export const listNews = (params = "") => apiRequest(`/v1/news${params}`);
export const createNews = (payload) =>
  apiRequest("/v1/news", { method: "POST", body: JSON.stringify(payload) });
export const listUsers = () => apiRequest("/v1/admin/users");
