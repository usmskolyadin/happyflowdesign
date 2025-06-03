"use client";

import { getCsrfToken, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    getCsrfToken().then(token => setCsrfToken(token));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl mb-4">Sign in with Email</h1>
      <form
        method="post"
        action="/api/auth/signin/email"
        className="flex flex-col space-y-2"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken ?? undefined} />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@example.com"
          required
          className="border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-3 py-2 hover:bg-blue-700"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
