import data from "../../../app-data/app-data.json";
import ImageTiles from "./options-template/ImageTiles";
import ListOptions from "./options-template/ListOptions";
import RoundedSmallOption from "./options-template/RoundedSmallOption";

export default function AccessoriesOption() {
  return (
    <>
      <div className=" grid grid-cols-4 relative">
        {/* shop by products */}
        <div className=" relative">
          <ListOptions
            optionNo={6}
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-product"}
            data={data}
            title={"Shop by product"}
            col={1}
          />
          <div className=" absolute w-[1px] to p-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* shop by brands */}
        <div className=" ml-4 relative">
          <RoundedSmallOption
            optionNo={6}
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-brands"}
            data={data}
            title={"Shop-by-brand"}
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
            genderNavOption={"men-nav-options"}
            optionGroup={"others"}
          />
        </div>
      </div>
    </>
  );
}
