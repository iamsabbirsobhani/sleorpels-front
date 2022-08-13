export default function DiscoverMore(props: any) {
  return (
    <>
      <div className=" bg-[#EEEEEE] w-full h-12 mt-5 flex items-center">
        <h1 style={{ fontFamily: "Futura PT Demi" }} className=" text-xl px-5 ">
          Discover More
        </h1>
      </div>

      <div
        className=" m-auto w-full h-[6rem] items-center "
        style={{ fontFamily: "Futura PT Demi" }}
      >
        <a
          className=" tracking-wider uppercase flex flex-col  bg-no-repeat  w-full  m-auto p-1 px-4  bg-[length:100%_100%] h-full "
          style={{
            width: "calc(100% - 25px)",
            marginTop: "calc(15px)",
            backgroundImage: `url(${props.bg})`,
          }}
        >
          <p
            className=" text-lg tracking-wider"
            style={{ fontFamily: "Futura PT Demi" }}
          >
            Marketplace
          </p>
          <p className=" text-lg" style={{ fontFamily: "Futura PT Light" }}>
            Vintage & new <br />
            brands
          </p>
        </a>
      </div>

      {/* discover more */}
      <div className=" mt-3 mb-5 flex justify-between p-2">
        <div className="border-[1px] w-[45%] text-center  border-gray-400/30">
          <a href="">
            <div className=" bg-[url(https://images.asos-media.com/navigation/giftvouchers_moreasos_6m?&$n_320w$)] w-full h-28   bg-no-repeat  bg-[length:100%_100%]"></div>
          </a>
          <h1
            className=" p-2 tracking-wider uppercase text-sm font-semibold"
            style={{ fontFamily: "Futura PT Demi" }}
          >
            Gift Vouchers
          </h1>
        </div>
        <div className="border-[1px] w-[45%] text-center  border-gray-400/30">
          <a href="">
            <div className=" bg-[url(https://images.asos-media.com/navigation/mw-moreasos-app-6m?&$n_320w$)] w-full h-24   bg-no-repeat  bg-[length:100%_100%]"></div>
          </a>
          <h1
            className=" p-2 tracking-wider uppercase text-sm font-semibold "
            style={{ fontFamily: "Futura PT Demi" }}
          >
            Download the app
          </h1>
        </div>
      </div>
    </>
  );
}
