import data from "../../../../app-data/app-data.json";

export function MarketplaceOption() {
  return (
    <>
      <div className=" grid gap-4 grid-cols-4 relative">
        {data["men-nav-options"].map(
          (option) =>
            option.id === 12 &&
            option["marketplace"]?.map((item) => (
              <div className=" w-full cursor-pointer mt-5 bg-white shadow-sm">
                <div
                  className=" w-full h-40 bg-contain bg-no-repeat relative"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                >
                  <h1
                    style={{ fontFamily: "Futura PT Bold" }}
                    className=" absolute bottom-3 left-2 text-white uppercase "
                  >
                    {item.title}
                  </h1>
                </div>
                <div className=" hover:text-blue-500 bg-white h-20 text-center flex justify-center items-center">
                  <h1 className="  text-lg">{item.name}</h1>
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
}
