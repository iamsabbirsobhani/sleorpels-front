import data from '../../../app-data/app-data.json';
import Image from 'next/image';
import { useState } from 'react';

export default function TrendingBrands() {
  const [activatedId, setactivatedId] = useState<any>();

  return (
    <>
      <div>
        <div className=" mb-5">
          <h1
            style={{ fontFamily: 'Futura PT Bold' }}
            className="antialiased tracking-wider font-bold text-3xl uppercase text-center"
          >
            Trending Brands
          </h1>
        </div>
        <ul className=" flex flex-wrap items-center justify-center">
          {data['men-trending-brands'].map((item) =>
            item.id === activatedId ? (
              <li
                onMouseEnter={() => {
                  setactivatedId(item.id);
                }}
                onMouseLeave={() => {
                  setactivatedId(0);
                }}
                key={item.id}
                style={{ transition: 'all 1s ease' }}
                className=" basis-44 lg:basis-48 xl:basis-52 2xl:basis-56 opacity-100"
              >
                <a title={item.title} href={item.url}>
                  <Image
                    src={item.imgUrl}
                    width={100}
                    height={100}
                    placeholder="blur"
                    layout="responsive"
                    blurDataURL={item.imgUrl}
                    alt="image"
                  />
                </a>
              </li>
            ) : activatedId ? (
              <li
                onMouseOver={() => {
                  setactivatedId(item.id);
                }}
                key={item.id}
                style={{ transition: 'all 1s ease' }}
                className=" basis-44 lg:basis-48 xl:basis-52 2xl:basis-56 opacity-50"
              >
                <a title={item.title} href={item.url}>
                  <Image
                    src={item.imgUrl}
                    width={100}
                    height={100}
                    placeholder="blur"
                    layout="responsive"
                    blurDataURL={item.imgUrl}
                    alt="image"
                  />
                </a>
              </li>
            ) : (
              <li
                onMouseOver={() => {
                  setactivatedId(item.id);
                }}
                key={item.id}
                style={{ transition: 'all 1s ease' }}
                className=" basis-44 lg:basis-48 xl:basis-52 2xl:basis-56 opacity-100"
              >
                <a title={item.title} href={item.url}>
                  <Image
                    src={item.imgUrl}
                    width={100}
                    height={100}
                    placeholder="blur"
                    layout="responsive"
                    blurDataURL={item.imgUrl}
                    alt="image"
                  />
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  );
}
