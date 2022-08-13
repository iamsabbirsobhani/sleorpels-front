import { useEffect, useState, useRef } from "react";
import DrawerMen from "./DrawerMen";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenDrawer,
  setScroll,
  setShowNav,
} from "../../../features/global/globalSlice";
import DrawerFooter from "./DrawerFooter";
import DrawerWomen from "./DrawerWomen";

type DrawerProps = {
  openDrawer: boolean;
};

export function Drawer(props: DrawerProps) {
  const [openMen, setopenMen] = useState(false);
  const [openWomen, setopenWomen] = useState(true);
  const showNav = useSelector((state: any) => state.global.showNav);
  const dispatch = useDispatch();

  useEffect(() => {
    const scrl = document.querySelector("#scroller");
    let previousPosition = 0;

    scrl?.addEventListener("scroll", (e) => {
      if (scrl.scrollTop > previousPosition) {
        previousPosition = scrl.scrollTop;
        dispatch(setShowNav(false));
      } else {
        dispatch(setShowNav(true));
        previousPosition = scrl.scrollTop;
      }
    });
  }, []);
  return (
    <>
      <div
        style={{
          opacity: props.openDrawer ? "1" : "0",
          visibility: props.openDrawer ? "visible" : "hidden",
          transition: "all 0.24s ease-in",
        }}
        onClick={() => {
          dispatch(setOpenDrawer(false));
          dispatch(setScroll());
          setopenMen(openMen);
          setopenWomen(openWomen);
        }}
        className=" z-30 w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-gray-600/30 "
      ></div>

      {/* drawer */}
      <div
        style={{
          left: props.openDrawer ? "0" : "-100%",
          transition: "left 0.24s linear",
        }}
        id="scroller"
        className=" z-50 fixed h-full top-0 bottom-0 sm:w-[45%] w-[86%] bg-white overflow-y-scroll"
      >
        <div
          className={
            " fixed z-50 sm:w-[45%] w-[86%] flex border-b-[1px] border-gray-500/20 bg-white items-center transition-all duration-300 " +
            `${showNav ? "top-0" : "-top-[60px]"}`
          }
        >
          <button
            onClick={() => {
              setopenMen(false);
              setopenWomen(true);
            }}
            style={{
              borderBottom: openWomen ? "2px solid #111827" : "none",
            }}
            className=" w-1/2 uppercase p-3 font-semibold"
          >
            Women
          </button>
          <div className=" w-[1px] h-5 bg-gray-500/40"></div>
          <button
            onClick={() => {
              setopenWomen(false);
              setopenMen(true);
            }}
            style={{
              borderBottom: openMen ? "2px solid #111827" : "none",
            }}
            className=" w-1/2 uppercase p-3 font-semibold"
          >
            Men
          </button>
        </div>

        {/* drawer for men */}
        <div
          style={{
            display: openMen ? "block" : "none",
            transition: "display 0.24ms ease-out",
          }}
          className=" mt-16"
        >
          <DrawerMen />
        </div>

        {/* drawer for women */}
        <div
          style={{
            display: openWomen ? "block" : "none",
            transition: "display 0.24ms ease-out",
          }}
          className=" mt-16"
        >
          <DrawerWomen />
        </div>
        <div className="">
          <DrawerFooter />
        </div>
      </div>
      <div
        style={{
          transition: "left 0.24s linear",
        }}
        className={
          " z-40 absolute text-black top-0 left-2/3 " +
          `${props.openDrawer ? "left-[86%] sm:left-[45%]" : "left-[-100%]"}`
        }
      >
        <button
          onClick={() => {
            dispatch(setOpenDrawer(false));
            setopenMen(openMen);
            setopenWomen(openWomen);
            dispatch(setScroll());
          }}
          className=" shadow-md bg-[#2d2d2d] w-10 h-10 text-center flex items-center justify-center text-white font-bold text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
