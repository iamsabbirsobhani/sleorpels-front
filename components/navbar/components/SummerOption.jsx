import data from "../../../app-data/app-data.json";
import ImageTiles from "./options-template/ImageTiles";
import ListOptions from "./options-template/ListOptions";

export default function SummerOption() {
  return (
    <>
      <div className=" grid grid-cols-5">
        {/* pool-party and image tiles */}
        <div className=" relative">
          <ImageTiles
            optionNo={7}
            data={data}
            width={200}
            height={250}
            genderNavOption={"men-nav-options"}
            optionGroup={"pool-party"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* shop by products */}
        <div className=" relative ml-3">
          <ListOptions
            optionNo={7}
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-product"}
            data={data}
            title={"Shop by product"}
            col={1}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* trending by products */}
        <div className=" relative ml-3">
          <ListOptions
            optionNo={7}
            genderNavOption={"men-nav-options"}
            optionGroup={"trending"}
            data={data}
            title={"Shop by product"}
            col={1}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* pool-party and image tiles */}
        <div className=" col-span-2  ml-2">
          <ImageTiles
            optionNo={7}
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
