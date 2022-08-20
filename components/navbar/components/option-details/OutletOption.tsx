import data from "../../../../app-data/app-data.json";
import ListOptions from "../options-template/ListOptions";
import SquareSmallImageOption from "../options-template/SquareSmallImageOption";

export default function OutletOption() {
  return (
    <>
      <div className=" grid grid-cols-3 relative">
        {/* shop by product */}
        <div className=" relative">
          <ListOptions
            optionNo={11}
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-product"}
            data={data}
            title={"Shop by product"}
            col={2}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* shop by brands */}
        <div className=" relative ml-5">
          <ListOptions
            optionNo={11}
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-brands"}
            data={data}
            title={"Shop by product"}
            col={1}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* others */}
        <div className=" relative ml-5">
          <SquareSmallImageOption
            data={data}
            optionNo={11}
            genderNavOption={"men-nav-options"}
            optionGroup={"others"}
          />
        </div>
      </div>
    </>
  );
}
