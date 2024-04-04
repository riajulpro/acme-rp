import { IoMdArrowDropright } from "react-icons/io";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="bg-primaryColor text-white flex justify-center items-center gap-5 p-3">
        <div className="border-r border-slate-400 pr-40 text-[12px]">
          Restocked Today
        </div>
        <div className="flex items-center gap-3 text-[12px]">
          Read more <IoMdArrowDropright />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
