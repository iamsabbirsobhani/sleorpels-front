import data from "../../../app-data/app-data.json";

export default function ClothingOption() {
  return (
    <>
      <div className=" grid grid-cols-5">
        {/* shop by product */}
        <div className=" ">
          {data["men-nav-options"].map(
            (option) =>
              option.id === 3 &&
              option["shop-by-product"]?.map((item) => (
                <div key={item.id} className="grid col-span-2">
                  <a href={item.url}>{item.name}</a>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}
