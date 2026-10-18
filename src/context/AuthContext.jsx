import React, { createContext, useContext, useCallback, useEffect, useState } from "react";
import { getMe, logout as apiLogout } from "../api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      const res = await getMe();
      setUser(res.user);
      return res.user;
    } catch {
      setUser(null);
      return null;
    }
  }, []);

  useEffect(() => {
    refreshUser().finally(() => setLoading(false));
  }, [refreshUser]);

  const logout = async () => {
    try {
      await apiLogout();
    } catch {
      // ignore
    } finally {
      setUser(null);
      window.location.href = "/login";
    }
  };

  const isAdmin = user?.role === "admin";
  const isEditor = user?.role === "editor";
  const isFaculty = user?.role === "faculty";

  const canAccessSection = useCallback(
    (section) => {
      if (!user) return false;
      if (user.role === "admin") return true;
      if (user.role === "editor" && Array.isArray(user.sections)) {
        return user.sections.includes(String(section).toLowerCase());
      }
      // faculty can access their own faculty section
      if (user.role === "faculty" && String(section).toLowerCase() === "faculty") return true;
      return false;
    },
    [user]
  );

  const value = {
    user,
    loading,
    error: null,
    refreshUser,
    logout,
    isLoggedIn: !!user,
    isAdmin,
    isEditor,
    isFaculty,
    canAccessSection,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
