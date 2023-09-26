import data from '../../../app-data/women-data.json';
import Image from 'next/image';

export default function NewIn() {
  return (
    <>
      <div className=" grid gap-2 grid-cols-4">
        {/* new products */}
        <div className="">
          <h1 className=" tracking-wider uppercase underline font-bold underline-offset-2">
            New Products
          </h1>
          {data['women-nav-options'].map(
            (option) =>
              option.id === 2 &&
              option['new-products']?.map((product) => (
                <div key={product.id} className=" mt-2">
                  <a
                    className=" hover:text-blue-500 text-gray-600"
                    href={product.url}
                  >
                    {product.name}
                  </a>
                </div>
              )),
          )}
        </div>

        {/* shop sale by body fit */}
        <div className="grid grid-cols-1  mt-2">
          {data['women-nav-options'].map(
            (option) =>
              option.id === 2 && (
                <div key={option.id}>
                  <h1 className="font-bold underline uppercase mb-3 underline-offset-2 tracking-wider">
                    SHOP SALE BY BODY FIT
                  </h1>
                  <div className="flex flex-wrap items-center">
                    {option['shop-by-body-fit']?.map((link) => (
                      <div
                        key={link.id}
                        className=" w-48 basis-1/2 mt-5 mb-3 text-center p-2"
                      >
                        <a href={link.url} className=" ">
                          <div className=" border w-24 h-24 m-auto p-[2px]  rounded-full text-gray-600/95 hover:text-blue-500 hover:border-blue-500">
                            <Image
                              src={link.imgUrl}
                              width={90}
                              height={90}
                              className="rounded-[50%]  "
                              style={imgStyle}
                              blurDataURL={link.imgUrl}
                              placeholder="blur"
                              alt="image"
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
              ),
          )}
        </div>

        {/* new edits */}
        <div className=" col-span-2">
          <h1 className=" ml-5 mb-3 underline-offset-2 tracking-wider uppercase underline font-bold">
            New edits
          </h1>
          <div className=" flex justify-around">
            {data['women-nav-options'][1]['new-edits']?.map((edit) => (
              <a
                key={edit.id}
                className=" w-64 h-72 bg-cover relative hover:border-blue-500 border"
                style={{ backgroundImage: `url(${edit.imgUrl})` }}
                href={edit.url}
              >
                <div className="  bg-gradient-to-t from-gray-200/70 to-gray-200/5 absolute top-0 left-0 right-0 bottom-0"></div>
                <div
                  style={{ fontFamily: 'Futura PT Bold' }}
                  className=" absolute left-0 right-0 bottom-5  uppercase text-center tracking-wider text-gray-700/80"
                >
                  <h1>{edit.name}</h1>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const imgStyle = {
  border: '2px solid gray',
};
