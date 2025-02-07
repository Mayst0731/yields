import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const name = "Shermaine";
  const isLoggedin = true;
  return (
    <main>
      {/* Header */}
      <section className="bg-pink-200">
        <div className="flex justify-between items-center px-6 py-3 max-w-3xl mx-auto">
          <div className="font-bold">
            Yield First
          </div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Price</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedin={isLoggedin} name = {name}/>
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, priorotize features, and 
          build products your customers will love.
        </div>
        <ButtonLogin isLoggedin={isLoggedin} name = {name}/>
        {console.log(`Hey ${name} 🌟 `)}
      </section>
      {/* Pricing */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl max-auto">
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
