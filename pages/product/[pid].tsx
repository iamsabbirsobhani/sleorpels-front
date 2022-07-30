import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function ProductDetails(props: any) {
  const [product, setproduct] = useState(props.data.data.attributes);
  const router = useRouter();
  const { pid } = router.query;
  //   console.log(props.data);

  function computedOffPrice() {
    return product.price - Math.ceil((product.price * product.off) / 100);
  }

  return (
    <>
      <Head>
        <title>Sleorpels | {product.productName}</title>
        <meta name="description" content={product.productSnippet} />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content={`${product.productName}. Buy latest fashion with trusted brand`}
        />
        <meta property="og:type" content="online products ecommerce" />
        <meta
          property="og:image"
          content={product.p_images.data[0].attributes.url}
        />
        <meta
          property="og:url"
          content={product.p_images.data[0].attributes.url}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className=" max-w-5xl m-auto">
        {props.data && props.data.data.attributes && product ? (
          <div className=" flex justify-around mt-8 lg:flex-row xl:flex-row 2xl:flex-row flex-col">
            {/* product image part */}
            <div>
              <Image
                className=" object-cover"
                src={product.p_images.data[0].attributes.url}
                alt={product.productName}
                width={500}
                height={500}
                blurDataURL={product.p_images.data[0].attributes.url}
                placeholder="blur" // Optional blur-up while loading
              />
            </div>

            {/* product details part */}
            <div className=" p-2">
              <h1>{product.productName}</h1>
              {/* if there is an offer */}
              {product.off ? (
                <div>
                  <h1>
                    Was ${product.price} <span> Now ${computedOffPrice()}</span>{" "}
                    <span>(-{product.off}%)</span>{" "}
                  </h1>
                </div>
              ) : (
                <div>
                  <p className=" font-bold">$&nbsp;{product.price}</p>
                </div>
              )}

              <p className=" uppercase font-bold">
                Colour:{" "}
                <span className=" normal-case font-normal">
                  {product.color}
                </span>
              </p>
              {/* sizes */}
              <div className=" flex">
                {product.sizes &&
                  product.sizes.data.map((item: any) => (
                    <div key={item.id} className="mr-2">
                      <p>{item.attributes.sizeName}</p>
                    </div>
                  ))}
              </div>

              <div className=" flex items-center">
                <button className=" bg-emerald-500 p-2 uppercase font-bold text-white w-52 mr-5 transition-all hover:bg-emerald-600">
                  Add to bag
                </button>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pid = context.params?.pid;

  // development api end point
  const res = await fetch(
    `http://localhost:1337/api/products/${pid}?populate=*`
  );

  // production api end point
  // const res = await fetch(
  //   `https://sleorpels.herokuapp.com/api/products/${pid}?populate=*`
  // );

  const data = await res.json();

  if (!data?.data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};
