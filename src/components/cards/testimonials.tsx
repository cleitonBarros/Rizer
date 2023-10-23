import { ComponentProps } from "react";

export type CardProps = ComponentProps<"div"> & {
  text?: string;
  name?: string;
  ocupacao?: string;
};

export function Card({ name, ocupacao, text, ...props }: CardProps) {
  return (
    <li className=" flex-[0_0_auto] text-rizer-900 text-2xl  font-semibold m-1 py-1 px-1  ">
      <div
        className="flex justify-evenly items-start flex-col w-[28rem] h-40 py-2 px-4 bg-slate-100 rounded-lg font-inter cursor-pointer border-x border-y"
        {...props}
      >
        <p className=" text-sm text-zinc-600 font-light">{text}</p>
        <strong className="text-base text-rizer-900 font-bold ">{name}</strong>
        <p className="text-base text-zinc-700 font-light tracking-widest  ">
          {ocupacao}
        </p>
      </div>
    </li>
  );
}
