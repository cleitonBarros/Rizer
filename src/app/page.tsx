"use client";
import { BsArrowUpCircleFill, BsWhatsapp } from "react-icons/bs";

import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import AboutUs from "../components/sections/aboutUs";
import Cloud from "../components/sections/cloud";
import Contact from "../components/sections/contact";
import Hero from "../components/sections/hero";
import Information from "../components/sections/informations";
import Integration from "../components/sections/integration";
import Planos from "../components/sections/planos";
import About from "../components/sections/plataforma";
import Templates from "../components/sections/templates";
import Testimonials from "../components/sections/testimonials";

export default function Home() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
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

      <button
        className="fixed   right-6 sm:right-24  bottom-24 sm:bottom-5 z-10 rounded-full"
        aria-label="Ir ao topo"
        aria-describedby="ir ao topo"
        title="ir ao topo"
        onClick={scrollTop}
        role="link"
      >
        <BsArrowUpCircleFill size={32} color={"blue"} />
      </button>

      <Button
        className="fixed right-4 bottom-4 z-10"
        icon={<BsWhatsapp size={40} />}
        size="null"
        rounded="xl"
        color="primary"
        aria-label="clique para ir para whatapp"
        aria-describedby="whatapp-button"
        title="whatsapp"
        href="https://api.whatsapp.com/send?phone=5571992301699&text=Quero%20falar%20com%20um%20especialista%20rizer%20!"
      />
    </>
  );
}
