const Button = ({ children, className }) => {
  return (
    <button
      className={`border rounded-full py-[6px] px-[12px] min-h-[32px] max-w-[1080px] ${className} bg-white text-primaryColor`}
    >
      {children}
    </button>
  );
};

export default Button;
