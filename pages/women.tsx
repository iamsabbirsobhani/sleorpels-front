import SectionTwo from "../components/women/section-2/SectionTwo";
import SectionTwoCustom from "../components/women/section-2/SectionTwoCustom";
import { fetcher } from "../composable/fetcher";
import useSWR from "swr";
export default function Women() {
  const { data, error } = useSWR(
    "https://sleorpels.herokuapp.com/api/women-home?populate=*",
    fetcher()
  );

  return (
    <>
      <div>
        {/* section 2 or banner-heroin */}
        <div className=" mt-24">
          {data && data.data.attributes.isCustom ? (
            <SectionTwoCustom data={data} />
          ) : (
            <SectionTwo data={data} />
          )}
        </div>
      </div>
    </>
  );
}
