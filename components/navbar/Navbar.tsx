import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect, Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlag } from "../../features/global/globalSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import MenNavOptions from "./components/MenNavOptions";
import { hideOnScroll } from "../../composable/onScrollHide";
import {
  setShowDeskNav,
  openOption,
  closeOptions,
  setOpenNavOption,
  resetActivateOption,
} from "../../features/global/globalSlice";
import OptionDetails from "./components/OptionDetails";
import UserCard from "./components/user/UserCard";
export default function Navbar() {
  const router = useRouter();
  const url = router.pathname;
  const flag = useSelector((state: any) => state.global.flagUrl);
  const status = useSelector((state: any) => state.global.status);
  const showNav = useSelector((state: any) => state.global.showNavDesk);
  const options = useSelector((state: any) => state.global.options);
  const openNavOption = useSelector((state: any) => state.global.openNavOption);
  const [isMen, setisMen] = useState(url.match(/\bmen/)?.index);
  const [isWomen, setisWomen] = useState(url.match(/\bwomen/)?.index);
  const dispatch = useDispatch<any>();
  const [scrlY, setscrlY] = useState(0);

  const [openOptions, setopenOptions] = useState(false);
  useEffect(() => {
    // console.log("Is this men page: ", url.includes("men"));
    // console.log("Is this women page: ", url.includes("women"));
    if (status === "idle") {
      dispatch(fetchFlag());
    }

    return () => {};
  }, [status, dispatch]);

  // checking url if men or women
  useEffect(() => {
    setisWomen(url.match(/\bwomen/)?.index);
    setisMen(url.match(/\bmen/)?.index);
  }, [url]);

  useEffect(() => {
    hideOnScroll(dispatch, setShowDeskNav, null, undefined, true, window);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrlY(window.scrollY);
    });
  });

  useEffect(() => {
    const a = document.querySelector("#men-nav-options");
    const b = document.querySelector("#option-details");

    b?.addEventListener("mouseenter", (e) => {
      dispatch(setOpenNavOption(true));
    });

    a?.addEventListener("mouseleave", (e) => {
      b?.addEventListener("mouseenter", (b) => {
        dispatch(setOpenNavOption(true));
      });
      dispatch(setOpenNavOption(false));
    });

    document.addEventListener("mouseleave", (e) => {
      dispatch(resetActivateOption());
    });
  });

  return (
    <>
      <div id="desk-navbar" className=" hidden lg:block xl:block 2xl:block">
        <div
          id="top-navbar-info"
          className=" z-30 relative w-full bg-gray-50 h-7 flex justify-end items-center"
        >
          <div
            style={{ fontFamily: "Futura PT Light" }}
            className=" border-l-[1px]  border-r-[1px] border-gray-500/20 p-1 px-5 cursor-pointer hover:text-blue-500"
          >
            <p>Marketplace</p>
          </div>
          <div
            style={{ fontFamily: "Futura PT Light" }}
            className="  border-r-[1px] border-gray-500/20 p-1 px-5 cursor-pointer hover:text-blue-500"
          >
            <p>Help & FAQs</p>
          </div>
          <div
            style={{ fontFamily: "Futura PT Light" }}
            className="  border-r-[1px] border-gray-500/20 p-1 px-5 cursor-pointer mt-1 mr-4"
          >
            {flag && (
              <Image
                src={flag.flag}
                width={20}
                height={20}
                className=" rounded-full hover:outline outline-2  outline-offset-2 outline-blue-500"
              />
            )}
          </div>
        </div>

        {/* Navbar */}
        <div className=" relative z-30">
          <div
            className={
              "w-full h-[3.6rem] bg-[#2d2d2d] fixed top-7  transition-all duration-300 " +
              ` ${
                scrlY < 10
                  ? " top-7 "
                  : showNav
                  ? " top-[0px] fixed "
                  : " -top-[120px] fixed "
              }`
            }
          >
            <div
              onMouseEnter={() => {
                dispatch(resetActivateOption());
              }}
              className=" flex items-center  justify-around  "
            >
              <Link href={"/"} scroll={false}>
                <div>
                  <h1
                    title="Go to SLEORPELS Home"
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
                    onClick={() => {
                      router.push("/women");
                    }}
                    style={{
                      fontFamily: "Futura PT Demi",
                      backgroundColor: isWomen ? "#525050" : undefined,
                    }}
                    className=" uppercase font-semibold tracking-wider text-white w-36 hover:bg-gray-50/10 h-[3.6rem] border-l-[1px] border-r-[1px] border-gray-500/30"
                  >
                    Women
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      router.push("/men");
                    }}
                    style={{
                      fontFamily: "Futura PT Demi",
                      backgroundColor: isMen ? "#525050" : undefined,
                    }}
                    className="nav-desk-men-btn uppercase font-semibold tracking-wider text-white w-36 hover:bg-gray-50/10 h-[3.6rem] border-r-[1px] border-gray-500/30"
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
                <div className=" text-white cursor-pointer group relative">
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
                  <div className=" opacity-0 absolute -top-64 z-[-100] group-hover:top-5 invisible group-hover:visible group-hover:opacity-100  transition-all duration-1000">
                    <UserCard />
                  </div>
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
                <div className="text-white cursor-pointer">
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

            {/* below men navbar options */}
            <div className=" ">
              {isMen ? <MenNavOptions isMen={isMen} /> : null}

              {openNavOption && options && isMen && (
                <OptionDetails
                  sale={options[0].isTrue}
                  newin={options[1].isTrue}
                  clothing={options[2].isTrue}
                  shoes={options[3].isTrue}
                  sportswear={options[4].isTrue}
                  accessories={options[5].isTrue}
                  summer={options[6].isTrue}
                  trending={options[7].isTrue}
                  topman={options[8].isTrue}
                  brands={options[9].isTrue}
                  outlet={options[10].isTrue}
                  marketplace={options[11].isTrue}
                />
              )}
            </div>
            {/*  below women navbar options */}
            <div>
              {isWomen ? <MenNavOptions isMen={isMen} /> : null}

              {openNavOption && options && isWomen && (
                <OptionDetails
                  womenSale={options[0].isTrue}
                  womenNewIn={options[1].isTrue}
                  womenClothing={options[2].isTrue}
                  womenShoes={options[3].isTrue}
                  womenSportswear={options[4].isTrue}
                  womenAccessories={options[5].isTrue}
                  summer={options[6].isTrue}
                  womenTrending={options[7].isTrue}
                  topman={options[8].isTrue}
                  brands={options[9].isTrue}
                  outlet={options[10].isTrue}
                  marketplace={options[11].isTrue}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* overlay when optin open */}
      {openNavOption ? (
        <div
          onMouseEnter={() => {
            dispatch(setOpenNavOption(false));
          }}
          id="overlay-options"
          className="hidden lg:block xl:block 2xl:block bg-gray-500/60 top-0 w-full fixed bottom-0 left-0 right-0 z-20"
        ></div>
      ) : null}

      <div className="block lg:hidden xl:hidden 2xl:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
