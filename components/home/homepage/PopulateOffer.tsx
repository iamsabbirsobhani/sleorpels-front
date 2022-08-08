import { offer } from "../../../dummy/PopulateOffer";
import React from "react";
import { useEffect } from "react";
import { startSlide } from "../../../composable/slide";
import { fetcher } from "../../../composable/fetcher";
import useSWR from "swr";

export default function PopulateOffer(props: any) {
  const { data: informs, error } = useSWR(
    "https://sleorpels.herokuapp.com/api/informs?populate=*",
    fetcher()
  );

  const { data: hiddenOffer, error: hiddenOfferError } = useSWR(
    "https://sleorpels.herokuapp.com/api/hidden-offer?populate=*",
    fetcher()
  );

  useEffect(() => {
    if (informs?.data.length) startSlide(document, informs?.data.length);
  }, [informs?.data.length]);

  return (
    <>
      <div className="hidden lg:flex xl:flex 2xl:flex bg-rose-500 w-full h-16 p-2  justify-between items-center border-b-[1px]  border-white">
        <div className=" ml-5">
          <button className=" border-2 border-black p-[4px] font-bold hover:border-black/50 hover:text-black/50 duration-500 transition-all w-24">
            Women
          </button>
        </div>
        <div
          style={{ fontFamily: "Futura PT Bold" }}
          className=" text-center group break-all tracking-wider antialiased text-gray-900 w-3/4 relative"
        >
          <p className="font-bold font-[14px] text-sm">
            {offer[0].offer.slice(0, offer[0].offer.indexOf("*") + 1)}
          </p>
          <p className="font-bold font-[14px] text-sm">
            {offer[0].offer.slice(0, offer[0].offer.indexOf(")") + 1)}
          </p>
          <p className="font-bold font-[14px] text-sm">
            {offer[0].offer.slice(offer[0].offer.indexOf(")") + 1)}
          </p>

          {hiddenOffer && hiddenOffer?.data && (
            <div className="opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-1000 bg-white/90 absolute  w-full -bottom-[max-h-max] z-10 p-2">
              <div className=" absolute -top-[7px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-white left-0 right-0 m-auto"></div>
              <p
                style={{ fontFamily: "Futura Std Light" }}
                className=" text-xs"
              >
                {hiddenOffer?.data.attributes.msg ?? null}
              </p>
            </div>
          )}
        </div>
        <div className=" mr-5">
          <button className=" border-2 border-black p-[4px] font-bold hover:border-black/50 hover:text-black/50 duration-500 transition-all w-24">
            Men
          </button>
        </div>
      </div>
      <div className=" block lg:hidden xl:hidden 2xl:hidden  w-full h-16 bg-[#2d2d2d]">
        <div style={slide} className=" slider-wrapper text-white">
          <div className=" slider text-center flex justify-center items-center h-16">
            {informs?.data.map((item: any) => (
              <h1
                key={item.id}
                className=" text-center font-semibold tracking-wider"
                style={slider}
              >
                {item?.attributes.msg} <br />
                {item?.attributes.condition ?? null}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const slide = {
  width: "100%",
  wordBreak: "break-all",
  height: "4rem",
  padding: 0,
  margin: "auto",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.24s ease",
  fontFamily: "Futura PT Bold",
} as React.CSSProperties;

const slider = {
  position: "absolute",
  visibility: "hidden",
} as React.CSSProperties;

// React.CSSProperties: TS bugs was resolved by:
// Andy, T. (12 Oct, 2017). https://stackoverflow.com/a/46711592/7009215
