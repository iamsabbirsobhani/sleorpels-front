import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";

type SelectedImageUrl = {
  id: number;
  url: string;
};

type SelectSize = {
  id: number;
  size: string;
};

export default function ProductDetails(props: any) {
  const [product, setproduct] = useState(props.data.data.attributes);
  const [selectedImageUrl, setselectedImageUrl] = useState<SelectedImageUrl>({
    id: product.p_images.data[0].id,
    url: product.p_images.data[0].attributes.url,
  });

  const [selectSize, setselectSize] = useState<SelectSize>();

  const router = useRouter();
  const { pid } = router.query;

  //   console.log(props.data);

  function computedOffPrice() {
    return product.price - Math.ceil((product.price * product.off) / 100);
  }

  function sizeStyle(size: string) {
    return size === "S"
      ? "#475569"
      : size === "M"
      ? "#57534e"
      : size === "L"
      ? "#52525b"
      : size === "X"
      ? "#525252"
      : size === "XL"
      ? "#57534e"
      : "none";
  }

  return (
    <>
      <Head>
        <title>{product.productName} | Sleorpels</title>
        <meta name="description" content={product.productSnippet} />
        <link rel="icon" href="/favicon.png" />

        <meta
          property="og:title"
          content={`${product.productName}. Buy this latest fashion with the trusted brand SLEORPELS`}
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
      <div className=" max-w-5xl m-auto mb-10">
        {props.data && props.data.data.attributes && product ? (
          <div className=" flex justify-between mt-8 lg:flex-row xl:flex-row 2xl:flex-row flex-col">
            {/* product image part */}
            <div className=" flex-col-reverse flex lg:flex-row xl:flex-row 2xl:flex-row ">
              <div className=" ml-2  mr-2 mt-2 lg:inline-block xl:inline-block 2xl:inline-block inline-flex">
                {product.p_images.data.length >= 0 &&
                  product.p_images.data.map((item: any) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setselectedImageUrl({
                          id: item.id,
                          url: item.attributes.url,
                        });
                      }}
                      className=" mr-3 lg:mt-3 xl:mt3 2xl:mt3 justify-items-center w-32 hover:scale-105 transition-all duration-150 cursor-pointer  active:border-2 focus:border-2 border-emerald-500"
                      style={{
                        border:
                          selectedImageUrl?.id === item.id
                            ? "2px solid #14b8a6"
                            : "0",
                      }}
                    >
                      <Image
                        className=" object-cover block mb-3"
                        src={item.attributes.url}
                        width={500}
                        height={500}
                        blurDataURL={item.attributes.url}
                        placeholder="blur"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  ))}
              </div>
              <Image
                className=" object-cover"
                src={
                  selectedImageUrl?.url ||
                  product.p_images.data[0].attributes.url
                }
                alt={product.productName}
                width={900}
                height={1000}
                objectFit="cover"
                blurDataURL={product.p_images.data[0].attributes.url}
                placeholder="blur" // Optional blur-up while loading
              />
            </div>

            {/* product details part */}
            <div className=" p-2 mt-4">
              <h1 className=" text-xl tracking-wide">{product.productName}</h1>
              {/* if there is an offer */}
              {product.off ? (
                <div className=" mt-3">
                  <h1>
                    Was ${product.price}.00{" "}
                    <span className=" font-bold text-red-600">
                      {" "}
                      Now ${computedOffPrice()}.00
                    </span>{" "}
                    <span className=" normal-case text-red-600">
                      (-{product.off}%)
                    </span>{" "}
                  </h1>
                </div>
              ) : (
                <div>
                  <p
                    className=" font-extrabold text-lg tracking-wide mt-3"
                    style={{ fontFamily: "futura-price" }}
                  >
                    $&nbsp;{product.price}.00
                  </p>
                </div>
              )}

              <p className=" uppercase font-bold mt-3">
                Colour:{" "}
                <span className=" normal-case font-normal">
                  {product.color}
                </span>
              </p>
              {/* sizes */}
              <div className=" flex mt-3">
                <h1 className=" font-bold uppercase">Size: &nbsp;</h1>
                {product.sizes &&
                  product.sizes.data.map((item: any) => (
                    <div
                      className={
                        sizeStyle(item.attributes.sizeName) +
                        " w-6 text-center text-white font-bold rounded-sm cursor-pointer border-[1px] border-white shadow-md"
                      }
                      onClick={() => {
                        setselectSize({
                          id: item.id,
                          size: item.attributes.sizeName,
                        });
                      }}
                      key={item.id}
                      style={{
                        backgroundColor: sizeStyle(item.attributes.sizeName),
                        marginRight: "5px",
                        outline:
                          selectSize?.id === item.id
                            ? `3px solid #52525b`
                            : "none",
                        transition: "outline 150ms linear",
                      }}
                    >
                      <p>{item.attributes.sizeName}</p>
                    </div>
                  ))}
              </div>

              <div className=" flex items-center mt-3">
                <button className=" rounded-sm bg-emerald-500 p-2 uppercase font-bold text-white w-52 mr-5 transition-all hover:bg-emerald-600">
                  Add to bag
                </button>
                <div className=" cursor-pointer ">
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
    `http://192.168.0.100:1337/api/products/${pid}?populate=*`
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
