import logo from "../../assets/svg/rizer-sistemas.svg";
import Button from "../button";

import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex justify-center items-center w-full h-auto shadow shadow-slate-100  border-b">
        <nav className="flex justify-between items-center w-full max-w-screen-2xl  p-4 ">
          <a
            role="link"
            href="#"
            className="w-24 md:w-32 h-auto"
            aria-label="clique para ir ao topo da pagina"
            title="rizer"
          >
            <Image
              role="Landmark"
              className="h-8 md:h-auto w-full"
              src={logo}
              alt="Logo da rizer, um cubo 3D azul e como Rizer à direita"
            />
          </a>
          <div className=" hidden md:flex justify-end items-center gap-8 w-full">
            <ul className="flex justify-end items-baseline gap-6 w-full max-w-2xl h-auto">
              <li>
                <a
                  href="#planos"
                  className="text-lg hover:font-medium "
                  aria-label="clique nesse link ir a sessão plano se valores"
                  title="planos e valores"
                  role="link"
                >
                  Planos e valores
                </a>
              </li>
              <li>
                <Button
                  role="link"
                  text="Entrar"
                  color="secondary"
                  size="sm"
                  rounded="lg"
                  aria-label="clique para ir para efetuar o login"
                  aria-describedby="Login-button"
                  title="Login"
                  href="https://dashboard.rizerapps.com/login"
                />
              </li>
            </ul>
            <Button
              text="Fale com um especialista"
              color="primary"
              size="lg"
              rounded="sm"
              className="min-w-fit"
              aria-label="clique para ir para entrar em contato com um especialista"
              aria-describedby="especialista-button"
              title="whatsapp"
              href="https://web.whatsapp.com/send/?phone=5571992301699&text=Quero%20falar%20com%20um%20especialista%20da%20Rizer!"
            />
          </div>
        </nav>
      </header>
    </>
  );
}
