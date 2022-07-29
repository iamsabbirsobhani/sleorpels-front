import Image from "next/image";

type props = {
  width: number;
  height: number;
  src: string;
  productName: string;
  productPrice: string;
};

export default function ProductCard(props: props) {
  return (
    <>
      {props.productName ? (
        <div className=" lg:w-80 xl:w-80 2xl:w-80 w-72 m-5">
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
            <p className=" font-bold">${props.productPrice}.00</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
