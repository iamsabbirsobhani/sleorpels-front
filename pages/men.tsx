import SalesBanner from "../components/men/section-1/SalesBanner";
import MenBanner from "../components/men/section-2/MenBanner";
import SectionThree from "../components/men/section-3/SectionThree";

export default function Men() {
  return (
    <>
      <div className=" mb-[7.5rem]">
        {/* section 1 or salesbanner */}
        <div className="section-1">
          <SalesBanner />
        </div>

        {/* section 2 or men banner */}
        <div className=" section-2">
          <MenBanner />
        </div>

        {/* section 3 */}
        <div className=" section-3 mt-10">
          <SectionThree />
        </div>
      </div>
    </>
  );
}
