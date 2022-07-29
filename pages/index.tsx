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
