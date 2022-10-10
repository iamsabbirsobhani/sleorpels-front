import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import Link from "next/link";
import useSWR from "swr";
import loading from "../public/sleorpels-loading.png";
import HomePage from "./HomePage";
import { fetcher } from "../composable/fetcher";
import Script from "next/script";
import { API } from "../apiendpoint";

const Home = (props: any) => {
  const count = useSelector((state: any) => state.global.value);
  const dispatch = useDispatch();

  // development api end poing
  // const { data, error } = useSWR(
  //   "http://http://192.168.0.100:1337/api/products?populate=*",
  //   fetcher
  // );

  // production end point
  const { data, error } = useSWR(`${API}/api/products?populate=*`, fetcher());

  if (error) return <div>Failed to load</div>;

  // loading while data is fetching
  if (!data)
    return (
      <>
        <Head>
          <title>Sleorpels | Trusted Buy</title>
          <meta
            name="description"
            content="Buy all types of clothing with latest design and western vibe. Visit today and get many discounts."
          />
          <link rel="icon" href="/public/favicon.png" />

          <meta
            property="og:title"
            content="Buy latest fashion with trusted brand"
          />
          <meta property="og:type" content="online products ecommerce" />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/iceland-2b5ae.appspot.com/o/sleorpels-thumb.png?alt=media&token=5fb0783c-9980-4fee-bd1c-6699e2d63de9"
          />
          <meta
            property="og:url"
            content="https://firebasestorage.googleapis.com/v0/b/iceland-2b5ae.appspot.com/o/sleorpels-thumb.png?alt=media&token=5fb0783c-9980-4fee-bd1c-6699e2d63de9"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div className=" w-64 m-auto animate-pulse absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className=" absolute z-50 w-72 h-20 bg-transparent"></div>
          <Image
            className=" object-cover"
            src={loading}
            alt="sleorpels-loading"
            width="500"
            height="80"
            blurDataURL={loading.src}
            placeholder="empty"
          />
        </div>
      </>
    );

  return (
    <>
      <Head>
        <title>Sleorpels | Trusted Buy</title>
        <meta
          name="description"
          content="All types of clothing with latest design and western vibe. Visit today to get many offers and discounts."
        />
        <link rel="icon" href="/favicon.png" />

        <meta
          property="og:title"
          content="Buy latest fashion with trusted brand"
        />
        <meta property="og:type" content="online products ecommerce" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/iceland-2b5ae.appspot.com/o/sleorpels-thumb.png?alt=media&token=5fb0783c-9980-4fee-bd1c-6699e2d63de9"
        />
        <meta
          property="og:url"
          content="https://firebasestorage.googleapis.com/v0/b/iceland-2b5ae.appspot.com/o/sleorpels-thumb.png?alt=media&token=5fb0783c-9980-4fee-bd1c-6699e2d63de9"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
};

export default Home;
