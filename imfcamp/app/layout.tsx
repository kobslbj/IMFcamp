import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Nav } from "@/components/navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/imflogo2025.PNG",
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
      <body className={clsx("min-h-screen antialiased bg-background-secondary")}>
        <Providers>
          <Nav/>
          <main className="container mx-auto serif text-custom-navy">
            {/* max-w-7xl */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
