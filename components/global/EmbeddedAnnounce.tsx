import { fetcher } from "../../composable/fetcher";
import useSWR from "swr";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState, useEffect } from "react";
type HiddenOffer = {
  textColor: string;
  bgColor: string;
  borderColor: string;
  button: string;
};
import { hiddenOfferDOM } from "../../composable/hiddenOffer";
import Link from "next/link";
import SalesBanner from "../men/section-1/SalesBanner";
import { API } from "../../apiendpoint";

export default function EmbeddedAnnounce(props: any) {
  const [hiddenOfferStyle, sethiddenOfferStyle] = useState<HiddenOffer>();

  const { data, error } = useSWR(
    `${API}/api/hidden-offer?populate=*`,
    fetcher()
  );

  useEffect(() => {
    if (data?.data.attributes) {
      sethiddenOfferStyle({
        textColor: data?.data.attributes.textColor,
        bgColor: data?.data.attributes.backgroundColor,
        borderColor: data?.data.attributes.borderColor,
        button: `border-2  p-[4px] font-bold hover:${data?.data.attributes.borderColor}/50 hover:${data?.data.attributes.textColor}/50 duration-500 transition-all w-24 ${data?.data.attributes.borderColor}`,
      });
    }

    // change text color of data
    hiddenOfferDOM(document, data?.data.attributes.textColor);
  }, [data]);
  return (
    <>
      {data && (
        <div>
          {/* only desktop */}
          <div className=" flex items-center bg-black">
            {/* announce with hover desktop */}
            <div
              style={{
                backgroundColor: hiddenOfferStyle?.bgColor,
                color: hiddenOfferStyle?.textColor,
              }}
              className={
                "hidden-offer   hidden lg:flex xl:flex 2xl:flex  w-full  p-2  justify-center items-center    relative  z-10"
              }
            >
              <div
                style={{ fontFamily: "Futura PT Bold" }}
                className=" text-center group break-all tracking-wider antialiased text-gray-900  relative cursor-default"
              >
                <ReactMarkdown
                  className={
                    "markdown-offer-title  cursor-pointer  hover:opacity-50 duration-500 font-bold font-[14px] text-sm "
                  }
                >
                  {data?.data.attributes.offerTitle ?? null}
                </ReactMarkdown>
                {data && data?.data && (
                  <div className=" opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-1000 bg-white/90 absolute  w-[300%] -left-[100%] -bottom-[max-h-max] z-10 p-2 mt-3 border-b-4 border-gray-400 border-r-4 border-opacity-40">
                    <div className=" absolute -top-[7px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-white left-0 right-0 m-auto"></div>
                    <ReactMarkdown className="markdown text-xs text-gray-900">
                      {data?.data.attributes.offerDetails ?? null}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
            <div className=" w-full  group flex justify-center items-center cursor-pointer">
              <h1
                style={{ fontFamily: "Futura PT Demi" }}
                className=" text-lg uppercase text-white group-hover:opacity-50 duration-1000 lg:animate-none xl:animate-none 2xl:animate-none animate-pulse "
              >
                Free world wide delivery
              </h1>
            </div>
          </div>
          {/* desk mobile both */}
          <div>
            <SalesBanner data={data} />
          </div>
        </div>
      )}
    </>
  );
}
