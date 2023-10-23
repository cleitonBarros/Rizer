import Link from "next/link";
import academia from "../../../assets/png/academia.png";
import apertoDeMao from "../../../assets/png/aperto-de-mao.png";
import caixaEletronico from "../../../assets/png/caixa-eletronico.png";
import calendario from "../../../assets/png/calendario.png";
import conversao from "../../../assets/png/conversao.png";
import enfermeira from "../../../assets/png/enfermeira.png";
import erp from "../../../assets/png/erp.png";
import estoque from "../../../assets/png/estoque.png";
import graduacao from "../../../assets/png/graduacao.png";
import petshop from "../../../assets/png/petshop.png";
import Section from "../../container";

import Image from "next/image";

export default function Templates() {
  return (
    <>
      <Section backgroundColor="primary" className=" pb-7.5 pt-6.25" id="templates">
        <header className="mx-auto  max-w-[910px]">
          <hgroup>
            <h2 className="lg:leading-[60px] text-center text-3xl md:text-4xl lg:text-5xl font-suisse text-white font-semibold mx-auto">
              Comece com um comando de voz ou escolha um dos nossos{" "}
              <span className="text-rizer-100">templates prontos</span>
            </h2>
          </hgroup>
        </header>
        <article className=" flex justify-center items-center flex-col w-full max-w-screen-2xl  select-none">
          <div className=" flex items-center justify-items-center ">
            <ul className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
              <li className=" cursor-pointer md:col-span-1 flex justify-center flex-col items-center   bg-neutral-100 hover:bg-slate-100   w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out  ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={erp}
                    alt="imagem de engrenagem com o nome ERP ao meio "
                  />
                  <p className="text-xl font-inter font-bold text-black">ERP</p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={enfermeira}
                    alt="imagem de uma enfermeira"
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Consultorio
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={graduacao}
                    alt="imagem de cap de formatura "
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Escolar
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={academia}
                    alt="imagem de halters "
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Academia
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={petshop}
                    alt="imagem da pata de um cachorro "
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Petshop
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={calendario}
                    alt="imagem de um calendario"
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Agendamento
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={estoque}
                    alt="imagem de caixas"
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Estoque
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={apertoDeMao}
                    alt="imagem de um aperto de mão"
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Clientes
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={caixaEletronico}
                    alt="imagem de caixas"
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Frente de caixa
                  </p>
                </Link>
              </li>
              <li className="  cursor-pointer md:col-span-1 flex justify-center flex-col items-center gap-4  bg-neutral-100 hover:bg-slate-100 w-44 h-44 md:w-52 md:h-52 rounded-xl  transition-all delay-100 duration-500 ease-out    ">
                <Link
                  target="_blank"
                  href="https://dashboard.rizerapps.com/register"
                  className="flex justify-center flex-col items-center gap-4"
                >
                  <Image
                    className="w-20  md:w-auto"
                    src={conversao}
                    alt="imagem de um sifão $$$"
                  />
                  <p className="text-xl font-inter font-bold text-black">
                    Financeiro
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </Section>
    </>
  );
}
