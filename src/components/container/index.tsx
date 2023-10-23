import { ComponentProps } from "react";

import { VariantProps, tv } from "tailwind-variants";

export type SectionProps = ComponentProps<"section"> &
  VariantProps<typeof section>;

const section = tv({
  base: "flex flex-col items-center w-full gap-20 px-4 lg:px-0 ",
  variants: {
    backgroundColor: {
      default: "bg-white",
      primary: "bg-rizer-900"
    }
  },
  defaultVariants: {
    backgroundColor: "default"
  }
});

export default function Section({
  backgroundColor,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={section({ backgroundColor, className })} {...props}>
      {props.children}
    </section>
  );
}
