import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push( "/book/123");
  };  

  useEffect(() => {
    router.prefetch("/test");},[]);



  return <>
  <header>
    <Link href="/">Home</Link>
    <Link href="/search">search</Link>  
    <Link href="/book/1">Book 1</Link>
  <div>
    <button onClick={onClickButton}>Go to Book 123</button>
  </div>
  </header>
  <Component {...pageProps} />

    </>
}
