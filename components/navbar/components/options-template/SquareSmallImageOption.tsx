export default function SquareSmallImageOption(props: any) {
  const { data, optionNo, optionGroup, genderNavOption } = props;
  return (
    <>
      {data[genderNavOption].map(
        (option: any) =>
          option.id === optionNo &&
          option[optionGroup]?.map((other: any) => (
            <div className=" relative h-[5.8rem] outline outline-1 outline-gray-500/20 outline-offset-2 mt-4 cursor-pointer hover:outline-blue-500 w-56">
              <h1
                style={{ fontFamily: "Futura PT Bold" }}
                className=" relative top-[35%] z-10 antialiased tracking-wider uppercase px-3"
              >
                {other.name}
              </h1>
              <div className=" absolute top-0">
                <img
                  src={other.imgUrl}
                  className=" h-[5.7rem] w-full object-cover"
                />
              </div>
            </div>
          ))
      )}
    </>
  );
}
