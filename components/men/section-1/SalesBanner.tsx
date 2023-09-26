import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import Head from 'next/head';
import loading from '../../../public/sleorpels-loading.png';
import Loading from '../../Loading';

export default function SalesBanner(props: any) {
  const { data } = props;
  const md = `
    UP TO 30% OFF ALL
    OUTLET
    (UP TO 70% OFF
    ALREADY!)
    Use code: JACKPOT
    `;

  useEffect(() => {
    // to change font of ReactMarkdown
    // not changing in default procedure thats why
    // needed to implement root way
    const hf = document.querySelector('.sales-banner-md-font');
    Array.from(hf?.children ?? []).forEach((child: any) => {
      child.style.fontFamily = 'Futura PT Bold';
      Array.from(child.children).forEach((gchild: any) => {
        gchild.style.fontFamily = 'Futura PT Bold';
      });
    });
  });

  // loading while data is fetching
  if (!data)
    return (
      <>
        <Head>
          <title>Men's Clothes | Loading... | SLEORPELS</title>
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
      {data && (
        <div
          className={
            '   relative flex justify-center flex-col items-center p-1 '
          }
          style={{ backgroundColor: data.data.attributes.backgroundColor }}
        >
          {data.data.attributes.isLuckGIF && (
            <div className=" mt-5" style={{ width: 300, height: 60 }}>
              <Image
                src={
                  'https://firebasestorage.googleapis.com/v0/b/sleorpels.appspot.com/o/essential-menu-options%2Fsale-banner-section%2Fglobal_430x80_desktop.webp?alt=media&token=35185557-3712-44b7-9eea-e2c7057ded8e'
                }
                width="300"
                height="60"
                alt="image"
              />
            </div>
          )}

          <div className=" mt-3">
            <ReactMarkdown
              className={
                'sales-banner-md-font antialiased tracking-wider text-center font-bold lg:text-4xl xl:text-4xl 2xl:text-4xl text-3xl italic  text-gray-900'
              }
            >
              {data.data.attributes.offerTitle}
            </ReactMarkdown>
          </div>
          <div className=" mt-3">
            <h1 className=" font-bold text-center uppercase antialiased tracking-wider">
              {data.data.attributes.subtitle}
            </h1>
          </div>
          <div className=" text-center mt-4">
            <p className=" text-center text-gray-900 text-xs lg:text-sm xl:text-sm 2xl:text-lg">
              {data.data.attributes.condition}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
