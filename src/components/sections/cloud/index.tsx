import ocean from "../../../assets/png/digitalocean.png";
import amazon from "../../../assets/svg/amazon.svg";
import google from "../../../assets/svg/googleCloud.svg";
import microsoft from "../../../assets/svg/microsoft_azure.svg";
import Section from "../../container";

import Image from "next/image";

export default function Cloud() {
  return (
    <>
      <Section className=" pb-7.5 pt-6.25" id="clouds">
        <header className="max-w-[910px]">
          <hgroup className=" mx-auto">
            <h2 className="lg:leading-[60px] text-center text-3xl md:text-4xl lg:text-5xl font-suisse text-rizer-900 font-semibold mx-auto">
              Todos os planos contam com backups automáticos, certificados de
              segurança e infraestrutura de ponta.
            </h2>
          </hgroup>
        </header>
        <article className=" flex justify-center items-center flex-col w-full max-w-screen-2xl  select-none">
          <div className=" flex items-center justify-items-center max-w-[910px]">
            <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
              <li className=" w-32  md:w-auto md:col-span-1 flex justify-center items-center  ">
                <Image   src={amazon} alt="logo da amazon aws" />
              </li>
              <li className=" w-36 md:w-auto md:col-span-1  flex justify-end items-center  ">
                <Image  src={google} alt="logo da google clound" />
              </li>
              <li className=" w-32  md:w-auto md:col-span-1  flex justify-end items-center  ">
                <Image src={ocean} alt="logo da digital ocean" />
              </li>
              <li className=" w-32 md:w-auto  md:col-span-1  flex justify-end items-center  ">
                <Image src={microsoft} alt="logo da microsoft azure" />
              </li>
            </ul>
          </div>
        </article>
      </Section>
    </>
  );
}
