const PriceCard = ({ price, cpu, storage, ram }) => {
  return (
    <div className="shadow-lg group cursor-pointer bg-white rounded-[12px] px-6 py-5 flex justify-between items-center gap-6 border border-gray-200 hover:border-cardBlue h-[65px]">
      <p className="mr-6">
        <span className="text-[32px] font-bold text-primaryColor">
          ${price}
        </span>
        <span className="text-bannerText text-[16px]">/mo</span>
      </p>
      <ul className="flex gap-2">
        <li className="text-[14px] leading-[21px]">{cpu}</li>
        <li className="text-[14px] leading-[21px] border-x px-3">{ram}</li>
        <li className="text-[14px] leading-[21px]">{storage}</li>
      </ul>
      <div className="h-5 w-5 rounded-full bg-primaryColor group-hover:bg-cardBlue" />
    </div>
  );
};

export default PriceCard;
