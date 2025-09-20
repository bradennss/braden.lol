import type { Metadata } from "next";
import localFont from "next/font/local";
import { memo, PropsWithChildren } from "react";
import { cn } from "~/utils";
import "./globals.css";

const abcDiatype = localFont({
  src: [
    {
      path: "./fonts/abc-diatype-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/abc-diatype-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/abc-diatype-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/abc-diatype-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-abc-diatype",
});

const abcDiatypeMono = localFont({
  src: [
    {
      path: "./fonts/abc-diatype-mono.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-abc-diatype-mono",
});

export const metadata: Metadata = {
  title: "braden.lol",
  metadataBase: new URL("https://braden.lol"),
};

const RootLayout = memo<PropsWithChildren>(({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background text-foreground antialiased",
          abcDiatype.variable,
          abcDiatypeMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
});
RootLayout.displayName = "RootLayout";

export default RootLayout;
