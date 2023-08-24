import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Home</h2>
      <h2>This is only Dashboard,</h2>
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  );
}
