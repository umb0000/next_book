import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalError from "next/dist/client/components/error-boundary";

export default function App({ Component, pageProps }: AppProps) {
  
return (
  <GlobalLayout>
    <Component {...pageProps} />
  </GlobalLayout>
);
  
}
