import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Acme",
  description: "A landing page by APIXcel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-mainBG`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
