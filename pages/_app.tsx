import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../app/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "../public/nprogress.css";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faUser,
  faCircleQuestion,
  faBox,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus, faUser, faCircleQuestion, faBox, faMessage);
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
