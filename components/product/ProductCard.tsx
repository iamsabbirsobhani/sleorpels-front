import Image from "next/image";

type props = {
  width: number;
  height: number;
  src: string;
  productName: string;
  productPrice: number;
  off: number;
};

export default function ProductCard(props: props) {
  function computedOffPrice() {
    return (
      props.productPrice - Math.ceil((props.productPrice * props.off) / 100)
    );
  }

  return (
    <>
      {props.productName ? (
        <div className=" sm:w-60 md:w-64  lg:w-72 lg:h-84 xl:w-72 xl:h-84 2xl:w-72 2xl:h-84 w-32">
          <Image
            className=" object-cover"
            src={props.src}
            alt={props.productName}
            width={props.width}
            height={props.height}
            blurDataURL={props.src}
            placeholder="blur" // Optional blur-up while loading
          />

          <div>
            <p className=" break-all">{props.productName}</p>

            {props.off ? (
              <div className=" flex">
                <p className=" font-bold mr-5">${computedOffPrice()}</p>
                <p className=" font-bold line-through text-red-500">
                  ${props.productPrice}.00
                </p>
              </div>
            ) : (
              <p className=" font-bold">${props.productPrice}.00</p>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
