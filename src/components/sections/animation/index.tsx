/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";

import image_01 from "../../../assets/png/image_01.webp";
import image_02 from "../../../assets/png/image_02.webp";
import image_03 from "../../../assets/png/image_03.webp";

import Image from "next/image";

export default function Animation() {
  const refMiddleImage = useRef<HTMLImageElement>(null!),
    refLeftImage = useRef<HTMLImageElement>(null!),
    refRightImage = useRef<HTMLImageElement>(null!),
    refLeftImage2 = useRef<HTMLImageElement>(null!),
    refRightImage2 = useRef<HTMLImageElement>(null!);

  useEffect(() => {
    refMiddleImage.current.classList.add("img-middle");
    refLeftImage.current.classList.add("img-slide-left");
    refRightImage.current.classList.add("img-slide-right");
    refLeftImage2.current.classList.add("img-slide-left-2");
    refRightImage2.current.classList.add("img-slide-right-2");
  }, []);

  return (
    <div className="flex flex-col mt-10 z-10 max-w-5xl">
      <div className=" group flex flex-col relative h-auto">
        <div
          ref={refMiddleImage}
          className="img-cental  transition-all duration-300"
        >
          <figure className="mx-auto">
            <Image
              src={image_02}
              alt="imagem da pagina completa"
              className="h-auto mx-auto max-w-full xl:max-w-screen-md 2xl:max-w-[52rem]"
            />
          </figure>
        </div>
        <figure
          ref={refLeftImage}
          className=" absolute -top-3  right-0 bottom-0 left-0 mx-auto hidden xl:block xl:max-w-[440px] 2xl:hidden 2xl:max-w-[600px] transition-all duration-300"
        >
          <Image src={image_01} alt="imagem da pagina " className="w-full" />
        </figure>
        <figure
          ref={refRightImage}
          className=" absolute top-0 right-0 bottom-0 left-0 mx-auto hidden xl:block xl:max-w-[440px] 2xl:hidden  2xl:max-w-[600px]  transition-all duration-300"
        >
          <Image src={image_03} alt="imagem da pagina" className="w-full" />
        </figure>
        <figure
          ref={refLeftImage2}
          className=" absolute -top-3  right-0 bottom-0 left-0 mx-auto hidden xl:max-w-[440px] 2xl:block 2xl:max-w-[600px]  transition-all duration-300"
        >
          <Image src={image_01} alt="imagem da pagina" className="w-full" />
        </figure>
        <figure
          ref={refRightImage2}
          className=" absolute top-0  right-0 bottom-0 left-0 mx-auto hidden  xl:max-w-[440px] 2xl:block 2xl:max-w-[600px]  transition-all duration-300"
        >
          <Image src={image_03} alt="imagem da pagina" className="w-full" />
        </figure>
      </div>
      <div className="absolute -bottom-[1px] right-0 z-20 hidden w-full xl:block">
        <div className="h-44 bg-gradient-to-t  from-white to-transparent"></div>
      </div>
    </div>
  );
}
