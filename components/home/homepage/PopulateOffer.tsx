import { offer } from "../../../dummy/PopulateOffer";
import React, { useState } from "react";
import { useEffect } from "react";
type Data = { id: number; msg: string; condition?: string };
// import { startSlide } from "../../../composable/slide";
import { nNextSlide } from "../../../composable/slide";
import popStyle from "../../../styles/populateOffer.module.scss";
import { fetcher } from "../../../composable/fetcher";
import useSWR from "swr";

export default function PopulateOffer(props: any) {
  const [data, setdata] = useState<any>();

  const { data: informs, error } = useSWR(
    "https://sleorpels.herokuapp.com/api/informs?populate=*",
    fetcher()
  );

  useEffect(() => {
    // startSlide(document);
    nNextSlide.instance.startSlide(document);
    console.log("executes");
  }, [informs]);

  return (
    <>
      <div className="hidden lg:flex xl:flex 2xl:flex bg-red-500 w-full h-16  justify-between items-center">
        <div className=" ml-5">
          <button className=" border-2 border-gray-900 p-[5px] font-bold hover:border-gray-900/80 hover:text-gray-900/80 duration-300 transition-all w-24">
            Women
          </button>
        </div>
        <div className=" text-center  break-all">
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
          <button className=" border-2 border-gray-900 p-[5px] font-bold hover:border-gray-900/80 hover:text-gray-900/80 duration-300 transition-all w-24">
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
} as React.CSSProperties;

const slider = {
  position: "absolute",
} as React.CSSProperties;

// React.CSSProperties: TS bugs was resolved by:
// Andy, T. (12 Oct, 2017). https://stackoverflow.com/a/46711592/7009215
