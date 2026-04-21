import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/admin/context";
import { motion } from "framer-motion";
import { Lock, AlertCircle, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const { user, loading: authLoading, login } = useAdmin();
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [totpCode, setTotpCode] = useState("");
  const [mfaRequired, setMfaRequired] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Navigate to dashboard once user state is confirmed set after login
  useEffect(() => {
    if (!authLoading && user) {
      navigate("/admin/dashboard");
    }
  }, [user, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const result = await login(email, password, mfaRequired ? totpCode : undefined);
      if (result.mfaRequired) {
        setMfaRequired(true);
      }
      // Navigation handled by useEffect above when user state updates
    } catch (err: any) {
      setError(err.message ?? "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0e] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#c9a84c]/30 border-t-[#c9a84c] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 border border-white/20 bg-[#c9a84c]/10 mb-4">
            <Lock className="w-5 h-5 text-[#c9a84c]" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-white">Admin Access</h1>
          <p className="text-white/50 text-sm mt-1">Mark Reid CMS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!mfaRequired ? (
            <>
              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder="admin@markreid.online"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 0 }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="w-full border border-white/20 px-4 py-3 pr-12 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="••••••••••••"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 0 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>
              <p className="text-sm text-white/50 mb-4">
                Enter the 6-digit code from your authenticator app.
              </p>
              <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                Authenticator Code
              </label>
              <input
                type="text"
                value={totpCode}
                onChange={e => setTotpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                maxLength={6}
                autoComplete="one-time-code"
                className="w-full border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition-colors text-center text-2xl tracking-widest font-mono"
                placeholder="000000"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 0 }}
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
            disabled={submitting}
            className="w-full bg-[#c9a84c] text-black font-semibold py-3 hover:bg-[#d4b86a] transition-colors disabled:opacity-50"
          >
            {submitting ? "Signing in…" : mfaRequired ? "Verify Code" : "Sign In"}
          </button>

          {mfaRequired && (
            <button
              type="button"
              onClick={() => setMfaRequired(false)}
              className="w-full text-sm text-white/40 hover:text-white transition-colors"
            >
              ← Back to password
            </button>
          )}
        </form>
      </motion.div>
    </div>
  );
}
