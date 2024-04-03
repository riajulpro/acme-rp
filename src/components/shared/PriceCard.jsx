const PriceCard = ({ price, cpu, storage, ram }) => {
  return (
    <div className="shadow-lg group cursor-pointer bg-white rounded-[12px] px-10 py-5 flex justify-between items-center border border-gray-200 hover:border-cardBlue">
      <p>
        <span className="text-[32px] font-bold text-primaryColor">
          ${price}
        </span>
        <span className="text-bannerText text-[16px]">/mo</span>
      </p>
      <ul className="flex gap-3">
        <li>{cpu}</li>
        <li className="border-x px-3">{ram}</li>
        <li>{storage}</li>
      </ul>
      <div className="h-5 w-5 rounded-full bg-primaryColor group-hover:bg-cardBlue" />
    </div>
  );
};

export default PriceCard;
