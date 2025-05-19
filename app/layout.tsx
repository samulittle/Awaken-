import "./globals.css";
import { Inter, Dancing_Script } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Awaken - Meditação para quem trabalha com o público",
  description:
    "Meditação e relaxamento para profissionais que atendem o público",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${dancingScript.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
