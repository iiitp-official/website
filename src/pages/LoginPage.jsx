import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router";
import { ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { googleLogin } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "61666690202-ccu6s98rg1irbqj6agau8phluv04i4pe.apps.googleusercontent.com";

export default function LoginPage() {
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (user) navigate("/dashboard", { replace: true });
  }, [user, navigate]);

  useEffect(() => {
    const nonce = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem("oauth_nonce", nonce);

    async function handleCredentialResponse(response) {
      if (!response?.credential) {
        setError("No credential received from Google.");
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const storedNonce = sessionStorage.getItem("oauth_nonce") || undefined;
        const res = await googleLogin(response.credential, storedNonce);
        await refreshUser();
        // Role is detected from DB via /v1/auth/me inside refreshUser.
        // Admin (112415074@cse.iiitp.ac.in) lands on full dashboard automatically.
        navigate("/dashboard", { replace: true, state: { justLoggedIn: res?.user } });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Google authentication failed");
      } finally {
        setLoading(false);
      }
    }

    function initGoogle() {
      if (window.google?.accounts?.id && buttonRef.current) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          nonce,
          callback: handleCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        });
        buttonRef.current.innerHTML = "";
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
          text: "signin_with",
          shape: "rectangular",
          width: 280,
        });
      }
    }

    if (window.google?.accounts?.id) {
      initGoogle();
    } else {
      const timer = setInterval(() => {
        if (window.google?.accounts?.id) {
          clearInterval(timer);
          initGoogle();
        }
      }, 200);
      return () => clearInterval(timer);
    }
  }, [navigate, refreshUser]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow p-8 text-center">
        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
          <ShieldCheck size={30} />
        </div>
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-500 mt-2 mb-6">
          Use your institute Google account. Your role (admin / editor / faculty) is detected
          automatically from the database after sign-in.
        </p>
        {error && (
          <div className="flex gap-2 text-left bg-red-50 border border-red-200 text-red-800 rounded-lg px-3 py-2 text-sm mb-4">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}
        <div className="flex justify-center min-h-[44px]">
          {loading ? (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Loader2 size={18} className="animate-spin" /> Verifying…
            </div>
          ) : (
            <div ref={buttonRef} />
          )}
        </div>
        <p className="text-xs text-gray-400 mt-6">
          Only <span className="font-mono">iiitp.ac.in</span> / <span className="font-mono">cse.iiitp.ac.in</span> accounts
          are accepted. New accounts need an invite — except the main admin.{" "}
          <Link to="/" className="underline">Back to site</Link>
        </p>
      </div>
    </div>
  );
}
