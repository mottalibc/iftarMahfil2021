import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"], // Add Bengali subset if needed
  weight: ["400", "500", "600", "700"], // Choose weights as required
  variable: "--font-hind-siliguri", // Optional for CSS variables
});

export const metadata = {
  title: "Iftar-party/Mahfil",
  description: "Dakhil batch 2021 Iftar Mahfil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hindSiliguri.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
