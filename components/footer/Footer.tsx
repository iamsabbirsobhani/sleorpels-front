import Image from "next/image";
import FooterIcon from "../FooterIcon";
import footer from "../../app-data/app-data.json";
import { useSelector } from "react-redux";

export default function Footer() {
  const flag = useSelector((state: any) => state.global.flagUrl);

  return (
    <>
      <footer className="bg-[#eee] hidden lg:block xl:block 2xl:block relative z-10">
        <div className=" w-full h-14 border-t-[1px] border-gray-400/20  bg-white  flex justify-evenly items-center">
          <div className=" flex items-center justify-evenly w-1/5">
            <FooterIcon />
          </div>
          <div className=" mr-5 ml-5 w-[1px] h-6 bg-slate-500/50"></div>
          <div className=" flex justify-between items-center w-1/5 ">
            {footer["payment-methods"].map((payment) => (
              <div key={payment.id} className="mr-3 flex items-center">
                <Image src={payment.url} width={40} height={25} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-around mt-4">
          {footer.options.map((item) => (
            <div key={item.id}>
              <h1
                style={{ fontFamily: "Futura PT Bold" }}
                className=" text-gray-500 text-base"
              >
                {item.name}
              </h1>
              {item.option.map((option, index) => (
                <p
                  key={index}
                  style={{ fontFamily: "Futura PT Light" }}
                  className=" mt-3 mb-3"
                >
                  {option}
                </p>
              ))}
            </div>
          ))}
          <div className="">
            <h1>Shopping from: </h1>
            <div className=" flex items-center mt-3">
              <p className=" mr-5">You&apos;re in: </p>
              {flag && (
                <Image
                  src={flag.flag}
                  width={25}
                  height={25}
                  className=" rounded-full"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-2 bg-[#ddd] text-[#666]">
          <div>
            <p>© 2022 SLEORPELS</p>
          </div>
          <div className=" flex items-center">
            <p className=" mr-3 ml-3">Privacy & Cookies</p>
            <div className=" w-[1px] h-3 bg-gray-500"></div>
            <p className=" mr-3 ml-3">Ts&Cs</p>
            <div className=" w-[1px] h-3 bg-gray-500"></div>
            <p className=" ml-3">Accessibility</p>
          </div>
        </div>
      </footer>

      <footer
        style={{ fontFamily: "Futura PT Light" }}
        className=" bg-[#ddd] text-[#666] lg:hidden xl:hidden 2xl:hidden flex justify-between items-center p-3 text-sm"
      >
        <div>
          <p>© 2022 SLEORPELS</p>
        </div>
        <div className=" flex items-center">
          <p className=" mr-2">Privacy & Cookies</p>
          <div className=" h-6 w-[1px] bg-gray-400/30"></div>
          <p className=" ml-2">Ts&Cs</p>
        </div>
      </footer>
    </>
  );
}
