import data from "../../../app-data/women-data.json";
import Image from "next/image";
import RoundedBigOption from "../../../components/navbar/components/options-template/RoundedBigOption";
import RoundedSmallOption from "../../../components/navbar/components/options-template/RoundedSmallOption";
import ListOptions from "../../../components/navbar/components/options-template/ListOptions";
export default function Clothing() {
  return (
    <>
      <div className=" grid grid-cols-4 relative">
        {/* shop by product section */}
        <div className="grid grid-cols-1 col-span-2 gap-3 mt-3">
          <h1 className=" tracking-wider underline-offset-2 underline uppercase font-bold">
            SHOP BY PRODUCT
          </h1>
          {data["women-nav-options"].map(
            (option) =>
              option.id === 3 && (
                <div
                  key={option.id}
                  className="grid gap-2  grid-cols-2   antialiased tracking-wide "
                >
                  {option["shop-by-product"]?.map((link) =>
                    link.id === 1 || link.id === 25 ? (
                      <div
                        key={link.id}
                        className=" text-sm font-bold  text-gray-600/95 antialiased tracking-wide"
                      >
                        <a className="hover:text-blue-500" href={link.url}>
                          {link.name}
                        </a>
                      </div>
                    ) : link.id === 3 ? (
                      <div
                        key={link.id}
                        className=" text-sm text-red-500/90 antialiased tracking-wide"
                      >
                        <a className="hover:text-blue-500" href={link.url}>
                          {link.name}
                        </a>
                      </div>
                    ) : (
                      <div
                        key={link.id}
                        className=" text-sm  text-gray-600/95 antialiased tracking-wide "
                      >
                        <a className="hover:text-blue-500" href={link.url}>
                          {link.name}
                        </a>
                      </div>
                    )
                  )}
                </div>
              )
          )}
        </div>

        {/* shop sale by body fit */}
        <div className="grid grid-cols-1  mt-2">
          {data["women-nav-options"].map(
            (option) =>
              option.id === 2 && (
                <div key={option.id}>
                  <h1 className="font-bold underline uppercase mb-3 underline-offset-2 tracking-wider">
                    SHOP SALE BY BODY FIT
                  </h1>
                  <div className="flex flex-wrap items-center">
                    {option["shop-by-body-fit"]?.map((link) => (
                      <div
                        key={link.id}
                        className=" w-48 basis-1/2 mt-5 mb-3 text-center p-2"
                      >
                        <a href={link.url} className=" ">
                          <div className=" border w-24 h-24 m-auto p-[2px]  rounded-full text-gray-600/95 hover:text-blue-500 hover:border-blue-500">
                            <Image
                              src={link.imgUrl}
                              width={90}
                              height={90}
                              className="rounded-[50%]  "
                              style={imgStyle}
                              blurDataURL={link.imgUrl}
                              placeholder="blur"
                            />
                            <p className="text-sm   antialiased tracking-wide">
                              {link.name}
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>

        {/* shop by edit */}

        <div className=" relative ml-4">
          <RoundedSmallOption
            data={data}
            title={"Shop by edit"}
            optionNo={3}
            optionGroup={"shop-by-edit"}
            genderNavOption={"women-nav-options"}
          />
        </div>
      </div>
    </>
  );
}

const imgStyle = {
  border: "2px solid gray",
};
