import data from "../../../app-data/app-data.json";
import DiscoverMore from "./DiscoverMore";

export default function DrawerWomen() {
  return (
    <>
      <div>
        <ul>
          <li>
            <div
              className=" m-auto w-full h-12 items-center "
              style={{ fontFamily: "Futura PT Demi" }}
            >
              <a
                className=" tracking-wider uppercase  flex font-bold bg-no-repeat bg-[url(https://images.asos-media.com/navigation/ww_homebuttontemplate_1746711?&$n_320w$)] w-full  m-auto items-center p-2  bg-[length:100%_100%] h-full"
                style={{ width: "calc(100% - 25px)", marginTop: "calc(15px)" }}
              >
                <p> Home</p>
              </a>
            </div>
          </li>
          <li>
            <div
              className=" m-auto w-full h-[5.5rem] items-center "
              style={{ fontFamily: "Futura PT Demi" }}
            >
              <a
                className=" tracking-wider uppercase flex flex-col font-bold bg-no-repeat bg-[url(https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$)] w-full  m-auto p-4  bg-[length:100%_100%] h-full"
                style={{ width: "calc(100% - 25px)", marginTop: "calc(15px)" }}
              >
                <p
                  className=" text-lg"
                  style={{ fontFamily: "Futura PT Demi" }}
                >
                  Up to 80% off!
                </p>
                <p
                  className=" text-lg"
                  style={{ fontFamily: "Futura PT Light" }}
                >
                  {" "}
                  Don't Miss Out
                </p>
              </a>
            </div>
          </li>
          <li>
            <ul>
              {data &&
                data.women.map((women) => (
                  <li key={women.id}>
                    <div
                      className=" m-auto w-full h-[5.5rem] items-center "
                      style={{ fontFamily: "Futura PT Demi" }}
                    >
                      <a
                        className={
                          "tracking-wider uppercase  flex font-bold bg-no-repeat  w-full  m-auto items-center p-2  bg-[length:100%_100%] h-full px-4"
                        }
                        style={{
                          width: "calc(100% - 25px)",
                          marginTop: "calc(15px)",
                          backgroundImage: `url(${women.bgUrl})`,
                        }}
                      >
                        <p>{women.name}</p>
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </li>

          <li>
            {/* discover more */}
            <DiscoverMore bg="https://images.asos-media.com/navigation/ww_mobilebanner_marketplace_030222?&$n_320w$" />
          </li>
        </ul>
      </div>
    </>
  );
}
