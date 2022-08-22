import data from "../../../app-data/app-data.json";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SectionThree() {
  const [screenSize, setscreenSize] = useState<any>();
  useEffect(() => {
    setscreenSize(innerWidth);
  });
  return (
    <>
      <div className=" flex flex-wrap justify-around  lg:flex-row xl:flex-row 2xl:flex-row ">
        {data["men-section-three"].map((item) => (
          <div
            key={item.id}
            className=" flex lg:mt-0 xl:mt-0 2xl:mt-0 mt-5  flex-col basis-[150px]"
          >
            <div>
              <Image
                src={item.imgUrl}
                width={screenSize <= 768 ? 150 : 300}
                height={screenSize <= 768 ? 195 : 380}
                alt={item.title}
                placeholder="blur"
                blurDataURL={item.imgUrl}
                // layout="responsive"
              />
            </div>
            <div
              className={
                " break-all text-center mt-5 mb-3 " +
                `${
                  screenSize <= 768
                    ? " w-[140px] text-sm "
                    : " w-[300px] text-lg "
                }`
              }
            >
              <h1
                className=" font-bold uppercase antialiased tracking-wider "
                style={{ fontFamily: "Futura PT Medium" }}
              >
                {item.title}
              </h1>
              <p
                style={{ fontFamily: "Futura PT Book" }}
                className="  tracking-wider"
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
