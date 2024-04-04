const Button = ({ children, className }) => {
  return (
    <button
      className={`text-[14px] border rounded-full py-[6px] px-[10px] min-h-[40px] max-w-[1080px] ${className} bg-white text-primaryColor`}
    >
      {children}
    </button>
  );
};

export default Button;
