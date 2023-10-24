/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from "react";

import Image from "next/image";
import { VariantProps, tv } from "tailwind-variants";

const card = tv({
  base: "inline-block relative  col-span-1 w-56  max-w-[256px] h-56 rounded-3xl overflow-hidden m-8 shadow-[5px_5px_30px_-15px_rgba(0,0,0,0.3)]"
});

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof card> & {
    title?: string;
    alt?: string | any;
    src?: string | any;
  };

export default function CardClient({
  title,
  alt,
  src,
  className,
  ...props
}: CardProps) {
  return (
    <div className={card({ className })} {...props}>
      <Image src={src} alt={alt} className=" h-full" />
      <div className="text bg-rizer-800  rounded-3xl absolute  top-2/3 -left-1 h-2/3 w-[108%]  skew-x-[20deg] -skew-y-[10deg]"></div>
      <div className=" font-inter text-2xl absolute text-white  font-bold right-6 bottom-6">
        <p>{title}</p>
      </div>
    </div>
  );
}
