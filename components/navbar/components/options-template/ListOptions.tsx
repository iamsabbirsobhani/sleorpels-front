export default function ListOptions(props: any) {
  const { data, title, optionNo, optionGroup, genderNavOption, col } = props;
  return (
    <>
      <h1 className=" underline-offset-4 font-bold underline uppercase mb-3 tracking-wider">
        {title}
      </h1>
      {data[genderNavOption].map(
        (option: any) =>
          option.id === optionNo && (
            <div key={option.id} className={" grid " + ` grid-cols-${col}`}>
              {option[optionGroup]?.map((item: any) => (
                <div key={item.id} className="">
                  <a
                    className=" text-gray-500 hover:text-blue-500"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          )
      )}
    </>
  );
}
