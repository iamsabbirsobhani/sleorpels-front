import data from "../../../app-data/app-data.json";
import Image from "next/image";

export default function SectionThree() {
  return (
    <>
      <div className=" flex justify-around flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center">
        {data["men-section-three"].map((item) => (
          <div
            key={item.id}
            className=" border-2 flex lg:mt-0 xl:mt-0 2xl:mt-0 mt-5  flex-col "
          >
            <div>
              <Image
                src={item.imgUrl}
                width={250}
                height={300}
                alt={item.title}
                placeholder="blur"
                blurDataURL={item.imgUrl}
                // layout="responsive"
              />
            </div>
            <div className=" break-all">
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
