import ListOptions from "../../../components/navbar/components/options-template/ListOptions";
import data from "../../../app-data/women-data.json";
import RoundedSmallOption from "../../../components/navbar/components/options-template/RoundedSmallOption";
import ImageTiles from "../../../components/navbar/components/options-template/ImageTiles";
export default function Shoes() {
  return (
    <>
      <div className=" grid grid-cols-4 relative">
        {/* shop by product */}
        <div className=" relative">
          <ListOptions
            optionNo={4}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-product"}
            data={data}
            title={"Shop by product"}
            col={1}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* shop by brand */}
        <div className=" ml-4 relative">
          <RoundedSmallOption
            optionNo={4}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-brands"}
            data={data}
            title={"Shop by brand"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/*  */}
        <div className=" col-span-2  ml-2">
          <ImageTiles
            optionNo={4}
            data={data}
            width={200}
            height={250}
            genderNavOption={"women-nav-options"}
            optionGroup={"others"}
          />
        </div>
      </div>
    </>
  );
}
