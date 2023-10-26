"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

import logo from "../../assets/svg/Logo.svg";
import Button from "../button";

import { useWindowSize } from "@/hook/useWidthSize";
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  Open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

export default function Side({ Open, close }: MenuProps) {
  function closeMenu() {
    close(!Open);
  }
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 765) {
      close(false);
    }
  }, [close, width]);

  return (
    <menu
      className={`${
        !Open ? "-translate-x-full" : "translate-x-0 "
      }   fixed bottom-0 left-0 z-50 w-[65%] min-h-screen transition-all duration-200  bg-rizer-800 py-12`}
    >
      <nav className="flex justify-center items-center px-4 py-0">
        <ul className="flex justify-center flex-col items-center gap-8">
          <li>
            <a
              role="link"
              href="#"
              className="w-28 h-auto mb-8"
              aria-label="clique para ir ao topo da pagina"
              title="rizer"
            >
              <Image
                className="h-8 md:h-auto w-full"
                src={logo}
                alt="Logo da rizer, um cubo 3D azul e como Rizer à direita"
              />
            </a>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="#about"
              className=" text-xl sm:text-2xl hover:font-medium text-white "
              aria-label="sobre nos"
              title="sobre nós"
              role="link"
            >
              Sobre nós
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="#planos"
              className=" text-xl sm:text-2xl hover:font-medium text-white "
              aria-label="planos e valores"
              title="Planos e valores"
              role="link"
            >
              Planos e valores
            </Link>
          </li>
          <li>
            <Button
              role="link"
              text="Entrar"
              size="sm"
              rounded="lg"
              aria-label="Entrar"
              aria-describedby="Login-button"
              title="Login"
              href="https://dashboard.rizerapps.com/login"
              className="text-lg"
            />
          </li>
          <li onClick={closeMenu}>
            <Button
              text="Falar com especialista"
              color="primary"
              size="xlg"
              rounded="md"
              className="text-lg text-center"
              aria-label="Falar com especialista"
              aria-describedby="especialista-button"
              title="whatsapp"
              href="#contact"
            />
          </li>
        </ul>
      </nav>
    </menu>
  );
}
