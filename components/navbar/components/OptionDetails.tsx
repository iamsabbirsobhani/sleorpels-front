import ClothingOption from "./ClothingOption";
import NewInOption from "./NewInOption";
import SaleOption from "./SaleOption";

export default function OptionDetails(props: any) {
  const { sale, newin, clothing } = props;
  return (
    <div
      id="option-details"
      className=" w-[98%]  bg-gray-100 m-auto absolute left-0 right-0 z-20 p-5"
    >
      {/* Sale option */}
      {sale && <SaleOption />}
      {/* new in option */}
      {newin && <NewInOption />}
      {/* clothing option */}
      {clothing && <ClothingOption />}
    </div>
  );
}
