import ImageTilesW from "./component/ImageTilesW";

export default function SectionThreeW(props: any) {
  const { data } = props;
  return (
    <>
      <div className=" flex flex-wrap justify-around  lg:flex-row xl:flex-row 2xl:flex-row ">
        {data && data.data.attributes && (
          <ImageTilesW
            imgUrl={data.data.attributes.imgUrlS21}
            title={"Ripped jeans"}
            subtitle={"Skin was showin'"}
          />
        )}
        {data && data.data.attributes && (
          <ImageTilesW
            imgUrl={data.data.attributes.imgUrlS22}
            title={"Golden hour"}
            subtitle={"It's an all-night party"}
          />
        )}
        {data && data.data.attributes && (
          <ImageTilesW
            imgUrl={data.data.attributes.imgUrlS23}
            title={"Step styling"}
            subtitle={"Boxfresh beauts"}
          />
        )}
        {data && data.data.attributes && (
          <ImageTilesW
            imgUrl={data.data.attributes.imgUrlS24}
            title={"Olaplex"}
            subtitle={"Actual hair heores"}
          />
        )}
      </div>
    </>
  );
}
