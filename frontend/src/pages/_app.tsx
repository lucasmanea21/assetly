import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ChakraProvider>
        {/* <body
        className={` font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}
      > */}
        <main className="dark text-foreground bg-slate-900 text-slate-100 tracking-tight">
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Component {...pageProps} />{" "}
          </div>
        </main>
        {/* </body> */}
      </ChakraProvider>
    </NextUIProvider>
  );
}
