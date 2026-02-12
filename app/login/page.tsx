"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function signIn() {
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMsg(error ? error.message : "Check your email for the login link");
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <input
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={signIn}>Send magic link</button>
      <p>{msg}</p>
    </main>
  );
}
