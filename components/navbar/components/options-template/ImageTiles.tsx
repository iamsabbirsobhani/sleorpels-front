import Image from "next/image";
export default function ImageTiles(props: any) {
  const { data, width, optionNo, height, optionGroup, genderNavOption } = props;
  return (
    <>
      {data[genderNavOption]?.map(
        (option: any) =>
          option.id === optionNo && (
            <div key={option.id} className=" flex justify-around ">
              {option[optionGroup]?.map((other: any) => (
                <div
                  key={other.id}
                  style={{ width: width, height: height }}
                  className=" outline outline-gray-500/50 outline-1 outline-offset-2 relative hover:outline-blue-500 cursor-pointer"
                >
                  <Image
                    src={other.imgUrl}
                    width={width}
                    height={height}
                    layout="responsive"
                    className=" mr-5 object-cover"
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
    </>
  );
}
