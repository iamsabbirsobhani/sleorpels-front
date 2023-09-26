import FooterIcon from '../../FooterIcon';
import footer from '../../../app-data/app-data.json';
import { DetailedHTMLProps, useState, useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAccordionItemId,
  delAccordionItem,
} from '../../../features/global/globalSlice';
import {
  faPlus,
  faMinus,
  faUser,
  faCircleQuestion,
  faBox,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import layer from '../../../public/layer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function DrawerFooter() {
  const itemId = useSelector((state: any) => state.global.accordionItemId);
  const flag = useSelector((state: any) => state.global.flagUrl);
  const dispatch = useDispatch();

  const handleAccord = (id: number) => {
    if (!itemId.includes(id)) {
      dispatch(setAccordionItemId(id));
    } else {
      dispatch(delAccordionItem(id));
    }
  };

  return (
    <>
      <div className=" w-full  mt-3 ">
        <div className="border-t-[.75rem] flex items-center justify-evenly w-full h-16 bg-white ">
          <FooterIcon />
        </div>

        <div className="  flex items-center bg-[#eee] h-14 text-[#666] p-3">
          <a href="#" className=" underline hover:text-sky-500">
            Sign in
          </a>

          <div className=" divide-line"></div>
          <a href="#" className=" underline hover:text-sky-500">
            Join
          </a>
        </div>

        {/* user-data */}
        <div className=" flex bg-[#f8f8f8] p-3 px-5">
          <div className="">
            {footer['user-data'].map((data: any) => (
              <div
                key={data.id}
                className="flex  svg-cls items-center hover:text-sky-500 cursor-pointer text-lg h-12"
              >
                <div className=" mr-3">
                  {data.name === 'My Account' ? (
                    <svg
                      className="sgv w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 47"
                      fill="black"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <circle
                            cx="17.5"
                            cy="11.5"
                            r="10.5"
                            strokeMiterlimit="10"
                            strokeWidth="3"
                          />
                          <path
                            d="M22.59,26H13.76A12.76,12.76,0,0,0,1,38.76V46H35V38.41A12.41,12.41,0,0,0,22.59,26Z"
                            strokeMiterlimit="10"
                            strokeWidth="3"
                          />
                        </g>
                      </g>
                    </svg>
                  ) : data.name === 'My Orders' ? (
                    <FontAwesomeIcon icon={faBox} className=" w-5 h-5" />
                  ) : data.name === 'Returns Information' ? (
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className=" w-5 h-5"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faMessage} className=" w-5 h-5" />
                  )}
                </div>
                <div className="">
                  <h1 className=" text-gray-500">{data.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* options accordion */}
        <div className=" accordion ">
          <div>
            {footer.options.map((item) => (
              <div key={item.id}>
                <div
                  style={{ fontFamily: 'Futura PT Book' }}
                  className=" text-gray-500 text-base collapse-btn w-full  flex items-center bg-[#eee] justify-between cursor-pointer h-10 border-b-[1px] border-[#ddd] p-3"
                  onClick={() => handleAccord(item.id)}
                >
                  <h1 className=" text-black">{item.name}</h1>
                  <div className=" text-gray-500 font-light">
                    {itemId.includes(item.id) ? (
                      <FontAwesomeIcon
                        icon={faMinus}
                        color="black"
                        className=" w-3 h-3"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faPlus}
                        className=" w-3 h-3"
                        color="black"
                      />
                    )}
                  </div>
                </div>
                {/* option details */}
                <div
                  className=" bg-[#f8f8f8] px-3"
                  style={{
                    display: itemId.includes(item.id) ? 'block' : 'none',
                    height: itemId.includes(item.id) ? '100%' : '0',
                  }}
                >
                  {item.option.map((option, index) => (
                    <p
                      key={index}
                      style={{ fontFamily: 'Futura PT Light' }}
                      className=" hover:text-sky-500 cursor-pointer h-12 p-[0.70rem]"
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className=" bg-[#eee]  p-3 flex items-center">
              <p className=" mr-5">You&apos;re in: </p>
              {flag && (
                <Image
                  src={flag.flag}
                  width={25}
                  height={25}
                  className=" rounded-full hover:outline outline-1  outline-offset-2 outline-blue-500"
                  alt="flag"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
