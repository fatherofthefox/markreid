import { useState } from "react";
import { AdminLayout, AdminPageHeader } from "@/admin/layout";
import { api } from "@/admin/api";
import { ShieldCheck, ShieldOff } from "lucide-react";

export default function AdminSecurity() {
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [secret, setSecret] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"idle" | "scanning" | "done">("idle");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const setupMfa = async () => {
    try {
      const result = await api.auth.mfaSetup();
      setQrDataUrl(result.qrDataUrl);
      setSecret(result.secret);
      setStep("scanning");
    } catch (e: any) {
      setError(e.message);
    }
  };

  const enableMfa = async () => {
    setError("");
    try {
      await api.auth.mfaEnable(code);
      setStep("done");
      setSuccess("Two-factor authentication is now enabled.");
    } catch (e: any) {
      setError(e.message);
    }
  };

  const disableMfa = async () => {
    if (!confirm("Disable two-factor authentication? This reduces account security.")) return;
    try {
      await api.auth.mfaDisable();
      setStep("idle");
      setQrDataUrl("");
      setSecret("");
      setSuccess("MFA disabled.");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <AdminLayout>
      <AdminPageHeader title="Security Settings" subtitle="Manage two-factor authentication" />

      <div className="max-w-md space-y-6">
        {error && <div className="p-3 bg-red-400/10 border border-red-400/20 text-red-400 text-sm">{error}</div>}
        {success && <div className="p-3 bg-green-400/10 border border-green-400/20 text-green-400 text-sm">{success}</div>}

        {step === "idle" && (
          <div className="bg-background border border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-muted-foreground" />
              <h2 className="font-semibold">Two-Factor Authentication</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Add an extra layer of security. You'll need your authenticator app every time you sign in.</p>
            <button onClick={setupMfa} className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
              Set Up Authenticator App
            </button>
          </div>
        )}

        {step === "scanning" && (
          <div className="bg-background border border-border p-6 space-y-4">
            <h2 className="font-semibold">Scan QR Code</h2>
            <p className="text-sm text-muted-foreground">Open your authenticator app (Google Authenticator, Authy, etc.) and scan this QR code.</p>
            <div className="bg-white p-4 inline-block">
              <img src={qrDataUrl} alt="MFA QR Code" className="w-48 h-48" />
            </div>
            <details className="text-sm">
              <summary className="text-muted-foreground cursor-pointer hover:text-foreground">Can't scan? Enter manually</summary>
              <code className="block mt-2 p-2 bg-secondary border border-border text-xs font-mono break-all">{secret}</code>
            </details>
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Enter 6-digit code to confirm</label>
              <div className="flex gap-2">
                <input type="text" value={code} onChange={e => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6}
                  className="w-32 bg-[#0a0a0e] border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary transition-colors text-center font-mono text-lg tracking-widest"
                  placeholder="000000" />
                <button onClick={enableMfa} disabled={code.length !== 6} className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50">
                  Verify & Enable
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="bg-background border border-border p-6">
            <div className="flex items-center gap-2 mb-4 text-green-400">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="font-semibold">MFA Enabled</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Your account is protected with two-factor authentication.</p>
            <button onClick={disableMfa} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-red-400 transition-colors">
              <ShieldOff className="w-4 h-4" /> Disable MFA
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
