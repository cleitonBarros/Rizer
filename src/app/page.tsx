import { BsWhatsapp } from "react-icons/bs";

import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import Cloud from "../components/sections/cloud";
import Contact from "../components/sections/contact";
import Integration from "../components/sections/integration";
import Templates from "../components/sections/templates";
import Testimonials from "../components/sections/testimonials";
import Information from "../components/sections/informations";
import  AboutUs  from "../components/sections/aboutUs";
import About from "../components/sections/plataforma";
import Hero from "../components/sections/hero";
import Planos from "../components/sections/planos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center ">
        <Hero />
        <About />
        <AboutUs />
        <Information />
        <Templates />
        <Integration />
        <Planos />
        <Cloud />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
      <Button
        className="fixed right-4 bottom-4 z-10"
        icon={<BsWhatsapp  size={40}/>}
        size="null"
        rounded="xl"
        color="primary"
        aria-label="clique para ir para whatapp"
        aria-describedby="whatapp-button"
        title="whatsapp"
        href="https://web.whatsapp.com/send/?phone=5571992301699&text=Quero%20falar%20com%20um%20especialista%20da%20Rizer!"
      />
    </>
  );
}
