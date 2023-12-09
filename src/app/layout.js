import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux/Provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: 'YaGanaste',
  description: 'WebAPP',
}

export default function RootLayout({ children }) {

  return (
    <Providers>
      <html lang="es">
        <body className={`${roboto.variable}`}>
            {children}
        </body>
      </html>
    </Providers>
  );
}
