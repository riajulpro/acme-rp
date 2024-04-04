import {
  Fifth,
  First,
  Fourth,
  Second,
  Third,
} from "@/utils/icons/primary-icons";
import Button from "../shared/Button";

const Services = () => {
  return (
    <section className="my-10 lg:my-0 flex flex-col lg:flex-row lg:flex-nowrap p-3 lg:py-11 lg:px-12 justify-center items-center gap-3 lg:gap-1 border-b border-borderColor">
      <h1 className="text-[24px] font-semibold leading-[32px] tracking-[0.96px]">
        Our Servers:
      </h1>
      <div className="flex items-center gap-4 flex-wrap">
        <Button className="flex items-center justify-center gap-3">
          <First /> Our Services
        </Button>
        <Button className="flex items-center justify-center gap-3">
          <Second /> Our Services
        </Button>
        <Button className="flex items-center justify-center gap-3">
          <Third /> Our Services
        </Button>
        <Button className="flex items-center justify-center gap-3">
          <Fourth /> Our Services
        </Button>
        <Button className="flex items-center justify-center gap-3">
          <Fifth /> Our Services
        </Button>
      </div>
    </section>
  );
};

export default Services;
