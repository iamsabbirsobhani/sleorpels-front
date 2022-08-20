import data from "../../../../app-data/app-data.json";
import Image from "next/image";
import ListOptions from "../options-template/ListOptions";

export default function BrandsOption() {
  return (
    <>
      <div
        className=" grid grid-cols-3 relative mb-5"
        style={{
          gridTemplateColumns: "500px auto auto",
        }}
      >
        {/* shop by product */}
        <div className=" relative">
          <ListOptions
            optionNo={10}
            genderNavOption={"men-nav-options"}
            optionGroup={"top-brands"}
            data={data}
            title={"Top brands"}
            col={2}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* others */}
        <div className="    ml-2 relative">
          {data["men-nav-options"]?.map(
            (option: any) =>
              option.id === 10 && (
                <div
                  key={option.id}
                  className=" flex justify-around flex-wrap "
                >
                  {option["others"]?.map((other: any) => (
                    <div
                      key={other.id}
                      style={{ width: 220, height: 130 }}
                      className=" mt-5 mr-5 outline outline-gray-500/50 outline-1 outline-offset-2 relative hover:outline-blue-500 cursor-pointer"
                    >
                      <Image
                        src={other.imgUrl}
                        width={220}
                        height={130}
                        layout="responsive"
                        className="  object-cover"
                      />
                      <div
                        style={{ fontFamily: "Futura PT Bold" }}
                        className=" absolute left-0 right-0  bottom-5  uppercase text-center tracking-wider text-gray-800/70 z-10"
                      >
                        <h1>{other.name}</h1>
                      </div>
                      <div className="  bg-gradient-to-t from-gray-200/70 to-gray-200/5 absolute top-0 left-0 right-0 bottom-0"></div>
                    </div>
                  ))}
                  <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
                </div>
              )
          )}
        </div>

        {/* others second */}
        <div className="    ml-2 relative">
          {data["men-nav-options"]?.map(
            (option: any) =>
              option.id === 10 && (
                <div
                  key={option.id}
                  className=" flex justify-around flex-wrap "
                >
                  {option["others-second"]?.map((other: any) => (
                    <div
                      key={other.id}
                      style={{ width: 220, height: 130 }}
                      className=" mt-5 mr-5 outline outline-gray-500/50 outline-1 outline-offset-2 relative hover:outline-blue-500 cursor-pointer"
                    >
                      <Image
                        src={other.imgUrl}
                        width={220}
                        height={130}
                        layout="responsive"
                        className="  object-cover"
                      />
                      <div
                        style={{ fontFamily: "Futura PT Bold" }}
                        className=" absolute left-0 right-0  bottom-5  uppercase text-center tracking-wider text-gray-800/70 z-10"
                      >
                        <h1>{other.name}</h1>
                      </div>
                      <div className="  bg-gradient-to-t from-gray-200/70 to-gray-200/5 absolute top-0 left-0 right-0 bottom-0"></div>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
