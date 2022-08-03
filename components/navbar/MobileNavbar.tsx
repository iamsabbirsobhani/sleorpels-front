import Link from "next/link";
import { Drawer } from "./components/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { setOpenDrawer } from "../../features/global/globalSlice";

export default function MobileNavbar() {
  const openDrawer = useSelector((state: any) => state.global.openDrawer);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" flex justify-around items-center h-[3.6rem] bg-[#2d2d2d] border-b-[1px]">
        <div className=" flex items-center ">
          <button
            onClick={() => {
              dispatch(setOpenDrawer(true));
              document.body.style.overflow = "hidden";
            }}
            className=" mr-3 text-white text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div>
            <Link href={"/"}>
              <h1
                style={{ fontFamily: "Readex Pro" }}
                className="text-3xl tracking-tighter font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-gray-300 cursor-pointer"
              >
                SLEORPELS®
              </h1>
            </Link>
          </div>
        </div>
        <div className=" flex justify-between w-28 text-white">
          <div>
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div>
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          <div>
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <Drawer openDrawer={openDrawer} />
      </div>
    </>
  );
}
