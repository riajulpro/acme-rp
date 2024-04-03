import {
  Activation,
  Fifth,
  Finger,
  Headphone,
  Location,
  Mouse,
  Timer,
  Windows,
} from "@/utils/icons/primary-icons";
import ActionButton from "../shared/ActionButton";
import AlignCenter from "../shared/AlignCenter";
import PriceCard from "../shared/PriceCard";
import { FiArrowRightCircle, FiArrowRight } from "react-icons/fi";
import AcmeLogo from "../shared/AcmeLogo";

const Pricing = () => {
  return (
    <section className="p-12">
      <h1 className="text-[32px] font-bold text-primaryColor mb-3">
        Our Pricing
      </h1>
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-[10px]">
          <div className="flex items-center gap-6 mb-12">
            <ActionButton variant="primary">
              Get 2 months free (switch to yearly)
            </ActionButton>
            <AlignCenter textSize="text-[14px]">
              Compare <FiArrowRightCircle className="text-bannerText" />
            </AlignCenter>
          </div>
          <PriceCard
            price="4"
            cpu="1 vCPU"
            ram="1 GB DDR4 RAM"
            storage="60 GB NVMe Storage"
          />
          <PriceCard
            price="17"
            cpu="2 vCPU"
            ram="2 GB DDR4 RAM"
            storage="60 GB NVMe Storage"
          />
          <PriceCard
            price="47"
            cpu="4 vCPU"
            ram="4 GB DDR4 RAM"
            storage="320 GB NVMe Storage"
          />
          <PriceCard
            price="77"
            cpu="8 vCPU"
            ram="12 GB DDR4 RAM"
            storage="500 GB NVMe Storage"
          />
        </div>
        <div className="lg:min-w-[356px] bg-white rounded-[12px] border p-8 flex flex-col gap-[6px] shadow-lg">
          <div className="mb-8">
            <AcmeLogo />
          </div>
          <AlignCenter>
            <Fifth /> AMD Ryzen Processors
          </AlignCenter>
          <AlignCenter>
            <Timer />
            1-10 GBps Network
          </AlignCenter>
          <AlignCenter>
            <Mouse /> 24/7 access to control panel
          </AlignCenter>
          <AlignCenter>
            <Windows />
            Windows or Linux
          </AlignCenter>
          <AlignCenter>
            <Headphone />
            24/7 support
          </AlignCenter>
          <AlignCenter>
            <Location />
            London & Tokyo data centers
          </AlignCenter>
          <AlignCenter>
            <Finger />
            Military grade encryption
          </AlignCenter>
          <AlignCenter>
            <Activation />
            Instant activation
          </AlignCenter>
          <div className="mt-auto">
            <ActionButton
              className="flex items-center justify-between gap-10 w-full"
              variant="primary"
            >
              Deploy Server
              <FiArrowRight />
            </ActionButton>
          </div>
        </div>
      </div>
      <div className="text-bannerText text-[14px] text-center mt-[30px]">
        *All pricing is in USD and renews automatically unless cancelled.
      </div>
    </section>
  );
};

export default Pricing;
