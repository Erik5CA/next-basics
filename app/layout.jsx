import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "./global.css";

export const metadata = {
  title: "Mi tienda - Home",
  description: "Esta es la pagina principal",
  keywords: "tienda, ecommerce",
  type: "website",
  site_name: "Mi tienda",
};

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
