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
    <section className="my-10 lg:my-0 lg:mt-11 p-3 lg:p-8">
      <h1 className="text-[32px] font-bold text-primaryColor mb-3">
        Our Pricing
      </h1>
      <div className="flex flex-col lg:flex-row  gap-4 lg:gap-8">
        <div className="flex-1 flex flex-col gap-3 lg:gap-[10px]">
          <div className="flex flex-wrap items-center gap-6 mb-3 lg:mb-9">
            <ActionButton variant="primary" padding="lg:px-[14px]">
              Get 2 months free (switch to yearly)
            </ActionButton>
            <AlignCenter textSize="text-[14px]">
              Compare <FiArrowRightCircle className="text-bannerText" />
            </AlignCenter>
          </div>
          <PriceCard
            price="4"
            cpu="1 vCPU"
            ram={
              <>
                <span className="font-semibold">1 GB</span> DDR4 RAM
              </>
            }
            storage="60 GB NVMe Storage"
          />
          <PriceCard
            price="77"
            cpu="2 vCPU"
            ram={
              <>
                <span className="font-semibold">2 GB</span> DDR4 RAM
              </>
            }
            storage="60 GB NVMe Storage"
          />
          <PriceCard
            price="17"
            cpu="4 vCPU"
            ram={
              <>
                <span className="font-semibold">4 GB</span> DDR4 RAM
              </>
            }
            storage="320 GB NVMe Storage"
          />
          <PriceCard
            price="47"
            cpu="8 vCPU"
            ram={
              <>
                <span className="font-semibold">12 GB</span> DDR4 RAM
              </>
            }
            storage="500 GB NVMe Storage"
          />
        </div>
        <div className="lg:min-w-[356px] bg-white rounded-[12px] border px-6 py-4 flex flex-col gap-[6px] shadow-lg">
          <div className="mb-6">
            <AcmeLogo />
          </div>
          <div className="flex flex-col gap-[6px]">
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
          </div>
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
