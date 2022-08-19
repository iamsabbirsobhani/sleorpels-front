import data from "../../../app-data/app-data.json";
export default function MenNavOptions(props: any) {
  return (
    <>
      <div
        style={{ fontFamily: "Futura PT Book" }}
        className=" w-full bg-[#525050]      tracking-wider text-gray-100  relative top-0 overflow-hidden z-30"
      >
        <div
          id="options"
          className=" flex justify-evenly items-center p-2 px-10 h-12"
        >
          {data["men-nav-options"].map((option) =>
            option.id === 1 || option.id === 11 ? (
              <div
                onMouseEnter={(e) => {
                  console.log(option.id);
                }}
                key={option.id}
                className=" font-bold bg-rose-600 -skew-x-12 h-12 flex items-center w-20 justify-center hover:bg-gray-100 hover:skew-x-0 cursor-default hover:text-gray-800 hover:font-bold transition-all duration-200 group"
              >
                <h1>{option.name}</h1>
              </div>
            ) : (
              <div
                key={option.id}
                onMouseEnter={(e) => {
                  console.log(option.id);
                }}
                className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800"
              >
                <h1>{option.name}</h1>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
