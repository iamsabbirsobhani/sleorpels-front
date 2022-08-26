import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function SectionTwo(props: any) {
  const { data } = props;
  console.log(data);
  return (
    <>
      <Head>
        <title>Women's Clothes | Shop for Women's Fashion | SLEORPELS</title>
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
        {/* <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/iceland-2b5ae.appspot.com/o/sleorpels-thumb.png?alt=media&token=5fb0783c-9980-4fee-bd1c-6699e2d63de9"
        />
        <meta
          property="og:url"
          content="https://firebasestorage.googleapis.com/v0/b/iceland-2b5ae.appspot.com/o/sleorpels-thumb.png?alt=media&token=5fb0783c-9980-4fee-bd1c-6699e2d63de9"
        />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <div className=" lg:mt-16 xl:mt-16 2xl:mt-16 mt-10">
        {data?.data.attributes.mainBannerUrlMobile &&
          data?.data.attributes.mainBannerUrlDesktop && (
            <div className=" relative">
              <div className=" visible lg:hidden xl:hidden 2xl:hidden">
                <Image
                  src={data?.data.attributes.mainBannerUrlMobile}
                  layout="responsive"
                  objectFit="fill"
                  width={500}
                  height={550}
                />
              </div>
              <div className="hidden lg:block xl:block 2xl:block w-[97%] m-auto">
                <Image
                  src={data?.data.attributes.mainBannerUrlDesktop}
                  layout="responsive"
                  objectFit="fill"
                  width={1000}
                  height={478}
                  priority
                />
              </div>
              <div className=" visible lg:hidden xl:hidden 2xl:hidden absolute top-0 bottom-16 left-0 right-0 flex justify-end items-center flex-col ">
                <div>
                  <h2
                    style={{ fontFamily: "Futura PT Bold" }}
                    className=" bg-white  text-center m-auto p-3 font-extrabold text-3xl"
                  >
                    Giving grunge
                  </h2>
                </div>
                <div className=" flex flex-col mt-3">
                  <Link href="/men">
                    <button
                      style={{ fontFamily: "Futura PT Bold" }}
                      className=" mt-2 bg-white text-gray-900 hover:text-white hover:bg-gray-900 transition-all duration-500 align-text-bottom uppercase p-2 px-4 tracking-wider "
                    >
                      Shop now
                    </button>
                  </Link>
                </div>
              </div>

              <div className=" hidden lg:flex xl:flex 2xl:flex absolute top-0 bottom-20 left-0 right-0 justify-end items-center flex-col">
                <div>
                  <h2
                    style={{ fontFamily: "Futura PT Bold" }}
                    className=" bg-white text-center m-auto p-3 font-extrabold text-6xl"
                  >
                    Giving grunge
                  </h2>
                </div>
                <div className=" flex mt-5">
                  <Link href="/men">
                    <button
                      style={{ fontFamily: "Futura PT Bold" }}
                      className=" mt-2 bg-white text-gray-900 hover:text-white hover:bg-gray-900 transition-all duration-500 align-text-bottom uppercase p-2 px-4 tracking-wider"
                    >
                      Shop now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  );
}
