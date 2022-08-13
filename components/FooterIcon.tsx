import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSquareFacebook,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterIcon() {
  return (
    <>
      <div className=" outline-1 outline-blue-500 cursor-pointer outline-offset-2 hover:outline w-7 h-7 rounded-full bg-blue-500 ml-3 flex justify-center items-center">
        <FontAwesomeIcon
          className=" w-4 h-4"
          icon={faSquareFacebook}
          color="#f9fafb"
        />
      </div>
      <div className=" outline-1 outline-purple-500 cursor-pointer outline-offset-2 hover:outline w-7 h-7 rounded-full bg-purple-500 ml-3 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faInstagram}
          className=" h-4 w-4"
          color="#f9fafb"
        />
      </div>
      <div className="outline-1 outline-yellow-400 cursor-pointer outline-offset-2 hover:outline w-7 h-7 rounded-full bg-yellow-400 ml-3 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faSnapchat}
          className=" h-4 w-4 "
          color="#f9fafb"
        />
      </div>
    </>
  );
}
