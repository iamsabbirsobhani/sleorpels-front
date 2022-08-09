import { offer } from "../../../dummy/PopulateOffer";
import React from "react";
import { useEffect, useState } from "react";
import { startSlide } from "../../../composable/slide";
import { fetcher } from "../../../composable/fetcher";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import { hiddenOfferDOM } from "../../../composable/hiddenOffer";

type HiddenOffer = {
  textColor: string;
  bgColor: string;
  borderColor: string;
  button: string;
};

export default function PopulateOffer(props: any) {
  const [hiddenOfferStyle, sethiddenOfferStyle] = useState<HiddenOffer>();

  const { data: informs, error } = useSWR(
    "https://sleorpels.herokuapp.com/api/informs?populate=*",
    fetcher()
  );

  const { data: hiddenOffer, error: hiddenOfferError } = useSWR(
    "https://sleorpels.herokuapp.com/api/hidden-offer?populate=*",
    fetcher()
  );

  useEffect(() => {
    if (informs?.data.length && hiddenOffer && hiddenOffer?.data.attributes)
      startSlide(document, informs?.data.length);
  }, [informs?.data.length]);

  useEffect(() => {
    if (hiddenOffer?.data.attributes) {
      sethiddenOfferStyle({
        textColor: hiddenOffer?.data.attributes.textColor,
        bgColor: hiddenOffer?.data.attributes.backgroundColor,
        borderColor: hiddenOffer?.data.attributes.borderColor,
        button: `border-2  p-[4px] font-bold hover:${hiddenOffer?.data.attributes.borderColor}/50 hover:${hiddenOffer?.data.attributes.textColor}/50 duration-500 transition-all w-24 ${hiddenOffer?.data.attributes.borderColor}`,
      });
    }

    // change text color of hiddenOffer
    hiddenOfferDOM(document, hiddenOffer?.data.attributes.textColor);
  }, [hiddenOffer]);

  return hiddenOffer && hiddenOffer?.data.attributes ? (
    <>
      <div
        style={{
          backgroundColor: hiddenOfferStyle?.bgColor,
          color: hiddenOfferStyle?.textColor,
        }}
        className={
          "hidden-offer   hidden lg:flex xl:flex 2xl:flex  w-full h-16 p-2  justify-between items-center border-b-[1px]  border-white  "
        }
      >
        <div className=" ml-5">
          <button
            style={{
              border: `2px solid ${hiddenOfferStyle?.borderColor}`,
              fontFamily: "Futura PT Demi",
            }}
            className={
              hiddenOfferStyle?.button + " hiddenOfferButton uppercase"
            }
          >
            Women
          </button>
        </div>

        <div
          style={{ fontFamily: "Futura PT Bold" }}
          className=" text-center group break-all tracking-wider antialiased text-gray-900 w-[70vw] relative cursor-default mb-2"
        >
          <ReactMarkdown
            className={"markdown-offer-title font-bold font-[14px] text-sm "}
          >
            {hiddenOffer?.data.attributes.offerTitle ?? null}
          </ReactMarkdown>
          {hiddenOffer && hiddenOffer?.data && (
            <div className=" opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-1000 bg-white/80 absolute  w-full -bottom-[max-h-max] z-10 p-2 mt-4">
              <div className=" absolute -top-[7px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-white left-0 right-0 m-auto"></div>
              <ReactMarkdown className="markdown text-xs text-gray-900">
                {hiddenOffer?.data.attributes.offerDetails ?? null}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <div className=" mr-5">
          <button
            style={{
              border: `2px solid ${hiddenOfferStyle?.borderColor}`,
              fontFamily: "Futura PT Demi",
            }}
            className={
              hiddenOfferStyle?.button + " hiddenOfferButton uppercase"
            }
          >
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
  ) : null;
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
