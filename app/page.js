
import Link from "next/link";
export default function Dashboard() {
  return (
    <main>
      <h1>Collect customer feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, priorotize features, and 
        build products your customers will love.
      </div>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
