import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*");

  return (
    <main style={{ padding: 24 }}>
      <h1>Tunnelcamps v1.0</h1>
      <pre>{error ? error.message : JSON.stringify(data)}</pre>
    </main>
  );
}
