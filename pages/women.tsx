import SectionTwo from "../components/women/section-1/SectionTwo";
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
          <SectionTwo data={data} />
        </div>
      </div>
    </>
  );
}
