import AccessoriesOption from "./AccessoriesOption";
import ClothingOption from "./ClothingOption";
import NewInOption from "./NewInOption";
import BrandsOption from "./option-details/BrandsOption";
import OutletOption from "./option-details/OutletOption";
import SaleOption from "./SaleOption";
import ShoesOption from "./ShoesOption";
import SportsWearOption from "./SportswearOption";
import SummerOption from "./SummerOption";
import TopmanOption from "./TopmanOption";
import TrendingNowOption from "./TrendingNowOption";

export default function OptionDetails(props: any) {
  const {
    sale,
    newin,
    clothing,
    shoes,
    sportswear,
    accessories,
    summer,
    trending,
    topman,
    brands,
    outlet,
  } = props;
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
      {/* shoes option */}
      {shoes && <ShoesOption />}
      {/* sportswear option */}
      {sportswear && <SportsWearOption />}
      {/* accessories option */}
      {accessories && <AccessoriesOption />}
      {/* summer option */}
      {summer && <SummerOption />}
      {/* trending now option */}
      {trending && <TrendingNowOption />}
      {/* topman now option */}
      {topman && <TopmanOption />}
      {/* brands now option */}
      {brands && <BrandsOption />}
      {/* outlet now option */}
      {outlet && <OutletOption />}
    </div>
  );
}
