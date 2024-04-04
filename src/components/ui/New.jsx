import Button from "../shared/Button";
import { FaAngleRight } from "react-icons/fa";

const New = () => {
  return (
    <section className="flex flex-wrap md:flex-row justify-center items-center gap-2 py-2">
      <button className="bg-secondaryColor text-[12px] font-medium py-[5px] px-[10px] rounded-full text-lightText">
        🎉New
      </button>
      <h1 className="font-medium text-[13.67px]">
        Get 2 months free with annual plans!
      </h1>
      <Button className="flex items-center justify-center gap-3">
        Claim Promotion <FaAngleRight />
      </Button>
    </section>
  );
};

export default New;
