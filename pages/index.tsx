import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/global/globalSlice";
import ProductCard from "../components/product/ProductCard";
import Link from "next/link";

const Home: NextPage = ({ data }) => {
  const count = useSelector((state: any) => state.global.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {data.data &&
          data?.data.map((item) => (
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

export async function getServerSideProps(context) {
  // const res = await fetch("http://localhost:1337/api/products?populate=*");
  const res = await fetch(
    "https://sleorpels.herokuapp.com/api/products?populate=*"
  );

  const data = await res.json();
  return {
    props: { data },
  };
}

export default Home;
