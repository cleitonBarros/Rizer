import { DataTestimonial } from "../../../utils/testimonials.data";
import { Card } from "../../cards/testimonials";
import Section from "../../container";

export default function Testimonials() {
  return (
    <Section className=" pb-7.5 pt-6.25">
      <header className="mx-auto  max-w-[910px]">
        <hgroup>
          <h2 className="lg:leading-[60px] text-center text-3xl md:text-4xl lg:text-5xl font-suisse text-rizer-900 font-semibold mx-auto">
            <span className=" font-bold text-rizer-200">
              Junte-se a milhares de clientes e empresas
            </span>{" "}
            e crie seu sistema através da nossa plataforma
          </h2>
        </hgroup>
      </header>
      <div className="  overflow-hidden w-full   ">
        <menu className=" group gap-0 relative flex items-center justify-center overflow-hidden w-full select-none ">
          <ul role="marquee"  className=" animate-scroll group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
          <ul role="marquee" className=" animate-scroll group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
          <ul role="marquee" className=" animate-scroll group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
        </menu>
        <menu className=" group gap-0 relative flex  items-center justify-center overflow-hidden w-full select-none ">
          <ul role="marquee" className="  animate-scroll_reverse  group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
          <ul role="marquee" className="  animate-scroll_reverse  group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
          <ul role="marquee" className="  animate-scroll_reverse  group-hover:pause  flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
        </menu>
        <menu className="group gap-0 relative flex items-center justify-center overflow-hidden w-full select-none ">
          <ul role="marquee" className=" animate-scroll group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
          <ul role="marquee" className=" animate-scroll group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
          <ul role="marquee" className=" animate-scroll group-hover:pause flex justify-around gap-0  min-w-fit flex-shrink-0">
            {DataTestimonial.map((data, i) => (
              <Card
                key={i}
                ocupacao={data.role}
                name={data.nome}
                text={data.description}
              />
            ))}
          </ul>
        </menu>
      </div>
    </Section>
  );
}
