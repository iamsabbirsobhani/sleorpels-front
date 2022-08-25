import data from "../../../app-data/app-data.json";
import Image from "next/image";
import SecFourImgTiles from "./component/SecFourImgTiles";

export default function SectionFourW(props: any) {
  const { data } = props;
  return (
    <>
      <div className=" flex justify-around lg:flex-row xl:flex-row 2xl:flex-row flex-col items-center lg:items-start xl:items-start 2xl:items-start">
        {data && (
          <SecFourImgTiles
            imgUrl={data.data.attributes.imgUrlS31}
            title={"The bling ring"}
            subtitle={"Not-so-hidden gems"}
            btnText={"Shop dresses"}
          />
        )}

        {data && (
          <SecFourImgTiles
            imgUrl={data.data.attributes.imgUrlS32}
            title={"Cool for school"}
            subtitle={"Our mean girls fantasy"}
            btnText={"Shop asyou"}
          />
        )}
      </div>
    </>
  );
}
