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
import Loading from "../components/Loading";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API } from "../apiendpoint";

const client = new ApolloClient({
  uri: `${API}/graphql`,
  cache: new InMemoryCache(),
});

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
      {/* <Loading /> */}
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
