import EmbeddedAnnounce from "../components/global/EmbeddedAnnounce";
import SalesBanner from "../components/men/section-1/SalesBanner";
import MenBanner from "../components/men/section-2/MenBanner";
import SectionThree from "../components/men/section-3/SectionThree";
import SectionFour from "../components/men/section-4/SectionFour";
import TrendingBrands from "../components/men/section-5/TrendingBrands";

export default function Men() {
  return (
    <>
      <div className=" mb-[7.5rem]">
        {/* section 1 or salesbanner */}
        <div className="section-1 lg:mt-[6.3rem] xl:mt-[6.3rem] 2xl:mt-[6.3rem]">
          <EmbeddedAnnounce />
        </div>

        {/* section 2 or men banner */}
        <div className=" section-2">
          <MenBanner />
        </div>

        {/* section 3 */}
        <div className=" section-3 mt-10">
          <SectionThree />
        </div>

        {/* section 4 */}
        <div className=" section-4 mt-10">
          <SectionFour />
        </div>

        {/* section 5 or trending brands */}
        <div className=" section-5 mt-10">
          <TrendingBrands />
        </div>
      </div>
    </>
  );
}
