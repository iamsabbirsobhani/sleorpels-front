import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <div className=" hidden lg:block xl:block 2xl:block">
        <div className=" w-full bg-gray-50 h-7 flex justify-end items-center">
          <div
            style={{ fontFamily: "Futura PT Light" }}
            className=" border-l-[1px]  border-r-[1px] border-gray-500/20 p-1 px-5 cursor-pointer"
          >
            <p>Marketplace</p>
          </div>
          <div
            style={{ fontFamily: "Futura PT Light" }}
            className="  border-r-[1px] border-gray-500/20 p-1 px-5 cursor-pointer"
          >
            <p>Help & FAQs</p>
          </div>
        </div>
        <div className=" w-full h-[3.6rem] bg-[#2d2d2d] flex items-center  justify-around">
          <Link href={"/"}>
            <div>
              <h1
                style={{ fontFamily: "Readex Pro" }}
                className="text-3xl tracking-tighter font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-gray-300 cursor-pointer"
              >
                SLEORPELS®
              </h1>
            </div>
          </Link>
          <div className=" flex justify-between">
            <div>
              <button
                style={{ fontFamily: "Futura PT Demi" }}
                className=" uppercase font-semibold tracking-wider text-white w-36 hover:bg-gray-50/10 h-16 border-l-[1px] border-r-[1px] border-gray-500/30"
              >
                Women
              </button>
            </div>
            <div>
              <button
                style={{ fontFamily: "Futura PT Demi" }}
                className=" uppercase font-semibold tracking-wider text-white w-36 hover:bg-gray-50/10 h-16 border-r-[1px] border-gray-500/30"
              >
                Men
              </button>
            </div>
          </div>
          <div>
            <input
              className=" w-[30rem] h-10 rounded-full px-5 outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="Search for items and brands"
            />
          </div>

          {/* login user wishlist */}
          <div className=" flex justify-between w-44">
            {/* user */}
            <div className=" text-white cursor-pointer">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            {/* love */}
            <div className=" text-white cursor-pointer">
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

            {/* bag */}
            <div className=" text-white cursor-pointer">
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
      </div>
      <div className="block lg:hidden xl:hidden 2xl:hidden ">
        <MobileNavbar />
      </div>
    </>
  );
}
