import Section from "../../container";
import { BiGitCommit, BiCheck } from "react-icons/bi";
import Button from "@/components/button";

export default function Planos() {
  return (
    <>
      <Section
        backgroundColor="primary"
        className=" pb-7.5 pt-6.25"
        id="planos"
      >
        <header className="mx-auto  max-w-[910px]">
          <hgroup className=" flex flex-col gap-4">
            <h2 className="lg:leading-[60px] text-center text-3xl md:text-4xl lg:text-5xl font-suisse text-white font-semibold mx-auto">
              Planos e Preços
            </h2>
            <p className=" text-center text-white  font-light text-xl sm:text-2xl md:text-4xl font-inter mb-6 md:mb-8">
              Planos flexíveis e escaláveis que se ajustam às suas necessidades
            </p>
          </hgroup>
        </header>
        <article className="grid grid-cols-1  md:grid-cols-2 max-w-screen-md w-full  justify-items-center  gap-x-6 gap-y-6">
          <div className=" group bg-rizer-800 col-span-1 md:col-span-2 w-full flex justify-center items-center p-10 rounded-3xl ">
            <h3 className=" text-center text-green-light  font-suisse text-5xl font-bold ">
              Professional
            </h3>
          </div>
          <div className="bg-green-light col-span-1  flex justify-center w-full items-center p-4 rounded-3xl ">
            <ul className=" bg-rizer-900 rounded-2xl  w-full flex flex-col gap-6 justify-center items-center py-8 px-4">
              <li className="relative p-4  rounded-3xl text-center">
                <p className="font-bold text-7xl text-white before:content-['R$'] before:text-2xl before:absolute before:top-4 before:-left-4  after:content-['/mês'] after:text-2xl after:absolute after:bottom-4 after:-right-10">
                  159
                </p>
              </li>
              <li className="p-4 w-full rounded-3xl flex justify-center  items-center">
                <Button
                  className="text-2xl"
                  text="Contratar"
                  href="https://dashboard.rizerapps.com/login"
                  size="xlg"
                  rounded="md"
                />
              </li>
            </ul>
          </div>
          <div className="bg-green-light col-span-1  flex justify-start w-full items-center p-10 rounded-3xl ">
            <ul className=" flex flex-col gap-2  items-start ">
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>Limite de 10 Usuarios</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>10 GB de armazenamento</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Backups</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Certificado de Segurança</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Domínio Personalizado</span>
              </li>
            </ul>
          </div>
        </article>

        <article className="grid grid-cols-1  md:grid-cols-2 max-w-screen-md w-full  justify-items-center  gap-x-6 gap-y-6">
          <div className=" group bg-rizer-800 col-span-1  w-full flex justify-center items-center p-10 rounded-3xl ">
            <h3 className=" text-center text-blue-light  font-suisse text-5xl font-bold ">
              PME
            </h3>
          </div>
          <div className=" group bg-rizer-800 col-span-1  w-full flex justify-center items-center p-10 rounded-3xl ">
            <h3 className=" text-center text-blue-light  font-suisse text-5xl font-bold ">
              Popular
            </h3>
          </div>
          <div className="bg-blue-light col-span-1  flex justify-center w-full items-center p-4 rounded-3xl ">
            <ul className=" bg-rizer-900 rounded-2xl  w-full flex flex-col gap-6 justify-center items-center py-8 px-4">
              <li className="relative p-4  rounded-3xl text-center">
                <p className="font-bold text-7xl text-white before:content-['R$'] before:text-2xl before:absolute before:top-4 before:-left-4  after:content-['/mês'] after:text-2xl after:absolute after:bottom-4 after:-right-10">
                  399
                </p>
              </li>
              <li className="p-4 w-full rounded-3xl flex justify-center  items-center">
                <Button
                  className="text-2xl"
                  text="Contratar"
                  href="https://dashboard.rizerapps.com/login"
                  size="xlg"
                  rounded="md"
                />
              </li>
            </ul>
          </div>
          <div className="bg-blue-light col-span-1  flex justify-start w-full items-center p-10 rounded-3xl ">
            <ul className=" flex flex-col gap-2  items-start ">
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>Limite de 30 Usuarios</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>30 GB de armazenamento</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Backups</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Certificado de Segurança</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Domínio Personalizado</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Servidor SMTP</span>
              </li>
            </ul>
          </div>
        </article>

        <article className="grid grid-cols-1  md:grid-cols-2 max-w-screen-md w-full  justify-items-center  gap-x-6 gap-y-6">
          <div className=" group bg-rizer-800 col-span-1 md:col-span-2 w-full flex justify-center items-center p-10 rounded-3xl ">
            <h3 className=" text-center text-rizer-50  font-suisse text-5xl font-bold ">
              Startup
            </h3>
          </div>
          <div className="bg-rizer-50 col-span-1 flex justify-center w-full items-center p-4 rounded-3xl ">
            <ul className=" bg-rizer-900 rounded-2xl h-full w-full flex flex-col gap-6 justify-center items-center py-8 px-4">
              <li className="relative p-4  rounded-3xl text-center">
                <p className="font-bold text-7xl text-white before:content-['R$'] before:text-2xl before:absolute before:top-4 before:-left-4  after:content-['/mês'] after:text-2xl after:absolute after:bottom-4 after:-right-10">
                  939
                </p>
              </li>
              <li className="p-4 w-full rounded-3xl flex justify-center  items-center">
                <Button
                  className="text-2xl"
                  text="Contratar"
                  href="https://dashboard.rizerapps.com/login"
                  size="xlg"
                  rounded="md"
                />
              </li>
            </ul>
          </div>
          <div className="bg-rizer-50 col-span-1 flex  justify-between  items-start w-full p-10 rounded-3xl ">
            <ul className=" flex flex-col gap-2  items-start ">
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>Limite de 100 Usuarios</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>100 GB de armazenamento</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Backups</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Certificado de Segurança</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Domínio Personalizado</span>
              </li>

              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Servidor SMTP</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Integração com power BI</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Gráfico Dashboard</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Fluxo Financeiro</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Notas Fiscais de Serviços</span>
              </li>
            </ul>
          </div>
        </article>

        <article className="grid grid-cols-1  md:grid-cols-2 max-w-screen-md w-full  justify-items-center  gap-x-6 gap-y-6">
          <div className=" group bg-rizer-800 col-span-1 md:col-span-2 w-full flex justify-center items-center p-10 rounded-3xl ">
            <h3 className=" text-center text-white  font-suisse text-5xl font-bold ">
              Enterprise
            </h3>
          </div>
          <div className="bg-rizer-800 col-span-1  flex justify-center w-full items-center p-4 rounded-3xl ">
            <ul className=" bg-rizer-900 rounded-2xl h-full w-full flex flex-col gap-6 justify-center items-center py-8 px-4">
              <li className="relative p-4  rounded-3xl text-center">
                <p className="font-bold text-7xl text-white before:content-['R$'] before:text-2xl before:absolute before:top-4 before:-left-4  after:content-['/mês'] after:text-2xl after:absolute after:bottom-4 after:-right-10">
                  1.790
                </p>
              </li>
              <li className="p-4 w-full rounded-3xl flex justify-center  items-center">
                <Button
                  className="text-2xl"
                  text="Contratar"
                  href="https://dashboard.rizerapps.com/login"
                  size="xlg"
                  rounded="md"
                />
              </li>
            </ul>
          </div>
          <div className="bg-white col-span-1 flex  justify-between  items-start  w-full  p-10 rounded-3xl ">
            <ul className=" flex flex-col gap-2  justify-start items-start ">
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>Limite de 100 Usuarios</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiGitCommit color="Blue" />
                <span>100 GB de armazenamento</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Backups</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Certificado de Segurança</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Domínio Personalizado</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Servidor SMTP</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Integração com power BI</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Gráfico Dashboard</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Fluxo Financeiro</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Notas Fiscais de Serviços</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Notas Fiscais de Produtos</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>API</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Sistema White Label</span>
              </li>
              <li className="flex justify-center items-center gap-2 text-lg text-black font-medium font-inter">
                <BiCheck color="DarkGreen" />
                <span>Máquina Dedicada</span>
              </li>
            </ul>
          </div>
        </article>
      </Section>
    </>
  );
}
