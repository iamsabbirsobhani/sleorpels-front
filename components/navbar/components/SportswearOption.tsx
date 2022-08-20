import Image from "next/image";
import data from "../../../app-data/app-data.json";
import ListOptions from "./options-template/ListOptions";
import RoundedSmallOption from "./options-template/RoundedSmallOption";
export default function SportsWearOption() {
  return (
    <>
      <div className=" grid grid-cols-4 relative">
        {/* Shop by product */}
        <div className=" relative">
          <ListOptions
            optionNo={5}
            genderNavOption={"men-nav-options"}
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
            genderNavOption={"men-nav-options"}
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
            genderNavOption={"men-nav-options"}
            optionGroup={"shop-by-brands"}
            data={data}
            title={"Shop-by-brand"}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* others */}
        <div className=" relative ml-5">
          {data["men-nav-options"].map(
            (option) =>
              option.id === 5 &&
              option["others"]?.map((other) => (
                <div className=" relative h-[5.8rem] outline outline-1 outline-gray-500/20 outline-offset-2 mt-4 cursor-pointer hover:outline-blue-500 w-56">
                  <h1
                    style={{ fontFamily: "Futura PT Bold" }}
                    className=" relative top-[35%] z-10 antialiased tracking-wider uppercase px-3"
                  >
                    {other.name}
                  </h1>
                  <div className=" absolute top-0">
                    <img
                      src={other.imgUrl}
                      className=" h-[5.7rem] w-full object-cover"
                    />
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}
