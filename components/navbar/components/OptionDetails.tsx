import SaleOption from "./SaleOption";

export default function OptionDetails(props: any) {
  const { shopByProduct } = props;
  return (
    <div
      id="option-details"
      className=" w-[98%]  bg-gray-100 m-auto absolute left-0 right-0 z-20 p-5"
    >
      {/* Sale option */}
      {shopByProduct && <SaleOption />}
    </div>
  );
}
