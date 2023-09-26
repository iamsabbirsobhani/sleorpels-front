import data from '../../../app-data/app-data.json';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function SectionFour() {
  const [screenSize, setscreenSize] = useState<any>();
  useEffect(() => {
    setscreenSize(innerWidth);
  }, [screenSize]);
  return (
    <>
      <div className=" flex justify-around lg:flex-row xl:flex-row 2xl:flex-row flex-col items-center lg:items-start xl:items-start 2xl:items-start">
        {data['men-section-four'].map((item) => (
          <div
            key={item.id}
            className=" cursor-pointer mt-10 lg:mt-0 xl:mt-0 2xl:mt-0"
          >
            <div
              className={
                ' ' + `${screenSize <= 768 ? ' w-[100vw] ' : ' w-[500px] '}`
              }
            >
              <Image
                src={item.imgUrl}
                width={screenSize <= 768 ? 280 : 450}
                height={screenSize <= 768 ? 350 : 580}
                placeholder="blur"
                blurDataURL={item.imgUrl}
                layout="responsive"
                alt="image"
              />
            </div>
            <div className=" text-center mt-3">
              <h1
                style={{ fontFamily: 'Futura PT Bold' }}
                className=" mt-3 antialiased font-bold tracking-wider text-xl uppercase"
              >
                {item.title}
              </h1>
              <p className=" mt-3 text-lg tracking-wider antialiased">
                {item.subtitle}
              </p>
              <div style={{ fontFamily: 'Futura PT Bold' }} className=" mt-3 ">
                <button className="text-gray-900 font-bold tracking-widest border-2 border-gray-900 hover:text-white  hover:bg-gray-900 duration-500 cursor-pointer uppercase p-2 px-5 py-4">
                  {item.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
