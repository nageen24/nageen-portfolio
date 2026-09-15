import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nageen Abid — AI Engineer",
  description:
    "AI Engineer building multi-agent systems, RAG pipelines, and LLM-powered backends in production. Python / FastAPI, Claude, GPT, Llama.",
  openGraph: {
    title: "Nageen Abid — AI Engineer",
    description:
      "Multi-agent AI systems, RAG pipelines, and LLM-powered backends running live in production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <div className="min-w-0 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
