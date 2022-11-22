import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/product/ProductCard";
import Link from "next/link";
import useSWR from "swr";
import loading from "../../public/sleorpels-loading.png";
import HomePage from "../HomePage";
import { fetcher } from "../../composable/fetcher";
import { API } from "../../apiendpoint";
import Loading from "../../components/loading/img-loading/Loading";
import { useState } from "react";
export default function Men() {
  // const { data, error } = useSWR(
  //   "http://192.168.0.100:1337/api/products?populate=*",
  //   fetcher()
  // );

  const { data, error } = useSWR(`${API}/api/products?populate=*`, fetcher());

  if (!data)
    return (
      <>
        <Head>
          <title>Sleorpels | Products</title>
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

        <div className=" h-[100vh] w-64 m-auto animate-pulse relative top-0 left-0 right-0 bottom-0 flex justify-center items-center">
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
      <div className="mt-20 mb-10">
        <main className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-3 m-2">
          {data?.data &&
            data?.data.map((item: any) => (
              <Link key={item.id} href={`/product/${item.id}`}>
                <div className=" cursor-pointer flex justify-center relative">
                  <ProductCard
                    width={900}
                    height={1000}
                    src={item.attributes.p_images.data[0].attributes.url}
                    productName={item.attributes.productName}
                    productPrice={item.attributes.price}
                    off={item.attributes.off}
                  />
                </div>
              </Link>
            ))}
        </main>
      </div>
    </>
  );
}
