import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("min-h-screen   antialiased ")}>
        <Providers>
          <div className="relative flex flex-col h-screen serif ">
            <main className="container mx-auto   flex-grow serif">  
            {/* max-w-7xl */}
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 serif"></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
