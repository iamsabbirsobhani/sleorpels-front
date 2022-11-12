import { useState, useEffect } from "react";
export default function SlideOffer() {
  const [movePx, setmovePx] = useState(0);
  const moveObjectTouch = (e: any) => {
    // console.log(e.touches[0].pageX);
    setmovePx(e.touches[0].pageX);
  };
  const moveObjectTouchMove = (e: any) => {
    console.log(e.targetTouches[0].pageX);
    // setmovePx(e.pageX);
    setmovePx(e.targetTouches[0].pageX);
  };

  return (
    <>
      <div className=" w-full flex snap-x   h-32 bg-gray-500 m-auto overflow-x-scroll relative">
        <div
          //   onDrag={moveObjectTouch}
          //   onDragEnd={moveObjectTouchMove}
          onTouchStart={moveObjectTouch}
          onTouchMove={moveObjectTouchMove}
          //   draggable
          style={{
            transform: `translate(${movePx}px)`,
            transition: "all 0.24s linear",
          }}
          className="  snap-start w-10 h-1/5 bg-red-500 mr-3  mt-2"
        ></div>
        <div
          style={{
            transform: `translate(${1 * movePx}px)`,
            transition: "all 0.24s linear",
          }}
          className=" snap-start w-64 h-1/5 bg-red-500 mr-3  mt-2"
        ></div>
        <div
          style={{
            transform: `translate(${1 * movePx}px)`,
            transition: "all 0.24s linear",
          }}
          className=" snap-start w-64 h-1/5 bg-red-500 mr-3  mt-2"
        ></div>
        <div
          style={{
            transform: `translate(${1 * movePx}px)`,
            transition: "all 0.24s linear",
          }}
          className=" snap-start w-64 h-1/5 bg-red-500 mr-3  mt-2"
        ></div>
        <div
          style={{
            transform: `translate(${1 * movePx}px)`,
            transition: "all 0.24s linear",
          }}
          className=" snap-start w-64 h-1/5 bg-red-500 mr-3  mt-2"
        ></div>
        <div
          style={{
            transform: `translate(${1 * movePx}px)`,
            transition: "all 0.24s linear",
          }}
          className=" snap-start w-64 h-1/5 bg-red-500 mr-3  mt-2"
        ></div>
      </div>
    </>
  );
}
