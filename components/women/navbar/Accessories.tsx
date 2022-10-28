import data from "../../../app-data/women-data.json";
import ImageTiles from "../../../components/navbar/components/options-template/ImageTiles";
import ListOptions from "../../../components/navbar/components/options-template/ListOptions";
import RoundedSmallOption from "../../../components/navbar/components/options-template/RoundedSmallOption";

export default function Accessories() {
  return (
    <>
      <div className=" grid grid-cols-5 relative">
        {/* shop by products */}
        <div className=" relative">
          <ListOptions
            optionNo={6}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-product"}
            data={data}
            title={"Shop by product"}
            col={1}
          />
          <div className=" absolute w-[1px] to p-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* SHOP BY BAGS */}
        <div className=" ml-4 relative">
          <RoundedSmallOption
            optionNo={6}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-bags"}
            data={data}
            title={"Shop by bags"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* SHOP BY JEWELLERY */}
        <div className=" ml-4 relative">
          <RoundedSmallOption
            optionNo={6}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-jewellery"}
            data={data}
            title={"shop by jewellery"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* image tiles or others */}
        <div className=" col-span-2  ml-2">
          <ImageTiles
            optionNo={6}
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
