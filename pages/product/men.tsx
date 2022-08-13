import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/product/ProductCard";
import Link from "next/link";
import useSWR from "swr";
import loading from "../public/sleorpels-loading.png";
import HomePage from "../HomePage";
import { fetcher } from "../../composable/fetcher";

export default function Men() {
  const { data, error } = useSWR(
    "http://192.168.0.100:1337/api/products?populate=*",
    fetcher()
  );
  // const { data, error } = useSWR(
  //   "https://sleorpels.herokuapp.com/api/products?populate=*",
  //   fetcher()
  // );

  return (
    <>
      <div className=" mt-10 mb-10">
        <main className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-3 m-2">
          {data?.data &&
            data?.data.map((item: any) => (
              <Link key={item.id} href={`/product/${item.id}`}>
                <div className=" cursor-pointer flex justify-center ">
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
