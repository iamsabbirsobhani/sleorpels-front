import PopulateOffer from "../components/home/homepage/PopulateOffer";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <div>
        <PopulateOffer />

        <div className=" visible lg:hidden xl:hidden 2xl:hidden">
          <Image
            src={
              "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/august-2022/microsoftteams-image-(125).png"
            }
            layout="responsive"
            objectFit="fill"
            width={500}
            height={800}
          />
        </div>
        <div className="hidden lg:block xl:block 2xl:block">
          <Image
            src={
              "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/august-2022/2022_unihp_desktop.jpg"
            }
            layout="responsive"
            objectFit="fill"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
