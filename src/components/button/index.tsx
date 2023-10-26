import { ComponentProps } from "react";

import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: " flex justify-center items-center text-white font-medium transition-all duration-300 hover:scale-105 font-suisse cursor-pointer",
  variants: {
    size: {
      null: "h-16 w-full max-w-[4rem]",
      xs: "h-16 w-full max-w-[4rem] py-3 px-6",
      sm: "h-10 w-full max-w-[6rem] py-3 px-6",
      md: "h-10 w-full max-w-[8rem] py-3 px-6",
      lg: "h-10 w-full max-w-[15rem] py-3 px-6",
      xlg: "h-16 w-full max-w-[15rem] py-3 px-6"
    },
    rounded: {
      null: "",
      sm: "rounded-md",
      md: "rounded-2xl",
      lg: "rounded-3xl",
      xl: "rounded-full"
    },
    color: {
      default:
        "bg-white text-black hover:bg-slate-50   border-x border-y  border-slate-700",
      primary: "bg-green-700 hover:bg-green-600",
      secondary: "bg-rizer-800 hover:bg-rizer-900"
    }
  },
  defaultVariants: {
    rounded: "sm",
    size: "md",
    color: "default"
  }
});

export type ButtonProps = ComponentProps<"a"> &
  VariantProps<typeof button> & {
    text?: string;
    icon?: JSX.Element;
    href?: string;
    title?: string;
  };

export default function Button({
  text,
  color,
  size,
  icon,
  rounded,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      role="link"
      rel="noreferrer"
      target="_blank"
      className={button({ size, color, rounded, className })}
      {...props}
    >
      {icon}
      {text}
    </a>
  );
}
