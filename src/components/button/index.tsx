import { ComponentProps } from "react";

import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "flex justify-center items-center text-white font-medium transition-all duration-300 hover:scale-105 font-suisse cursor-pointer",
  variants: {
    size: {
      null:"h-16 w-16",
      xs: "h-16 w-16 py-3 px-6",
      sm: "h-10 w-24 py-3 px-6",
      md: "h-10 w-32 py-3 px-6",
      lg: "h-10 w-60 py-3 px-6",
      xlg: "h-16 w-60 py-3 px-6"
    },
    rounded: {
      null:"",
      sm: "rounded-md",
      md: "rounded-2xl",
      lg: "rounded-3xl",
      xl: "rounded-full"
    },
    color: {
      default:
        "bg-white text-black hover:bg-slate-50   border-x border-y  border-slate-700",
      primary: "bg-green-light hover:bg-green-400",
      secondary: "bg-blue-500 hover:bg-blue-600"
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
  };

export default function Button({
  text,
  color,
  size,
  icon,
  rounded,
  href,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
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
