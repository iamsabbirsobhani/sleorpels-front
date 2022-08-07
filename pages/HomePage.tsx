import PopulateOffer from "../components/home/homepage/PopulateOffer";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <div className=" relative ">
        <PopulateOffer />
        <div className=" relative">
          <div className=" visible lg:hidden xl:hidden 2xl:hidden">
            <Image
              src={
                "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/august-2022/microsoftteams-image-(125).png"
              }
              layout="responsive"
              objectFit="fill"
              width={500}
              height={800}
            />
          </div>
          <div className="hidden lg:block xl:block 2xl:block">
            <Image
              src={
                "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/august-2022/2022_unihp_desktop.jpg"
              }
              layout="responsive"
              objectFit="fill"
              width={1000}
              height={500}
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
                style={{ fontFamily: "Futura PT Extra Bold" }}
                className=" bg-white w-[32rem] text-center m-auto p-2 font-extrabold text-5xl"
              >
                This is SLEORPELS
              </h2>
              <p
                style={{ fontFamily: "Futura PT Light" }}
                className=" bg-white w-[20rem] m-auto p-2 text-center  tracking-wider"
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
        </div>
      </div>
    </>
  );
}
