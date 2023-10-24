import { ComponentProps } from "react";
import Image from "next/image";

import Button from "../button";

import { VariantProps, tv } from "tailwind-variants";

export type ButtonProps = ComponentProps<"div"> &
  VariantProps<typeof card> & {
    title?: string;
    img?: string | any;
    text?: string;
    text_2?: string;
    button?: boolean;
    hidden?: boolean;
    icon?: JSX.Element;
    href?: string;
  };

const card = tv({
  base: "bg-slate-100 justify-between items-center gap-2 p-8 w-full  flexp-8 min-h-[6rem] rounded-2xl flex  rounded-2xl"
});

export function Card({
  href,
  icon,
  title,
  img,
  text,
  text_2,
  button = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <div className={card({ className })} {...props}>
      <div className=" max-w-lg flex  flex-col items-start justify-start">
        <h3 className="font-onest text-rizer-900  text-xl font-semibold ">
          {title}
        </h3>
        {text && (
          <p className="font-inter text-slate-600 text-base font-light mt-4">
            {text}
          </p>
        )}

        {text_2 && (
          <p className="font-inter text-slate-600 text-base font-light mt-2">
            {text_2}
          </p>
        )}
      </div>
      {img && (
        <figure className="hidden sm:flex  max-w-xl justify-center items-center">
          <Image src={img} alt="" className="max-w-none min-w-full" />
        </figure>
      )}
      {icon}
      {button && (
        <Button
          text="criar conta"
          href={href}
          size="xlg"
          rounded="lg"
          className="text-xl md:text-2xl "
          color="secondary"
        />
      )}
      {props.children}
    </div>
  );
}
