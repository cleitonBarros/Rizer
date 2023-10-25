import Button from "../../button";
import Section from "../../container";

export default function Contact() {
  return (
    <Section id="contact" backgroundColor="primary">
      <article className="flex flex-col justify-center items-center  w-full max-w-screen-2xl h-96 gap-12  ">
        <div className=" text-3xl md:text-4xl font-suisse font-semibold  text-white text-center flex flex-col gap-4">
          <h2>Nossos clientes são mais que clientes. São parceiros.</h2>
          <h2>Ainda tem dúvida se podemos te ajudar?</h2>
        </div>
        <Button
          text="Falar com um consultor"
          color="primary"
          size="xlg"
          className="text-xl md:text-2xl min-w-fit "
          aria-label="clique para falar com um consultor"
          href="https://web.whatsapp.com/send/?phone=5571992301699&text=Quero%20falar%20com%20um%20especialista%20da%20Rizer!"
        />
      </article>
    </Section>
  );
}
