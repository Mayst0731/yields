import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const name = "Shermaine";
  const isLoggedin = false;
  return (
    <main>
      <h1>Collect customer feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, priorotize features, and 
        build products your customers will love.
      </div>
      <ButtonLogin isLoggedin={isLoggedin} name = {name}/>
      <p>Hey {name} 👋🏻 </p>
      {console.log(`Hey ${name} 🌟 `)}
    </main>
  );
}
