import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant" });
export const metadata: Metadata = {
  title: "Khushnuma Invites | Digital Wedding Cards in Pakistan",
  description: "Elegant animated and video digital wedding invitations for Mehndi, Mayun, Dholki, Baraat, Nikah, Walima and more. Order on WhatsApp.",
  openGraph: { title: "Khushnuma Invites", description: "Premium digital wedding cards, Pakistan", images: ["/logo.jpg"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${cinzel.variable} ${cormorant.variable}`}>{children}</body></html>);
}
