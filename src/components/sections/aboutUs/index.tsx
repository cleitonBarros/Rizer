import image_02 from "../../../assets/svg/briefcase.svg";
import image_01 from "../../../assets/svg/eye.svg";
import Section from "../../container";

import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Section className=" bg-about bg-cover bg-no-repeat bg-center pb-7.5 pt-6.25">
        <header className="max-w-[910px] mx-auto">
          <hgroup>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-onest font-normal text-white text-center ">
              Leve a gestão do seu negócio para outro nível
            </h2>
          </hgroup>
        </header>
        <article className=" flex justify-center items-center flex-col w-full max-w-screen-2xl  select-none">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 justify-items-center first-letter:gap-2 max-w-[910px]">
            <p className=" text-xl text-white font-regular font-inter md:col-span-2">
              Somos uma plataforma para criação e desenvolvimento de sistemas
              empresariais, 100% via web. Criamos um ambiente de desenvolvimento
              moderno, rápido e seguro. Tudo para que você consiga em poucos
              minutos sue próprio sistema. Utilizando um conjunto de componentes
              completos e customizável par atender a suas necessidade.
            </p>

            <div className=" h-auto flex  justify-start  items-start flex-col  gap-4 md:col-span-1">
              <Image src={image_01} alt="" />
              <h3 className="font-inter text-white text-xl font-bold">
                Nossa historia
              </h3>
              <p className="font-inter text-white text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                bibendum tempor purus, at condimentum est pulvinar semper.
                Curabitur aliquet convallis neque, sed bibendum justo placerat
                sed. Pellentesque consequat magna in urna ornare tempus. Ut
                finibus lorem lobortis augue auctor, eu luctus dui interdum.
              </p>
            </div>
            <div className=" h-auto flex  justify-start items-start flex-col  gap-4 md:col-span-1">
              <Image src={image_02} alt="" />
              <h3 className="font-inter text-white text-xl font-bold">
                Nossa visão
              </h3>
              <p className="font-inter text-white text-lg ">
                Fornecer total liberdade para nossos cliente criar sistemas de
                gestão personalizados, como CRM, ERP, GED, sistemas satélites,
                micro SaaS e tudo o que uma empresa precisar para se destacar no
                mercado. E tudo isso por um valor extremamente acessível!
              </p>
            </div>
          </div>
        </article>
      </Section>
      <footer className=" bg-rizer-900 bg-about-data bg-cover bg-no-repeat bg-cente w-full  flex items-center justify-center  py-10">
        <article className="flex flex-col w-full mx-auto px-20 max-w-[910px] ">
          <div className="flex flex-col  justify-between  gap-14 md:flex-wrap md:flex-row">
            <div className="flex flex-col items-center justify-center text-center gap-3 lg:gap-7">
              <h3 className=" font-fredoka text-5xl text-white font-bold ">
                +25K
              </h3>
              <p className="font-medium text-white tracking-widest">CLIENTE</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 lg:gap-7">
              <h3 className=" font-fredoka text-5xl text-white font-bold">
                +10
              </h3>
              <p className="font-medium text-white tracking-widest">
                TEMPLATES
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 lg:gap-7">
              <h3 className=" font-fredoka text-5xl text-white font-bold">
                +7
              </h3>
              <p className="font-medium text-white tracking-widest">ANOS</p>
            </div>
          </div>
        </article>
      </footer>
    </>
  );
}
