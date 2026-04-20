const BASE = "/api";

async function req<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(options?.headers ?? {}) },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error ?? "Request failed");
  }
  return res.json();
}

export const api = {
  auth: {
    me: () => req<{ id: number; email: string }>("/auth/me"),
    login: (email: string, password: string, totpCode?: string) =>
      req<{ ok: boolean; mfaRequired?: boolean }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password, totpCode }),
      }),
    logout: () => req("/auth/logout", { method: "POST" }),
    mfaSetup: () => req<{ qrDataUrl: string; secret: string }>("/auth/mfa/setup", { method: "POST" }),
    mfaEnable: (totpCode: string) => req("/auth/mfa/enable", { method: "POST", body: JSON.stringify({ totpCode }) }),
    mfaDisable: () => req("/auth/mfa/disable", { method: "POST" }),
    forgotPassword: (email: string) =>
      req("/auth/forgot-password", { method: "POST", body: JSON.stringify({ email }) }),
    resetPassword: (token: string, newPassword: string) =>
      req("/auth/reset-password", { method: "POST", body: JSON.stringify({ token, newPassword }) }),
  },
  posts: {
    list: () => req<any[]>("/admin/posts"),
    get: (id: number) => req<any>(`/admin/posts/${id}`),
    create: (data: any) => req<any>("/admin/posts", { method: "POST", body: JSON.stringify(data) }),
    update: (id: number, data: any) => req<any>(`/admin/posts/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: number) => req(`/admin/posts/${id}`, { method: "DELETE" }),
  },
  frameworks: {
    list: () => req<any[]>("/admin/frameworks"),
    get: (id: number) => req<any>(`/admin/frameworks/${id}`),
    create: (data: any) => req<any>("/admin/frameworks", { method: "POST", body: JSON.stringify(data) }),
    update: (id: number, data: any) => req<any>(`/admin/frameworks/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: number) => req(`/admin/frameworks/${id}`, { method: "DELETE" }),
  },
  content: {
    get: (section: string) => req<Record<string, string>>(`/admin/content/${section}`),
    update: (section: string, data: Record<string, string>) =>
      req(`/admin/content/${section}`, { method: "PUT", body: JSON.stringify(data) }),
  },
  media: {
    list: () => req<any[]>("/admin/media"),
    upload: async (file: File) => {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(`${BASE}/admin/media/upload`, { method: "POST", credentials: "include", body: fd });
      if (!res.ok) throw new Error("Upload failed");
      return res.json();
    },
    delete: (id: number) => req(`/admin/media/${id}`, { method: "DELETE" }),
  },
};
