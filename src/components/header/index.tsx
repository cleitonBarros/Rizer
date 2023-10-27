"use client";
import { useState } from "react";

import logo from "../../assets/svg/rizer-sistemas.svg";
import Button from "../button";
import Side from "../side";

import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  <Hamburger
    onToggle={(toggled) => {
      if (toggled) {
        setOpen(true);
        return;
      } else {
        setOpen(false);
      }
    }}
  />;
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
                  aria-label="planos e valores"
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
                  aria-label="Entrar"
                  aria-describedby="Login-button"
                  title="Login"
                  href="https://dashboard.rizerapps.com/login"
                  className="text-lg"
                />
              </li>
            </ul>
            <Button
              text="Fale com um especialista"
              color="primary"
              size="lg"
              rounded="sm"
              className="min-w-fit text-lg  "
              aria-label="Fale com um especialista"
              aria-describedby="especialista-button"
              title="whatsapp"
              href="https://web.whatsapp.com/send/?phone=5571992301699&text=Quero%20falar%20com%20um%20especialista%20da%20Rizer!"
            />
          </div>
          <button
            name="menu hambuguer"
            className="md:hidden"
            title="menu hambuguer"
            role="link"
            aria-label="menu hamburguer"
          >
            <Hamburger
              aria-label="menu hamburguer"
              toggled={isOpen}
              toggle={setOpen}
              color="#000"
              size={32}
              duration={0.5}
            />
          </button>
        </nav>
        <Side Open={isOpen} close={setOpen} />
      </header>
    </>
  );
}
