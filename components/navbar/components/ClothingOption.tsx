import data from "../../../app-data/app-data.json";

export default function ClothingOption() {
  return (
    <>
      <div className=" grid grid-cols-5">
        {/* shop by product */}
        <div className=" col-span-2 grid-cols-2">
          {data["men-nav-options"].map(
            (option) =>
              option.id === 3 &&
              option["shop-by-product"]?.map((item) => (
                <div key={item.id}>
                  <a href={item.url}>{item.name}</a>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}
