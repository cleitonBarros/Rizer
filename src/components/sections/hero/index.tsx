import Button from "../../button";
import Section from "../../container";
import Animation from "../animation";

export default function Hero() {
  return (
    <Section className=" overflow-hidden relative  h-[52rem] sm:h-[56rem] md:h-[59rem] lg:h-[74rem] xl:h-[56rem] 2xl:h-[69rem]">
      <article className="gap-10 z-10 flex justify-center items-center flex-col w-full max-w-screen-2xl  mt-28 sm:mt-32 2xl:mt-20 text-center select-none">
        <div className="flex justify-center flex-col items-center gap-9  max-w-[910px]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-rizer-900 font-onest font-bold">
            Crie um <u className=" text-rizer-200">sistema</u> para sua empresa
            em minutos
          </h1>
          <div>
            <p className="font-semibold text-xl sm:text-2xl md:text-4xl font-inter mb-6 md:mb-8">
              Gestão total, com emissão de notas fiscais.
              <u className=" text-rizer-200"> Sem burocracia. Sem stress.</u>
            </p>
            <p className="font-normal text-lg  md:text-xl text-slate-500 font-inter">
              Conte com o apoio do nosso time para construir o melhor sistema
              para seu negócio.
              <u className=" text-rizer-200">100% na nuvem.</u>
            </p>
          </div>
        </div>
        <Button
          text="Comece Gratuitamente"
          size="xlg"
          rounded="xl"
          color="secondary"
          className="text-lg"
          href="https://dashboard.rizerapps.com/login"
        />
        <Animation />
      </article>
    </Section>
  );
}
