import ActionButton from "../shared/ActionButton";

const ReadyToProfit = () => {
  return (
    <section className="my-10 lg:my-0 flex flex-col lg:flex-row border-t border-borderColor">
      <div className="flex-1 p-3 lg:p-12">
        <h1 className="text-[24px] max-w-2xl text-bannerText">
          <span className="font-bold text-primaryColor">Ready to profit?</span>{" "}
          Start journaling your trades. Check out
          <span className="font-semibold text-primaryColor">
            {" "}
            VPS Lite
          </span> or <span className="text-cardBlue">VPS Pro</span> or{" "}
          <span className="text-cardBlue">VPS Max</span>
        </h1>
        <div className="flex items-center gap-1 lg:gap-4 mt-6">
          <ActionButton variant="primary">Deploy Now</ActionButton>
          <ActionButton>View Dedicated Servers</ActionButton>
        </div>
      </div>
      <div className="max-w-[358px] p-3 lg:p-12 border-t lg:border-l border-borderColor">
        <h1 className="text-bannerText mb-2 lg:mb-6">
          <span className="text-primaryColor font-semibold">Trial acme</span> to
          see how our performance and ease of use through our Control Panel.
        </h1>
        <ActionButton>Money Back Guarantee</ActionButton>
      </div>
    </section>
  );
};

export default ReadyToProfit;
