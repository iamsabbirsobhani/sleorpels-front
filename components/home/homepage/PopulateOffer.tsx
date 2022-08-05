import { offer } from "../../../dummy/PopulateOffer";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "../../../dummy/homeOffer";
type Data = { id: number; msg: string; condition?: string };
import { startSlide } from "../../../composable/slide";
export default function PopulateOffer() {
  const [populateOffer, setpopulateOffer] = useState<any>();
  let length = data.length;
  let i = 0;

  useEffect(() => {
    startSlide(document);
  }, []);

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
        <div style={styles.slide} className=" slider-wrapper text-white">
          <div className=" slider text-center flex items-center h-16">
            {data.map((item) => (
              <h1 style={styles.slider} key={item.id}>
                {item.msg}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  slide: {
    width: "230px",
    height: "4rem",
    padding: 0,
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.24s ease",
  },
  slider: {
    position: "absolute",
  },
};
