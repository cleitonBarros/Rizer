"use client";
import { useEffect, useRef } from "react";
import image_01 from "../../../assets/png/image_01.png";
import image_02 from "../../../assets/png/image_02.png";
import image_03 from "../../../assets/png/image_03.png";
import Image from "next/image";

export default function Animation() {
  const refMiddleImage = useRef<any>(""),
    redLeftImage = useRef<any>(""),
    redRightImage = useRef<any>(""),
    redLeftImage2 = useRef<any>(""),
    redRightImage2 = useRef<any>("");

  useEffect(() => {
    setTimeout(() => {
      refMiddleImage.current.classList.add("img-middle");
      redLeftImage.current.classList.add("img-slide-left");
      redRightImage.current.classList.add("img-slide-right");
      redLeftImage2.current.classList.add("img-slide-left-2");
      redRightImage2.current.classList.add("img-slide-right-2");

    }, 200);
  }, []);

  return (
    <div className="flex flex-col mt-10 z-10 max-w-5xl">
      <div className=" group flex flex-col relative h-auto">
        <div
          ref={refMiddleImage}
          className="img-cental  transition-all duration-1000"
        >
          <figure className="mx-auto">
            <Image
              src={image_02}
              alt="algo"
              className="h-auto mx-auto max-w-full xl:max-w-screen-md 2xl:max-w-[52rem]"
            />
          </figure>
        </div>
        <figure
          ref={redLeftImage}
          className=" absolute -top-3  right-0 bottom-0 left-0 mx-auto hidden xl:block xl:max-w-[440px] 2xl:hidden 2xl:max-w-[600px] tr   transition-all duration-1000"
        >
          <Image src={image_01} alt="algo" className="w-full" />
        </figure>
        <figure
          ref={redRightImage}
          className=" absolute top-0 right-0 bottom-0 left-0 mx-auto hidden xl:block xl:max-w-[440px] 2xl:hidden  2xl:max-w-[600px]  transition-all duration-1000"
        >
          <Image src={image_03} alt="algo" className="w-full" />
        </figure>
        <figure
          ref={redLeftImage2}
          className=" absolute -top-3  right-0 bottom-0 left-0 mx-auto hidden xl:max-w-[440px] 2xl:block 2xl:max-w-[600px]  transition-all duration-1000"
        >
          <Image src={image_01} alt="algo" className="w-full" />
        </figure>
        <figure
          ref={redRightImage2}
          className=" absolute top-0  right-0 bottom-0 left-0 mx-auto hidden  xl:max-w-[440px] 2xl:block 2xl:max-w-[600px]  transition-all duration-1000"
        >
          <Image src={image_03} alt="algo" className="w-full" />
        </figure>
      </div>
      <div className="absolute -bottom-[1px] right-0 z-20 hidden w-full xl:block">
        <div className="h-44 bg-gradient-to-t  from-white to-transparent"></div>
      </div>
    </div>
  );
}
