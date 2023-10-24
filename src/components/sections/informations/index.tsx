import Education from "../../../assets/png/education.jpg";
import Saude from "../../../assets/png/estetoscopio.jpg";
import Logistic from "../../../assets/png/logistic.jpg";
import services from "../../../assets/png/services.jpg";
import TI from "../../../assets/png/TI.jpg";
import varejo from "../../../assets/png/varejo.jpg";
import mobile_desktop from "../../../assets/svg/desktop-e-mobile.svg";
import design from "../../../assets/svg/gerador-online.svg";
import user from "../../../assets/svg/gerenciamento-de-usuario.svg";
import apis from "../../../assets/svg/integracao-de-api-externa.svg";
import no_Code from "../../../assets/svg/plataforma-no-code.svg";
import backup from "../../../assets/svg/Vector.svg";
import Button from "../../button";
import CardClient from "../../cards/clientes";
import Card from "../../cards/informations";
import Section from "../../container";

export default function Information() {
  return (
    <Section className="pb-6.25 pt-7.5">
      <header className="mx-auto  max-w-[910px]">
        <hgroup className="flex flex-col gap-10 justify-center items-center">
          <h2 className="lg:leading-[60px] text-center text-3xl md:text-4xl lg:text-5xl font-suisse text-rizer-900 font-semibold mx-auto">
            Tudo que você precisar para ter um sistema profissional
          </h2>
          <span className="text-rizer-900 text-2xl lg:text-4xl font-medium font-onest text-center">
            Não precisa saber programar !
          </span>
          <Button
            className="text=xl md:text-2xl min-w-fit "
            rounded="xl"
            size="xlg"
            text="Criar projeto"
            color="secondary"
            href="https://dashboard.rizerapps.com/login"
          />
        </hgroup>
      </header>

      <article className="bg-white grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-4 max-w-screen-lg  w-full justify-items-center">
        <Card
          src={mobile_desktop}
          title="Desktop e mobile"
          text="Todos os sistemas criados são responsivos e podem ser acessados
            online, pelo computador ou celular."
          alt="imagem de um computador e um celular"
          className="md:col-span-1 lg:col-span-2"
        />

        <Card
          src={no_Code}
          alt="imagem com numeros refletidos"
          title='"No_code"'
          text=" Não precisa ser programador. Criamos uma plataforma para tornar a
          criação de sistemas acessível a todos."
          className="md:col-span-1 lg:col-span-3 "
        />

        <Card
          src={backup}
          alt="imagem de uma nuvem"
          title="Backups automáticos"
          text="  Seus dados ficam seguros na nuvem, para você acessar quando quiser.
          Nos garantimos um ambiente em nuvem seguro, para mais, atualizações
          e manutenção de bancos de dados são feito automaticamente por nossa
          plataforma."
          className="md:col-span-2 lg:col-span-3 "
          link="Conheça as plataformas de could que utilizamos"
          href="#clouds"
        />

        <Card
          src={user}
          alt="imagem de um cadeado"
          title="Usuários e Permissões"
          text="Gerencie o que cada perfil ou usuário pode fazer dentro do seu
          sistema."
          className="md:col-span-2 lg:col-span-2"
        />

        <Card
          src={apis}
          alt="imagem de uma ponte"
          title="APIs"
          text=" Seu sistema pode ser integrado com diversos outros sistemas."
          className="md:col-span-1 lg:col-span-2"
          link="Ver mais"
          href="#apis"
        />

        <Card
          src={design}
          alt="imagem de uma paleta de cores"
          title="Design"
          text="Escolha dentre diversos templates de design e paletas de cores, para
          deixar o seu sistema com a sua cara."
          className="md:col-span-1 lg:col-span-3"
          link="Ver mais"
          href="#templates"
        />
      </article>

      <article className=" flex justify-center items-center flex-col w-full max-w-screen-xl  select-none gap-20">
        <hgroup className=" max-w-[910px] flex flex-col gap-6">
          <h2 className=" lg:leading-[60px] text-center text-3xl md:text-4xl lg:text-5xl font-suisse text-rizer-900 font-semibold mx-auto ">
            Crie seu próprio sistema. Do seu jeito. Sem digitar nenhum código.
          </h2>
          <p className="text-center text-2xl font-semibold text-black font-inter">
            Aumente a eficiência do seu time, tenha mais controle sobre os dados
            do seu negócio e Centralize todas as informações
          </p>
        </hgroup>

        <video
          controls
          className=" rounded-xl  xl:max-w-screen-lg aspect-video"
        >
          <source src="./video.mp4" type="video/mp4" />
          <track
            src=""
            kind="captions"
            srcLang="pt"
            label="portugues_captions"
          ></track>
        </video>

        <Button
          size="xlg"
          color="primary"
          text="Ir aos primeiros passos"
          className="text-xl md:text-2xl min-w-fit "
        />
      </article>
      <article className=" flex justify-center items-center flex-col w-full max-w-screen-2xl  select-none gap-20">
        <hgroup className=" max-w-[910px]">
          <h2 className="lg:leading-[60px] text-center text-3xl md:text-4xl lg:text-5xl font-suisse text-rizer-900 font-semibold mx-auto">
            Já ajudamos{" "}
            <span className="text-rizer-200">milhares de clientes</span> em
            diversos setores
          </h2>
        </hgroup>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CardClient
            title="Logistica"
            src={Logistic}
            alt="imagem vista de cima de uma galpão"
          />
          <CardClient
            title="Serviços"
            src={services}
            alt="imagem de uma cafeteira"
          />
          <CardClient
            title="Varejo"
            src={varejo}
            alt="imagem de roupas em fila"
          />
          <CardClient
            title="Educação"
            src={Education}
            alt="imagem com varios materias escolares, como esquadro, tinta guache, colar, borrachas, clipes, caderno e um tablet sobra um mesa de madeira"
          />
          <CardClient
            title="TI"
            src={TI}
            alt="imagem de um tela de computador com codigos"
          />
          <CardClient
            title="Saúde"
            src={Saude}
            alt="Imagens de um estetoscopio verde sobre documentodos e um caneta azul ao fundo"
          />
        </div>
      </article>
    </Section>
  );
}
