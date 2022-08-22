import data from "../../../app-data/app-data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  openOption,
  setOpenNavOption,
} from "../../../features/global/globalSlice";

export default function MenNavOptions(props: any) {
  const activeOption = useSelector(
    (state: any) => state.global.activatedOption
  );

  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{ fontFamily: "Futura PT Book" }}
        className=" w-full bg-[#525050]      tracking-wider text-gray-100  relative top-0 overflow-hidden z-30"
        id="men-nav-options"
      >
        <div className=" flex justify-evenly items-center p-2 px-10 h-12">
          {data["men-nav-options"].map((option) =>
            activeOption === option.id &&
            (option.id === 1 || option.id === 11) ? (
              <div
                onMouseEnter={(e) => {
                  dispatch(openOption(option.id));
                  dispatch(setOpenNavOption(true));
                }}
                key={option.id}
                className=" font-bold bg-white text-gray-900  h-12 flex items-center w-20 justify-center   cursor-default   transition-all duration-200 "
              >
                <h1>{option.name}</h1>
              </div>
            ) : activeOption === option.id ? (
              <div
                onMouseEnter={(e) => {
                  dispatch(openOption(option.id));
                  dispatch(setOpenNavOption(true));
                }}
                key={option.id}
                className=" min-w-20  h-12 flex items-center bg-white      justify-center  p-2  cursor-default text-gray-800"
              >
                <h1>{option.name}</h1>
              </div>
            ) : option.id === 1 || option.id === 11 ? (
              <div
                onMouseEnter={(e) => {
                  dispatch(openOption(option.id));
                  dispatch(setOpenNavOption(true));
                }}
                key={option.id}
                className=" font-bold bg-rose-600 -skew-x-12 h-12 flex items-center w-20 justify-center hover:bg-gray-100 hover:skew-x-0 cursor-default hover:text-gray-800 hover:font-bold transition-all duration-200 group"
              >
                <h1>{option.name}</h1>
              </div>
            ) : (
              <div
                key={option.id}
                onMouseEnter={(e) => {
                  dispatch(openOption(option.id));
                  dispatch(setOpenNavOption(true));
                }}
                className="  h-12 flex items-center  justify-center hover:bg-gray-100 p-2  cursor-default hover:text-gray-800"
              >
                <h1>{option.name}</h1>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
