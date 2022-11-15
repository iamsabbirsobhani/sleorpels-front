export default function UserCard() {
  return (
    <div className=" w-[325px]  relative ml-auto mb-3 border-[1px] border-[#ddd]">
      <div className=" relative bg-[#eee] h-[50px] box-border flex justify-between items-center">
        <div className=" flex justify-between items-center pl-[20px]">
          <button className=" underline underline-offset-1 text-gray-800  hover:text-[#007aff] duration-150 transition-all">
            Sign In
          </button>
          <div className=" ml-3 mr-3 w-[1px] h-3 bg-gray-800"></div>
          <button className=" underline underline-offset-1 text-gray-800  hover:text-[#007aff] duration-150 transition-all">
            Join
          </button>
        </div>
        <div className="close mr-3 cursor-pointer hover:text-[#007aff] duration-150 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div className=" bg-[#fff]">
        <ul>
          <li className="p-2 ml-6 h-[50px] hover:text-[#007aff] duration-150 transition-all cursor-pointer">
            <div className=" flex items-center">
              <div className="icon mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 6A5 5 0 115 6a5 5 0 0110 0zm3.725 13H1.275c1.064-2.895 4.54-5 8.725-5 4.186 0 7.66 2.105 8.725 5z"
                  />
                </svg>
              </div>
              <div className="">My Account</div>
            </div>
          </li>

          {/* My orders */}
          <li className="p-2 ml-6 h-[50px] hover:text-[#007aff] duration-150 transition-all cursor-pointer">
            <div className=" flex items-center">
              <div className="icon mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <div className="">My Orders</div>
            </div>
          </li>

          {/* return information */}
          <li className="p-2 ml-6 h-[50px] hover:text-[#007aff] duration-150 transition-all cursor-pointer">
            <div className=" flex items-center">
              <div className="icon mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="">Returns Information</div>
            </div>
          </li>
          {/* contact preferences */}
          <li className="p-2 ml-6 h-[50px] hover:text-[#007aff] duration-150 transition-all cursor-pointer">
            <div className=" flex items-center">
              <div className="icon mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <div className="">Contact Preferences</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
