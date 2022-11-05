import SectionTwo from "../components/women/section-2/SectionTwo";
import SectionTwoCustom from "../components/women/section-2/SectionTwoCustom";
import { fetcher } from "../composable/fetcher";
import useSWR from "swr";
import SectionThreeW from "../components/women/section-3/SectionThreeW";
import SectionThreeCustom from "../components/women/section-3/SectionThreeCustomW";
import SectionFourW from "../components/women/section-4/SectionFourW";
import SectionFourCustomW from "../components/women/section-4/SectionFourCustomW";
import TrendingBrandsW from "../components/women/section-5/TrendingBrandsW";
import SalesBanner from "../components/men/section-1/SalesBanner";
import EmbeddedAnnounce from "../components/global/EmbeddedAnnounce";
import { API } from "../apiendpoint";
import Head from "next/head";
import loading from "../public/sleorpels-loading.png";
import Image from "next/image";

export default function Women() {
  const { data, error } = useSWR(`${API}/api/women-home?populate=*`, fetcher());

  // loading while data is fetching
  if (!data)
    return (
      <>
        <Head>
          <title>Women's Clothes | Shop for Women's Fashion | SLEORPELS</title>
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
      {data ? (
        <div>
          {/* announce */}
          <div className=" announce lg:mt-[6.3rem] xl:mt-[6.3rem] 2xl:mt-[6.3rem]">
            <EmbeddedAnnounce />
          </div>

          {/* section 2 or banner-heroin */}
          <div className=" mt-5">
            {data && data.data.attributes.isCustom ? (
              <SectionTwoCustom data={data} />
            ) : (
              <SectionTwo data={data} />
            )}
          </div>

          {/* section 3 or categories */}
          <div className=" mt-10">
            {data && data.data.attributes.isCustom ? (
              <SectionThreeCustom data={data} />
            ) : (
              <SectionThreeW data={data} />
            )}
          </div>

          {/* section 4 */}
          <div className=" mt-10 mb-10">
            {data && data.data.attributes.isCustom ? (
              <SectionFourCustomW data={data} />
            ) : (
              <SectionFourW data={data} />
            )}
          </div>

          {/* section 5 */}
          <div className=" mt-10 mb-10">
            <TrendingBrandsW />
          </div>
        </div>
      ) : (
        <div>
          <h1>Loadin</h1>
        </div>
      )}
    </>
  );
}
