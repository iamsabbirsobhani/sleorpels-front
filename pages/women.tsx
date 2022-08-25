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

export default function Women() {
  const { data, error } = useSWR(
    "https://sleorpels.herokuapp.com/api/women-home?populate=*",
    fetcher()
  );

  return (
    <>
      <div>
        {/* section 1 */}
        <div>
          <SalesBanner />
        </div>

        {/* section 2 or banner-heroin */}
        <div className=" mt-10">
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
    </>
  );
}
