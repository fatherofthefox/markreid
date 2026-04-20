import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { api } from "./api";

interface AdminUser { id: number; email: string }
interface AdminContextValue {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string, totp?: string) => Promise<{ mfaRequired?: boolean }>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const u = await api.auth.me();
      setUser(u);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    refresh().finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string, totp?: string) => {
    const result = await api.auth.login(email, password, totp);
    if (!result.mfaRequired) await refresh();
    return result;
  };

  const logout = async () => {
    await api.auth.logout();
    setUser(null);
  };

  return (
    <AdminContext.Provider value={{ user, loading, login, logout, refresh }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used inside AdminProvider");
  return ctx;
}
