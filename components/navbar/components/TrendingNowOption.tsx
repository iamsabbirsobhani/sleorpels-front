import RoundedSmallOption from './options-template/RoundedSmallOption';
import data from '../../../app-data/app-data.json';
import RoundedBigOption from './options-template/RoundedBigOption';
import ImageTiles from './options-template/ImageTiles';
import Image from 'next/image';

export default function TrendingNowOption() {
  return (
    <>
      <div
        className=" grid grid-cols-3 relative "
        style={{
          gridTemplateColumns: '250px fit-content(30%) auto',
        }}
      >
        {/* most wanted */}
        <div className=" relative">
          <RoundedSmallOption
            optionNo={8}
            genderNavOption={'men-nav-options'}
            optionGroup={'most-wanted'}
            data={data}
            title={'Most wanted'}
          />
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* new drops */}

        <div className="grid relative ml-3">
          {data['men-nav-options']?.map(
            (option: any) =>
              option.id === 8 && (
                <div key={option.id}>
                  <h1 className=" underline-offset-4 font-bold underline uppercase mb-3 tracking-wider">
                    New drops
                  </h1>
                  <div className="flex items-center flex-wrap justify-center">
                    {option['new-drops']?.map((link: any) => (
                      <div
                        key={link.id}
                        className=" w-32  text-center p-2 mt-9 mb-8 ml-3"
                      >
                        <a href={link.url} className=" ">
                          <div className=" border w-24 h-24 m-auto p-[2px]  rounded-full text-gray-600/95 hover:text-blue-500 hover:border-blue-500 ">
                            <Image
                              src={link.imgUrl}
                              width={80}
                              height={80}
                              className="rounded-[50%]  "
                              blurDataURL={link.imgUrl}
                              placeholder="blur"
                              alt="topman"
                            />
                            <p className="text-sm   antialiased tracking-wide mt-3">
                              {link.name}
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ),
          )}
          <div className=" absolute w-[1px] top-0 bg-gray-500/30 h-full right-0"></div>
        </div>

        {/* others */}
        <div className="    ml-2">
          {data['men-nav-options']?.map(
            (option: any) =>
              option.id === 8 && (
                <div
                  key={option.id}
                  className=" flex justify-around flex-wrap "
                >
                  {option['others']?.map((other: any) => (
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
                        blurDataURL={other.imgUrl}
                        placeholder="blur"
                        alt="image"
                      />
                      <div
                        style={{ fontFamily: 'Futura PT Bold' }}
                        className=" absolute left-0 right-0  bottom-5  uppercase text-center tracking-wider text-gray-800/70 z-10"
                      >
                        <h1>{other.name}</h1>
                      </div>
                      <div className="  bg-gradient-to-t from-gray-200/70 to-gray-200/5 absolute top-0 left-0 right-0 bottom-0"></div>
                    </div>
                  ))}
                </div>
              ),
          )}
        </div>
      </div>
    </>
  );
}
