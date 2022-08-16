import data from "../../../app-data/app-data.json";
export default function MenNavOptions(props: any) {
  return (
    <>
      <div
        style={{ fontFamily: "Futura PT Book" }}
        className=" w-full bg-[#525050] h-12 flex justify-evenly p-2 items-center px-10 tracking-wider text-gray-100  absolute top-0 overflow-hidden"
      >
        <div className=" font-bold bg-rose-600 -skew-x-12 h-12 flex items-center w-20 justify-center hover:bg-gray-100 hover:skew-x-0 cursor-default hover:text-gray-800 hover:font-bold transition-all duration-200 group">
          <h1>Sale</h1>
          <div className=" z-30 absolute invisible  group-hover:visible bg-emerald-500 w-full h-14 bottom-0">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Pariatur, incidunt.
            </h1>
          </div>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>New in</h1>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Clothing</h1>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Shoes</h1>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Sportswear</h1>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Summer</h1>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Trending Now</h1>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Topman</h1>
        </div>
        <div className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Brands</h1>
        </div>
        <div className="font-bold bg-rose-600 -skew-x-12 h-12 flex items-center  justify-center hover:bg-gray-100 hover:skew-x-0 cursor-default hover:text-gray-800 hover:font-bold transition-all duration-200 p-2">
          <h1>Outlet</h1>
        </div>
        <div className=" h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800">
          <h1>Marketplace</h1>
        </div>
      </div>
    </>
  );
}
