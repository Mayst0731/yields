import ButtonLogin from "@/components/ButtonLogin";
import ListItems from "@/components/ListItems";
import FaqData  from "@/data/faq.json";
import FAQListItems from "@/components/FAQListItems";
import Image from "next/image";
import capybara from "../public/assets/capybara.png";
import mayflower from "../public/assets/mayflower.png";
import froggie from "../public/assets/FroggieChadDoodle.png"

export default function Home() {
  const name = "Shermaine";
  const isLoggedin = true;

  const greetings = `Hey ${ isLoggedin ? name:"there" } 🌟`

  return (
    <main>
      {/* Header */}
      <section className="bg-pink-200">
        <div className="flex justify-between items-center px-6 py-3 max-w-3xl mx-auto">
          <div className="font-bold">
            Yield First
          </div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#Pricing">Pricing</a>
            <a className="link link-hover" href="#FAQ">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedin={isLoggedin} name = {name}/>
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="px-8 text-center py-32 max-w-3xl mx-auto flex flex-col">
        <div>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
          <div className="opacity-90 mb-10">
            Create a feedback board in minutes, priorotize features, and 
            build products your customers will love.
          </div>
        </div>

        <div className="flex flew-row gap-14 justify-between place-items-center">
          <div><Image src={capybara} alt="capybara is trying this product" className=""/></div>
          <div><Image src={mayflower} alt="mayflower loves it"/></div>
          <div><Image src={froggie} alt="froggie enjoys it"/></div>
        </div>
        
        <ButtonLogin isLoggedin={isLoggedin} name = {name}/>

      </section>
      {/* Pricing */}
      <section className="bg-base-200" id="Pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>

          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 w-96 rounded-3xl max-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">/month</div>
            </div>
            
            <ul className="space-y-2">
              {
                ["Collects customers feedback", "Unlimited boards", "Admin dashboard", "24/7 support"].map((service)=><ListItems key={service}>{service}</ListItems>)
              }
            </ul>
            <ButtonLogin isLoggedin={isLoggedin} name = {name} extraStyle={"w-full"}/>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-300" id="FAQ">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">FAQ</p>

          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
              {FaqData.map((qa) => 
                <FAQListItems key={qa.question} qa={qa} />
              )}
          </ul>
        </div>
      </section>

    </main>
  );
}
