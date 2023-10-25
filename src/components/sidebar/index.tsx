"use client";
import { BiMenuAltRight } from "react-icons/bi";

import Btn from "../../components/button";
import { Button } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import logo from "../../assets/svg/rizer-sistemas.svg";

import Image from "next/image";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-4 md:hidden"
          role="link"
          aria-label="botão sidebar"
          aria-describedby="bidebar-button"
          title="botão sidebar"
        >
          <BiMenuAltRight size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent className="md:hidden  bg-slate-100 " side="left">
        <SheetHeader>
          <SheetTitle className="mb-10">
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
          </SheetTitle>
          <SheetDescription>
            <ul className="flex flex-col justify-center items-center gap-6">
              <li>
                <NavigationMenuLink
                  href="#about"
                  className="text-2xl hover:font-medium "
                  aria-label="sobre nos"
                  title="sobre nos"
                  role="link"
                >
                  Sobre nós
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="#planos"
                  className="text-2xl hover:font-medium "
                  aria-label="planos e valores"
                  title="planos e valores"
                  role="link"
                >
                  Planos e valores
                </NavigationMenuLink>
              </li>
              <li>
                <SheetClose asChild>
                  <Btn
                    role="link"
                    text="Entrar"
                    color="secondary"
                    size="lg"
                    rounded="lg"
                    aria-label="Entrar"
                    aria-describedby="Login-button"
                    title="Login"
                    href="https://dashboard.rizerapps.com/login"
                    className="text-lg"
                  />
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Btn
                    role="link"
                    text="criar conta"
                    color="secondary"
                    size="lg"
                    rounded="lg"
                    aria-label="criar conta"
                    aria-describedby="criar conta"
                    title="Login"
                    href="https://dashboard.rizerapps.com/register"
                    className="text-lg"
                  />
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Btn
                    text="Fale com um especialista"
                    color="primary"
                    size="xlg"
                    rounded="lg"
                    className="min-w-fit text-lg "
                    aria-label="Falar com especialista"
                    aria-describedby="especialista-button"
                    title="whatsapp"
                    href="#contact"
                  />
                </SheetClose>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
