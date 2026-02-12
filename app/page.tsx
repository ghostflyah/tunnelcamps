import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*");

  return (
    <main style={{ padding: 24 }}>
      <h1>Tunnelcamps v1.0</h1>
      <p>Phase 3 · Real-world Validation</p>
      <pre>{error ? error.message : JSON.stringify(data)}</pre>
    </main>
  );
}
// BUILD CHECK Thu Feb 12 12:57:15 +07 2026
