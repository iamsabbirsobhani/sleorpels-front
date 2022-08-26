import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

export default function SalesBanner(props: any) {
  const { data } = props;
  const md = `
    UP TO 30% OFF ALL
    OUTLET
    (UP TO 70% OFF
    ALREADY!)
    Use code: JACKPOT
    `;

  useEffect(() => {
    // to change font of ReactMarkdown
    // not changing in default procedure thats why
    // needed to implement root way
    const hf = document.querySelector(".sales-banner-md-font");
    Array.from(hf?.children ?? []).forEach((child: any) => {
      child.style.fontFamily = "Futura PT Bold";
      Array.from(child.children).forEach((gchild: any) => {
        gchild.style.fontFamily = "Futura PT Bold";
      });
    });
  });
  return (
    <>
      {data && (
        <div
          className={
            "   relative flex justify-center flex-col items-center p-1 "
          }
          style={{ backgroundColor: data.data.attributes.backgroundColor }}
        >
          {data.data.attributes.isLuckGIF && (
            <div className=" mt-5" style={{ width: 300, height: 60 }}>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sleorpels.appspot.com/o/essential-menu-options%2Fsale-banner-section%2Fglobal_430x80_desktop.webp?alt=media&token=35185557-3712-44b7-9eea-e2c7057ded8e"
                }
                width="300"
                height="60"
              />
            </div>
          )}

          <div className=" mt-3">
            <ReactMarkdown
              className={
                "sales-banner-md-font antialiased tracking-wider text-center font-bold lg:text-4xl xl:text-4xl 2xl:text-4xl text-3xl italic  text-gray-900"
              }
            >
              {data.data.attributes.offerTitle}
            </ReactMarkdown>
          </div>
          <div className=" mt-3">
            <h1 className=" font-bold text-center uppercase antialiased tracking-wider">
              {data.data.attributes.subtitle}
            </h1>
          </div>
          <div className=" text-center mt-4">
            <p className=" text-center text-gray-900 text-xs lg:text-sm xl:text-sm 2xl:text-lg">
              {data.data.attributes.condition}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
