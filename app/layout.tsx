import { ReactNode } from "react";
import type { Metadata } from "next";

import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Footer from "@/components/footer";

const metadata: Metadata = {
  title: "NightStar Blog",
  description: "NightStar's Blog",
  generator: "Next.js",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: {
    name: "NightStar",
    url: "https://github.com/Night-Star04",
  },
  openGraph: {
    title: "NightStar Blog",
    description: "NightStar's Blog",
    url: "https://nightstar-blog.vercel.app/",
    type: "website",
    locale: "zh_TW",
    siteName: "NightStar Blog",
  },
  twitter: {
    title: "NightStar Blog",
    description: "NightStar's Blog",
    card: "summary",
    site: "@NightStar04",
    creator: "@NightStar04",
  },
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
export { metadata };
