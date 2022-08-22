import SalesBanner from "../components/men/section-1/SalesBanner";
import MenBanner from "../components/men/section-2/MenBanner";

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
      </div>
    </>
  );
}
