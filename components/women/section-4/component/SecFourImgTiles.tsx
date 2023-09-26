import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SecFourImgTiles(props: any) {
  const { imgUrl, title, subtitle, btnText } = props;
  const [screenSize, setscreenSize] = useState<any>();
  useEffect(() => {
    setscreenSize(innerWidth);
  }, [screenSize]);
  return (
    <>
      <div className=" cursor-pointer mt-10 lg:mt-0 xl:mt-0 2xl:mt-0">
        <div
          className={
            ' ' + `${screenSize <= 768 ? ' w-[100vw] ' : ' w-[500px] '}`
          }
        >
          <Image
            src={imgUrl}
            width={screenSize <= 768 ? 280 : 450}
            height={screenSize <= 768 ? 350 : 580}
            placeholder="blur"
            blurDataURL={imgUrl}
            layout="responsive"
            alt="image"
          />
        </div>
        <div className=" text-center mt-3">
          <h1
            style={{ fontFamily: 'Futura PT Bold' }}
            className=" mt-3 antialiased font-bold tracking-wider text-xl uppercase"
          >
            {title}
          </h1>
          <p className=" mt-3 text-lg tracking-wider antialiased">{subtitle}</p>
          <div style={{ fontFamily: 'Futura PT Bold' }} className=" mt-3 ">
            <button className="text-gray-900 font-bold tracking-widest border-2 border-gray-900 hover:text-white  hover:bg-gray-900 duration-500 cursor-pointer uppercase p-2 px-5 py-4">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
