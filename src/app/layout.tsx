import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Lato({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Proteção e Defesa dos Direitos das Crianças",
  description: "Este site é uma demonstração de um projeto dos Alunos de Direito da Universidade Vila Velha. Desconsidere as informações aqui contidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
