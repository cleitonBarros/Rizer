import { Card } from "@/components/cards";
import image_03 from "../../../assets/png/image 2.png";
import image_01 from "../../../assets/svg/chatgpt-icon 1.svg";
import Button from "../../button";

import Section from "../../container";
import { BsArrowReturnRight } from "react-icons/bs";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { FaMicrophone } from "react-icons/fa";

export default function About() {
  return (
    <Section className=" pb-6.25 pt-7.5" id="funcionalidades">
      <header className="max-w-[910px] mx-auto">
        <hgroup>
          <h2 className="text-rizer-900 text-3xl md:text-4xl lg:text-5xl font-semibold font-suisse text-center">
            Conheça um pouco da nossa{" "}
            <span className="text-rizer-200">plataforma</span>
          </h2>
        </hgroup>
      </header>
      <article className="bg-white grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 max-w-screen-lg  w-full justify-items-center">
        <Card
          title="Integração com IA"
          text="Para facilitar a crianção do seu sistema, implementamos uma
              integração com o chatGPT, para que você assim conseguira criar ou
              iniciar o seu sistema de gerenciamento a parti de comando de voz."
          img={image_01}
          className="md:col-span-2 lg:col-span-3"
        />

        <Card
          title="Personalize formulários"
          text=" Na Rizer criar e personalizar formularios é extremamente facil,
          nossa plataforma funciona com o sistema de drag and drop (pegar e
          arrastar)"
          img={image_03}
          className="md:flex-row md:col-span-2 lg:col-span-3 sm:pb-0 md:pr-0"
        />

        <Card
          title="Tabelas inteligentes"
          text=" Verificação automática de caracteres e espaços, preenchimento
          automático de endereço ao adicionar somente o CEP, validação que
          garante que os CPFs inseridos são reais."
          text_2=" São centenas de tipos de campos e formulários inteligentes para
          você escolher e tornar o seu sistema ainda mais ágil."
          className=" items-start flex-col md:col-span-2 lg:col-span-2 "
        >
          <video autoPlay loop muted playsInline>
            <source src="./TableInteligent.mp4" type="video/mp4" />
            <track
              src=""
              kind="captions"
              srcLang="pt"
              label="portugues_captions"
            ></track>
          </video>
        </Card>
        <Card
          title="Criar sua conta é gratuito !"
          icon={<PiUserCirclePlusLight size={64} />}
          className=" justify-evenly flex-col  lg:col-span-1 text-center"
          button
          href="https://dashboard.rizerapps.com/register"
        />
        <Card
          title="Vamos criar seu sistema? Digite ou fale o que precisa"
          icon={<FaMicrophone size={64} />}
          className=" justify-evenly flex-col  lg:col-span-1 text-center"
        />

        <Card
          title="Sistema automatizado"
          text="Configure seu sistema para que ele execute tarefas de forma
          automatizada"
          text_2=" São centenas de tipos de campos e formulários inteligentes para
          você escolher e tornar o seu sistema ainda mais ágil."
          className="items-start  flex-col  md:col-span-2 lg:col-span-2  "
        >
          <ul className=" ml-5 mt-5 flex  flex-col  gap-4">
            <li className="flex items-center justify-start gap-4">
              <BsArrowReturnRight />
              <p>
                Criar relatórios e Indicadores para qualquer módulo do sistema.
              </p>
            </li>
            <li className="flex items-center justify-start gap-4">
              <BsArrowReturnRight />
              <p>Automação para agendamento de consulta</p>
            </li>
            <li className="flex items-center justify-start gap-4">
              <BsArrowReturnRight />
              <p>
                Integração com Power BI com construção de dashboard com gráficos
                personalizados.
              </p>
            </li>
            <li className="flex items-center justify-start gap-4">
              <BsArrowReturnRight />
              <p>
                Cadastrar diversos produtos e suas respectivas características
                em tabelas dinamicas
              </p>
            </li>
          </ul>
        </Card>
        <Card className="  hidden sm:flex flex-col md:col-span-2 lg:col-span-3 text-center">
          <video autoPlay loop muted playsInline>
            <source src="./criarSistema.mp4" type="video/mp4" />
            <track
              src=""
              kind="captions"
              srcLang="pt"
              label="portugues_captions"
            ></track>
          </video>
        </Card>
      </article>
      <Button
        text="Conhecer mais"
        size="xlg"
        rounded="xl"
        color="secondary"
        className="text-lg"
        href="https://rizer.com.br/primeiros-passos"
      />
    </Section>
  );
}
