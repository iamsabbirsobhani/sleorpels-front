import Image from "next/image";
export default function RoundedBigOption(props: any) {
  const { data, title, optionNo, optionGroup, genderNavOption } = props;

  return (
    <>
      {data[genderNavOption]?.map(
        (option: any) =>
          option.id === optionNo && (
            <div key={option.id}>
              <h1 className=" underline-offset-4 font-bold underline uppercase mb-3 tracking-wider">
                {title}
              </h1>
              <div className="flex items-center ">
                {option[optionGroup]?.map((link: any) => (
                  <div key={link.id} className=" w-48  text-center p-2 ">
                    <a href={link.url} className=" ">
                      <div className=" border w-24 h-24 m-auto p-[2px]  rounded-full text-gray-600/95 hover:text-blue-500 hover:border-blue-500">
                        <Image
                          src={link.imgUrl}
                          width={90}
                          height={90}
                          className="rounded-[50%]  "
                          placeholder="blur"
                        />
                        <p className="text-sm   antialiased tracking-wide">
                          {link.name}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </>
  );
}
