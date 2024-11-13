import localFont from "next/font/local";
import "./globals.css";
import header from "@/components/Header";

export const metadata = {
  title: "Little Black",
  description: "Bento",
  charset: 'UTF-8',
  author: 'Pretinho',
  keywords: 'preto, bento, gostoso, bombom, chocolate '
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header/>
        {children}
      </body>
    </html>
  );
}
