import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const name = "Shermaine";
  const isLoggedin = true;
  return (
    <main>
      <section className="bg-pink-200">
        <div className="flex justify-between items-center px-6 py-3 max-w-3xl mx-auto">
          <div className="font-bold">
            YieldFirst
          </div>
          <div className="space-x-4">
            <a className="link link-hover">Price</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedin={isLoggedin} name = {name}/>
          </div>
        </div>
      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, priorotize features, and 
          build products your customers will love.
        </div>
        <ButtonLogin isLoggedin={isLoggedin} name = {name}/>
        {console.log(`Hey ${name} 🌟 `)}
      </section>
    </main>
  );
}
