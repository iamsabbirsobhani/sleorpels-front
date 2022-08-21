import data from "../../../app-data/app-data.json";

export default function NewInOption() {
  return (
    <>
      <div className=" grid gap-2 grid-cols-3">
        {/* new products */}
        <div className="">
          <h1 className=" tracking-wider uppercase underline font-bold underline-offset-2">
            New Products
          </h1>
          {data["men-nav-options"].map(
            (option) =>
              option.id === 2 &&
              option["new-products"]?.map((product) => (
                <div key={product.id} className=" mt-2">
                  <a
                    className=" hover:text-blue-500 text-gray-600"
                    href={product.url}
                  >
                    {product.name}
                  </a>
                </div>
              ))
          )}
        </div>

        {/* new edits */}
        <div className=" col-span-2">
          <h1 className=" underline-offset-2 tracking-wider uppercase underline font-bold">
            New edits
          </h1>
          <div className=" flex justify-between">
            {data["men-nav-options"].map(
              (option) =>
                option.id === 2 &&
                option["new-edits"]?.map((edit) => (
                  <a
                    key={edit.id}
                    className=" w-64 h-72 bg-cover relative hover:border-blue-500 border"
                    style={{ backgroundImage: `url(${edit.imgUrl})` }}
                    href={edit.url}
                  >
                    <div className="  bg-gradient-to-t from-gray-200/70 to-gray-200/5 absolute top-0 left-0 right-0 bottom-0"></div>
                    <div
                      style={{ fontFamily: "Futura PT Bold" }}
                      className=" absolute left-0 right-0 bottom-5  uppercase text-center tracking-wider text-gray-700/80"
                    >
                      <h1>{edit.name}</h1>
                    </div>
                  </a>
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
