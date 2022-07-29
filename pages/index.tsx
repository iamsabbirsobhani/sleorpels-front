import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/global/globalSlice";
import ProductCard from "../components/product/ProductCard";
import Link from "next/link";
import { GetServerSideProps } from "next";
import useSWR, { Key, Fetcher } from "swr";
import loading from "../public/sleorpels-loading.png";

const fetcher: Fetcher<object> = (...args) =>
  fetch(...args).then((res) => res.json());

const Home = (props: any) => {
  const count = useSelector((state: any) => state.global.value);
  const dispatch = useDispatch();

  const { data, error } = useSWR(
    "http://localhost:1337/api/products?populate=*",
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  // loading while data is fetching
  if (!data)
    return (
      <div className=" w-64 m-auto animate-pulse absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <Image
          className=" object-cover"
          src={loading}
          alt="sleorpels-loading"
          width="500"
          height="80"
          blurDataURL="../public/sleorpels-loading.png"
          placeholder="blur"
        />
      </div>
    );

  return (
    <div className={styles.container}>
      <Head>
        <title>Sleorpels | Trusted Buy</title>
        <meta
          name="description"
          content="All types of clothing with latest design and western vibe. Visit today to get many offers and discounts."
        />
        <link rel="icon" href="/favicon.ico" />

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

      <main className={styles.main}>
        {data?.data &&
          data?.data.map((item: any) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <div className=" cursor-pointer m-5">
                <ProductCard
                  width={500}
                  height={500}
                  src={item.attributes.p_images.data[0].attributes.url}
                  productName={item.attributes.productName}
                  productPrice={item.attributes.price}
                />
              </div>
            </Link>
          ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
