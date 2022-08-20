import data from "../../../app-data/app-data.json";
import Image from "next/image";
import RoundedBigOption from "./options-template/RoundedBigOption";
import RoundedSmallOption from "./options-template/RoundedSmallOption";
import ListOptions from "./options-template/ListOptions";
export default function ClothingOption() {
  return (
    <>
      <div className=" grid grid-cols-5 relative">
        {/* shop by product */}
        <div className=" col-span-2 relative">
          <ListOptions
            optionNo={3}
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-product"}
            data={data}
            title={"Shop by product"}
            col={2}
          />
        </div>

        {/* shop by body fit */}
        <div className="grid grid-cols-1 relative ml-3">
          <RoundedBigOption
            optionNo={3}
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-body-fit"}
            data={data}
            title={"Shop by body fit"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* shop by edit */}

        <div className=" relative ml-4">
          <RoundedSmallOption
            data={data}
            title={"Shop by edit"}
            optionNo={3}
            optionGroup={"shop-by-edit"}
            genderNavOption={"men-nav-options"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* students */}
        <div className=" ml-4">
          <RoundedSmallOption
            data={data}
            title={"Students"}
            optionNo={3}
            optionGroup={"students"}
            genderNavOption={"men-nav-options"}
          />
        </div>
      </div>
    </>
  );
}
