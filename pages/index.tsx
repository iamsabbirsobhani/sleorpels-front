import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/global/globalSlice";
import ProductCard from "../components/product/ProductCard";
import Link from "next/link";
import { GetServerSideProps } from "next";

const Home = (props: any) => {
  const count = useSelector((state: any) => state.global.value);
  const dispatch = useDispatch();
  // console.log(props.data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Seorpels | Trusted Buy</title>
        <meta name="description" content="Seorpels | Trusted Buy" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Seorpels | Trusted Buy" />
        <meta property="og:type" content="products" />
        <meta property="og:image" content="../public/sleorpels-thumb.png" />
        <meta property="og:url" content="../public/sleorpels-thumb.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        {props.data.data &&
          props.data?.data.map((item: any) => (
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await fetch("http://localhost:1337/api/products?populate=*");
  const res = await fetch(
    "https://sleorpels.herokuapp.com/api/products?populate=*"
  );

  const data = await res.json();
  return {
    props: { data },
  };
};

export default Home;
