import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Rizer | Plataforma low-code para criação de sistemas. 100% na Nuvem.",
    template: "%s | Rizer"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1
  },
  applicationName: "Rizer",
  description:
    "Crie um Sistema de Gestão personalizado através da nossa plataforma no-code ou escolha um dos nossos sistemas ou templates prontos.",
  keywords: [
    "sistemas prontos",
    "aplicativo",
    "portal",
    "web",
    "online",
    "no-code",
    "gestão",
    "templates",
    "plataforma",
    "gerador",
    "software",
    "php"
  ],
  creator: "Marcos Foncesca",
  authors: [
    { name: "Eli" },
    { name: "Eli moura", url: "https://cleitonfrontendengineer.vercel.app/" }
  ],

  openGraph: {
    url: "https://rizer.vercel.app/",
    title:
      "Plataforma low-code para criação de sistemas de gestão. 100% na Nuvem.",
    description:
      "Crie um Sistema de Gestão personalizado através da nossa plataforma no-code ou escolha um dos nossos sistemas ou templates prontos.",

    images: [
      {
        url: "https://rizer.com.br/img/plataforma-no-code-para-criacao-de-sistema-de-gestao.webp",
        width: 958,
        height: 351,
        type: "image/webp",
        alt: "plataforma low-code para criação de sistemas de gestão. 100% na Nuvem."
      }
    ],
    locale: "pt_BR",
    type: "website",
    siteName: "Rizer"
  },
  icons: {
    shortcut: "./logo.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
