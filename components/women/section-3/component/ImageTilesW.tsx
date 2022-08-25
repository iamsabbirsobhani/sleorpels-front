import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageTiles(props: any) {
  const { imgUrl, title, subtitle } = props;
  const [screenSize, setscreenSize] = useState<any>();
  useEffect(() => {
    setscreenSize(innerWidth);
  });
  return (
    <>
      <div className=" flex lg:mt-0 xl:mt-0 2xl:mt-0 mt-5  flex-col basis-[150px]">
        <div>
          <Image
            src={imgUrl}
            width={screenSize <= 768 ? 150 : 300}
            height={screenSize <= 768 ? 195 : 380}
            alt={title}
            placeholder="blur"
            blurDataURL={imgUrl}
          />
        </div>
        <div
          className={
            " break-all text-center mt-5 mb-3 " +
            `${
              screenSize <= 768 ? " w-[140px] text-sm " : " w-[300px] text-lg "
            }`
          }
        >
          <h1
            className=" font-bold uppercase antialiased tracking-wider "
            style={{ fontFamily: "Futura PT Medium" }}
          >
            {title}
          </h1>
          <p
            style={{ fontFamily: "Futura PT Book" }}
            className="  tracking-wider"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
}
