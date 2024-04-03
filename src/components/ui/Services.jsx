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
    <section className="flex p-12 justify-center items-center gap-6">
      <h1 className="text-[24px] font-semibold">Our Services:</h1>
      <Button className="flex items-center justify-center gap-3">
        <First /> Services
      </Button>
      <Button className="flex items-center justify-center gap-3">
        <Second /> Services
      </Button>
      <Button className="flex items-center justify-center gap-3">
        <Third /> Services
      </Button>
      <Button className="flex items-center justify-center gap-3">
        <Fourth /> Services
      </Button>
      <Button className="flex items-center justify-center gap-3">
        <Fifth /> Services
      </Button>
    </section>
  );
};

export default Services;