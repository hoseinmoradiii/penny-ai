import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import ThreeBackground from "@/components/ThreeBackground";
import { bodyClasses } from "@/lib/bodyClasses";
import { getVariant } from "@/lib/variant";
import "./globals.css";

export const metadata: Metadata = {
  title: "Penny AI - AI Personal Finance Assistant",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

function routeKey(pathname: string): string {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && segment in bodyClasses ? segment : "home";
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = (await headers()).get("x-pathname") ?? "/";
  const variant = await getVariant();
  const bodyClassName = bodyClasses[routeKey(pathname)][variant];

  return (
    <html className="dark" lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={bodyClassName}>
        <ThreeBackground />
        {children}
      </body>
    </html>
  );
}
