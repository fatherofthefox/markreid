import { useState } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/admin/context";
import { motion } from "framer-motion";
import { Lock, AlertCircle } from "lucide-react";

export default function AdminLogin() {
  const { login } = useAdmin();
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totpCode, setTotpCode] = useState("");
  const [mfaRequired, setMfaRequired] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await login(email, password, mfaRequired ? totpCode : undefined);
      if (result.mfaRequired) {
        setMfaRequired(true);
      } else {
        navigate("/admin/dashboard");
      }
    } catch (err: any) {
      setError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0e] flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 border border-border bg-primary/10 mb-4">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-foreground">Admin Access</h1>
          <p className="text-muted-foreground text-sm mt-1">Mark Reid CMS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!mfaRequired ? (
            <>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="admin@markreid.online"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="••••••••••••"
                />
              </div>
            </>
          ) : (
            <div>
              <p className="text-sm text-muted-foreground mb-4">Enter the 6-digit code from your authenticator app.</p>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Authenticator Code</label>
              <input
                type="text"
                value={totpCode}
                onChange={e => setTotpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                maxLength={6}
                autoComplete="one-time-code"
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-center text-2xl tracking-widest font-mono"
                placeholder="000000"
              />
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 p-3">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in…" : mfaRequired ? "Verify Code" : "Sign In"}
          </button>

          {mfaRequired && (
            <button type="button" onClick={() => setMfaRequired(false)} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to password
            </button>
          )}
        </form>
      </motion.div>
    </div>
  );
}
