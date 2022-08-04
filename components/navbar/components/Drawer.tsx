import { useEffect, useState } from "react";
import DrawerMen from "./DrawerMen";
import { useSelector, useDispatch } from "react-redux";
import { setOpenDrawer, setScroll } from "../../../features/global/globalSlice";

type DrawerProps = {
  openDrawer: boolean;
};

export function Drawer(props: DrawerProps) {
  const [openMen, setopenMen] = useState(false);
  const dispatch = useDispatch();

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
        }}
        className=" z-30 w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-gray-600/30 "
      ></div>

      {/* drawer */}
      <div
        style={{
          left: props.openDrawer ? "0" : "-100%",
          transition: "left 0.24s linear",
        }}
        className=" z-50 fixed h-full top-0  w-2/3 bg-white"
      >
        <div className=" flex border-b-[1px] border-gray-500/20 items-center">
          <button className=" w-1/2 uppercase p-3 font-semibold">Women</button>
          <div className=" w-[1px] h-5 bg-gray-500/40"></div>
          <button
            onClick={() => {
              setopenMen(true);
            }}
            style={{
              borderBottom: openMen ? "1.5px solid #9ca3af" : "none",
            }}
            className=" w-1/2 uppercase p-3 font-semibold"
          >
            Men
          </button>
        </div>

        <div
          style={{
            display: openMen ? "block" : "none",
            transition: "display 0.24ms ease-out",
          }}
        >
          <DrawerMen />
        </div>
      </div>
      <div
        style={{
          left: props.openDrawer ? "" : "-100%",
          transition: "left 0.24s linear",
        }}
        className=" z-40 absolute text-black top-0 left-2/3"
      >
        <button
          onClick={() => {
            dispatch(setOpenDrawer(false));
            setopenMen(false);
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
