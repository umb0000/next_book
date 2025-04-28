import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push( "/book/123");
  };  




  return <>
  <div>
    <button onClick={onClickButton}>Go to Book 123</button>
  </div>
    </>
}
