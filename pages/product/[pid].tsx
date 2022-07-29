import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState } from "react";
import Script from "next/script";
import Image from "next/image";

export default function ProductDetails(props: any) {
  const [product, setproduct] = useState(props.data.data.attributes);
  const router = useRouter();
  const { pid } = router.query;
  console.log(props.data);

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>

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
              <p className=" font-bold">$&nbsp;{product.price}</p>
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
                  <ion-icon name="heart-outline"></ion-icon>
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

  //   const res = await fetch(
  //     `http://localhost:1337/api/products/${pid}?populate=*`
  //   );
  const res = await fetch(
    `https://sleorpels.herokuapp.com/api/products/${pid}?populate=*`
  );
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
