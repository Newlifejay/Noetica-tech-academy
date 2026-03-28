import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AIChatWidget } from "@/components/ui/AIChatWidget";
import { SiteFooter } from "@/components/ui/SiteFooter";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noetica-Tech Academy | Global Tech Accelerator",
  description: "Equipping students with real-world, job-ready digital skills and connecting them to global career opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-50 text-foreground items-stretch relative overflow-x-hidden w-full m-0 p-0" suppressHydrationWarning>
        <Navbar />
        {children}
        <SiteFooter />
        <WhatsAppButton />
        <AIChatWidget />
      </body>
    </html>
  );
}
