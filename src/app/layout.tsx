import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rizer",
  description:
    "Crie um Sistema de Gestão personalizado através da nossa plataforma no-code ou escolha um dos nossos sistemas ou templates prontos."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" >
      <body>{children}</body>
    </html>
  );
}
