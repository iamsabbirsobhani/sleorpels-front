import Image from "next/image";
import data from "../../../app-data/women-data.json";
import ListOptions from "../../../components/navbar/components/options-template/ListOptions";
import RoundedSmallOption from "../../../components/navbar/components/options-template/RoundedSmallOption";
import SquareSmallImageOption from "../../../components/navbar/components/options-template/SquareSmallImageOption";
export default function Sportswear() {
  return (
    <>
      <div className=" grid grid-cols-4 relative">
        {/* Shop by product */}
        <div className=" relative">
          <ListOptions
            optionNo={5}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-product"}
            data={data}
            title={"Shop by product"}
            col={1}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* shop by activity */}
        <div className=" ml-4 relative">
          <RoundedSmallOption
            optionNo={5}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-activity"}
            data={data}
            title={"Shop by activity"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* shop by brand */}
        <div className=" ml-4 relative">
          <RoundedSmallOption
            optionNo={5}
            genderNavOption={"women-nav-options"}
            optionGroup={"shop-by-brands"}
            data={data}
            title={"Shop-by-brand"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* others */}
        <div className=" relative ml-5">
          <SquareSmallImageOption
            data={data}
            optionNo={5}
            genderNavOption={"women-nav-options"}
            optionGroup={"others"}
          />
        </div>
      </div>
    </>
  );
}
