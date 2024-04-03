import { LogoSymbol } from "@/utils/icons/primary-icons";
import ActionButton from "../shared/ActionButton";

const Banner = () => {
  return (
    <section className="lg:min-h-[450px] bg-banner-bg object-cover bg-white flex items-center justify-center">
      <div>
        <h1 className="text-primaryColor text-center text-[40px] font-medium max-w-4xl">
          Lorem Ipsum.{" "}
          <span className="text-bannerText">
            Testing, testing, and testing on our fast, low latency hardware.
          </span>
        </h1>
        <div className="flex justify-center gap-6 mt-[32px]">
          <ActionButton
            className="flex items-center gap-3 justify-center"
            variant="primary"
          >
            <LogoSymbol /> Lorem Ipsum
          </ActionButton>
          <ActionButton>Lorem Ipsum</ActionButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
