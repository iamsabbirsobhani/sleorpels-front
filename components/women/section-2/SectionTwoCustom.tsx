import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

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
        {data?.data.attributes.customMainBannerMobile &&
          data?.data.attributes.customMainBannerDesktop && (
            <div className=" relative">
              <div className=" visible lg:hidden xl:hidden 2xl:hidden">
                <Image
                  src={data?.data.attributes.customMainBannerMobile}
                  layout="responsive"
                  objectFit="fill"
                  width={500}
                  height={550}
                  alt="image"
                />
              </div>
              <div className="hidden lg:block xl:block 2xl:block w-[97%] m-auto">
                <Image
                  src={data?.data.attributes.customMainBannerDesktop}
                  layout="responsive"
                  objectFit="fill"
                  width={1000}
                  height={478}
                  priority
                  alt="image"
                />
              </div>
            </div>
          )}
      </div>
    </>
  );
}
