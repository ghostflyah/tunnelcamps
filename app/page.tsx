"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        window.location.href = "/login";
        return;
      }

      setUser(data.user);
      setLoading(false);
    }

    checkSession();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main style={{ padding: 24 }}>
      <h1>Welcome {user.email}</h1>
      <p>Login session confirmed.</p>
    </main>
  );
}