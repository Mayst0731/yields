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
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">/month</div>
            </div>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
              </li>
              <li>Collects customer feedback</li>
              <li>Unlimited boards</li>
              <li>Admin dashboard</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
