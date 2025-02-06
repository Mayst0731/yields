import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const name = "Shermaine";
  return (
    <main>
      <h1>Collect customer feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, priorotize features, and 
        build products your customers will love.
      </div>
      <ButtonLogin />
      <p>Hey {name} 👋🏻 </p>
      {console.log(`Hey ${name} 🌟 `)}
    </main>
  );
}
