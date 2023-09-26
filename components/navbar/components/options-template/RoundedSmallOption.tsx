import Image from 'next/image';
export default function RoundedSmallOption(props: any) {
  const { data, title, optionNo, optionGroup, genderNavOption } = props;

  return (
    <div className="">
      {data[genderNavOption].map(
        (option: any) =>
          option.id === optionNo && (
            <div key={option.id}>
              <h1 className=" underline-offset-4 font-bold underline uppercase mb-3  tracking-wider">
                {title}
              </h1>
              {option[optionGroup]?.map((item: any, index: number, ar: any) => (
                <div
                  key={item.id}
                  className=" group flex items-center mt-3 hover:text-blue-500 cursor-pointer"
                >
                  <div className=" rounded-full outline-1 outline-offset-2 outline-gray-500/20 w-10 h-10 flex justify-center items-center mr-2 outline group-hover:outline-blue-500 ">
                    <Image
                      src={item.imgUrl}
                      width={43}
                      height={43}
                      className=" rounded-full"
                      blurDataURL={item.imgUrl}
                      placeholder="blur"
                      alt="image"
                    />
                  </div>
                  <div className=" relative">
                    <p className=" ml-2 text-gray-500 group-hover:text-blue-500">
                      {item.name}
                    </p>
                    {ar.length - 1 > index ? (
                      <div className=" absolute w-full bg-gray-500/20 h-[1px] left-1 -bottom-3"></div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ),
      )}
    </div>
  );
}
