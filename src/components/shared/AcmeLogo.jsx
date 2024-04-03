import Image from "next/image";

const AcmeLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image src="/logo.png" alt="Logo" height={48} width={48} />
      <div>
        <h3 className="text-[16px] text-primaryColor font-bold">acme.com</h3>
        <h4 className="text-[12px] text-bannerText font-bold">By acme.com</h4>
      </div>
    </div>
  );
};

export default AcmeLogo;
