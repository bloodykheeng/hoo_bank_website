import Header from "./site/Header";
import Hero from "./site/Hero";
import { Services, Prices, Offers, Steps, PayLater, TheApp, Contact } from "./site/Sections";
import Footer from "./site/Footer";

const Home = () => (
  <>
    <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
      Skip to content
    </a>
    <Header />
    <main>
      <Hero />
      <Services />
      <Prices />
      <Offers />
      <Steps />
      <PayLater />
      <TheApp />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
