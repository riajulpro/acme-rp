"use client";

import { LogoSymbol } from "@/utils/icons/primary-icons";
import { FaBars } from "react-icons/fa";
import AcmeLogo from "../shared/AcmeLogo";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [bar, setBar] = useState(false);

  const navItems = (
    <>
      <ul
        className={`text-[14px] leading-[20px] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-5`}
      >
        <li className="flex items-center gap-2 py-3 lg:py-0 border-b lg:border-none border-borderColor">
          Pricing <MdKeyboardArrowDown />
        </li>
        <li className="py-3 lg:py-0 border-b lg:border-none border-borderColor">
          Compatibility
        </li>
        <li className="py-3 lg:py-0 border-b lg:border-none border-borderColor">
          Features
        </li>
        <li className="py-3 lg:py-0 border-b lg:border-none border-borderColor">
          FAQ
        </li>
        <li className="py-3 lg:py-0 border-b lg:border-none border-borderColor">
          Support
        </li>
      </ul>
    </>
  );

  const navbarRight = (
    <div className="mt-5 lg:mt-0 flex justify-center lg:justify-normal items-center gap-2 text-[14px]">
      <button>Login</button>
      <div className="border rounded-[6px] flex items-center gap-1 px-[10px] py-[5px]">
        <button>Start Now</button>
        <button className="bg-primaryColor text-white rounded-[6px] py-[5px] px-[10px] flex items-center justify-center gap-3 text-[14px]">
          <LogoSymbol /> Lorem Ipsum
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[56px] lg:py-3 px-3 lg:px-[32px] gap-10">
        <AcmeLogo />
        <div className="hidden lg:block mr-auto pl-10">{navItems}</div>
        <div className="hidden lg:block">{navbarRight}</div>

        {/* for mobile and tablet */}
        <button className="inline lg:hidden" onClick={() => setBar(!bar)}>
          <FaBars />
        </button>

        {bar ? (
          <div className="fixed bg-white top-0 h-full w-full right-0 z-50 p-5">
            <div className="flex justify-between items-center font-semibold duration-300">
              Navigation{" "}
              <button
                onClick={() => setBar(false)}
                className="bg-gray-200 p-2 rounded-sm"
              >
                <RxCross2 />
              </button>
            </div>
            <h1 className="font-semibold mt-5">Nav Items:</h1>
            {navItems}
            {navbarRight}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
