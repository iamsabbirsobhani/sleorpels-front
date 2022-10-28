import AccessoriesOption from "./AccessoriesOption";
import ClothingOption from "./ClothingOption";
import NewInOption from "./NewInOption";
import BrandsOption from "./option-details/BrandsOption";
import { MarketplaceOption } from "./option-details/MarketplaceOption";
import OutletOption from "./option-details/OutletOption";
import SaleOption from "./SaleOption";
import ShoesOption from "./ShoesOption";
import SportsWearOption from "./SportswearOption";
import SummerOption from "./SummerOption";
import TopmanOption from "./TopmanOption";
import TrendingNowOption from "./TrendingNowOption";
import { useDispatch } from "react-redux";
import {
  setOpenNavOption,
  resetActivateOption,
} from "../../../features/global/globalSlice";
import Sale from "../../women/navbar/sale";
import NewIn from "../../women/navbar/NewIn";
import Clothing from "../../women/navbar/Clothing";
import Shoes from "../../women/navbar/Shoes";
import Sportswear from "../../women/navbar/Sportswear";
import Accessories from "../../women/navbar/Accessories";
import TrendingNow from "../../women/navbar/TrendingNow";

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
    marketplace,
    womenSale,
    womenNewIn,
    womenClothing,
    womenShoes,
    womenSportswear,
    womenAccessories,
    womenTrending,
  } = props;

  const dispatch = useDispatch();

  return (
    <div
      id="option-details"
      className=" w-[98%] shadow-md  bg-gray-100 m-auto absolute left-0 right-0 z-20 p-5"
      onMouseLeave={() => {
        dispatch(setOpenNavOption(false));
        dispatch(resetActivateOption());
      }}
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
      {/* marketplace now option */}
      {marketplace && <MarketplaceOption />}

      {/* women */}
      {/* Sale option */}
      {womenSale && <Sale />}
      {womenNewIn && <NewIn />}
      {womenClothing && <Clothing />}
      {womenShoes && <Shoes />}
      {womenSportswear && <Sportswear />}
      {womenAccessories && <Accessories />}
      {womenTrending && <TrendingNow />}
    </div>
  );
}
