/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from "react";

import Image from "next/image";
import { VariantProps, tv } from "tailwind-variants";

const card = tv({
  base: "rounded-2xl bg-rizer-800 flex flex-col justify-start items-start w-full h-auto  px-10 py-16 gap-10"
});

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof card> & {
    title?: string;
    text?: string;
    href?: string;
    src?: string | any;
    alt?: string | any;
    link?: string;
  };

export default function Card({
  title,
  href,
  alt,
  link,
  src,
  className,
  text,
  ...props
}: CardProps) {
  return (
    <div className={card({ className })} {...props}>
      <header className="w-auto flex flex-col gap-8 ">
        <Image src={src} alt={alt} className="w-12 h-10 " />
        <span className=" w-12 h-1 bg-green-light"></span>
        <h2 className=" text-2xl font-onest font-semibold text-white tracking-wider">
          {title}
        </h2>
      </header>
      <p className=" text-xl font-inter font-normal  text-slate-300 tracking-wider">
        {text}
      </p>
      {link && (
        <a
          className="text-lg font-inter font-medium text-white  tracking-widest underline"
          href={href}
        >
          {link}
        </a>
      )}
    </div>
  );
}
