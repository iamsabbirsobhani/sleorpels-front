import PopulateOffer from "../components/home/homepage/PopulateOffer";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../composable/fetcher";

export default function HomePage() {
  const { data: cover, error } = useSWR(
    "https://sleorpels.herokuapp.com/api/home-cover-pic?populate=*",
    fetcher()
  );

  return (
    <>
      <div className=" relative ">
        <PopulateOffer />
        {cover?.data.attributes.mobile && cover?.data.attributes.desktop && (
          <div className=" relative">
            <div className=" visible lg:hidden xl:hidden 2xl:hidden">
              <Image
                src={cover?.data.attributes.mobile}
                layout="responsive"
                objectFit="fill"
                width={500}
                height={800}
              />
            </div>
            <div className="hidden lg:block xl:block 2xl:block">
              <Image
                src={cover?.data.attributes.desktop}
                layout="responsive"
                objectFit="fill"
                width={1000}
                height={500}
                priority
              />
            </div>
            <div className=" visible lg:hidden xl:hidden 2xl:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col ">
              <div>
                <h2
                  style={{ fontFamily: "Futura PT Bold" }}
                  className=" bg-white w-52 text-center m-auto p-2 font-extrabold text-2xl"
                >
                  This is SLEORPELS
                </h2>
                <p
                  style={{ fontFamily: "Futura PT Light" }}
                  className=" bg-white p-2 text-center  tracking-wider"
                >
                  SLEORPELS DESIGN and 850+ brands
                </p>
              </div>
              <div className=" flex flex-col mt-3">
                <button
                  style={{ fontFamily: "Futura PT Bold" }}
                  className=" mt-2 bg-white text-gray-900 hover:text-white hover:bg-gray-900 transition-all duration-500 align-text-bottom uppercase p-2 px-4"
                >
                  Shop Women
                </button>
                <button
                  style={{ fontFamily: "Futura PT Bold" }}
                  className=" mt-2 bg-white text-gray-900 hover:text-white hover:bg-gray-900 transition-all duration-500 align-text-bottom uppercase p-2 px-4 "
                >
                  Shop men
                </button>
              </div>
            </div>

            <div className=" hidden lg:flex xl:flex 2xl:flex absolute top-0 bottom-0 left-0 right-0  justify-center items-center flex-col">
              <div>
                <h2
                  style={{ fontFamily: "Futura PT Bold" }}
                  className=" bg-white w-[32rem] text-center m-auto p-2 font-extrabold text-6xl"
                >
                  This is SLEORPELS
                </h2>
                <p
                  style={{ fontFamily: "Futura PT Book" }}
                  className=" bg-white w-[20rem] m-auto p-2 text-center  tracking-wider"
                >
                  SLEORPELS DESIGN and 850+ brands
                </p>
              </div>
              <div className=" flex mt-5">
                <button
                  style={{ fontFamily: "Futura PT Bold" }}
                  className=" mt-2 mr-8 bg-white text-gray-900 hover:text-white hover:bg-gray-900 transition-all duration-500 align-text-bottom uppercase p-2 px-4 w-40"
                >
                  Shop Women
                </button>
                <button
                  style={{ fontFamily: "Futura PT Bold" }}
                  className=" mt-2 bg-white text-gray-900 hover:text-white hover:bg-gray-900 transition-all duration-500 align-text-bottom uppercase p-2 px-4 w-40"
                >
                  Shop men
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
