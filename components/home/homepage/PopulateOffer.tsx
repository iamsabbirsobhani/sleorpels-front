import { offer } from "../../../dummy/PopulateOffer";
import React from "react";
import { useEffect, useState } from "react";
import { startSlide } from "../../../composable/slide";
import { fetcher } from "../../../composable/fetcher";
import useSWR from "swr";

export default function PopulateOffer(props: any) {
  const { data: informs, error } = useSWR(
    "https://sleorpels.herokuapp.com/api/informs?populate=*",
    fetcher()
  );

  useEffect(() => {
    if (informs?.data.length) startSlide(document, informs?.data.length);
  }, [informs?.data.length]);

  return (
    <>
      <div className="hidden lg:flex xl:flex 2xl:flex bg-rose-500 w-full h-16 p-2  justify-between items-center border-b-[1px] border-white">
        <div className=" ml-5">
          <button className=" border-2 border-black p-[4px] font-bold hover:border-black/50 hover:text-black/50 duration-500 transition-all w-24">
            Women
          </button>
        </div>
        <div
          style={{ fontFamily: "Futura PT Bold" }}
          className=" text-center  break-all tracking-wider antialiased text-gray-900"
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
