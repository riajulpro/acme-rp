import { LogoSymbol } from "@/utils/icons/primary-icons";
import AcmeLogo from "../shared/AcmeLogo";
import { IoMdArrowDropright } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="bg-primaryColor text-white flex justify-center items-center gap-5 p-3">
        <div className="border-r border-slate-400 pr-5">Restocked Today</div>
        <div className="flex items-center gap-3">
          Read more <IoMdArrowDropright />
        </div>
      </div>
      <div className="flex justify-between items-center py-[12px] px-[32px] gap-10 bg-white">
        <AcmeLogo />
        <ul className="flex items-center gap-5 mr-auto">
          <li>Pricing</li>
          <li>Compatibility</li>
          <li>Features</li>
          <li>FAQ</li>
          <li>Support</li>
        </ul>
        <div className="flex items-center gap-3">
          <button>Login</button>
          <div className="border rounded-[6px] flex items-center gap-3 px-[10px] py-[5px]">
            <button>Start Now</button>
            <button className="bg-primaryColor text-white rounded-[6px] py-[5px] px-[10px] flex items-center justify-center gap-3 text-[14px]">
              <LogoSymbol /> Lorem Ipsum
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
