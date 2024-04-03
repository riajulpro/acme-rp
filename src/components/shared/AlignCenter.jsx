const AlignCenter = ({ children, textSize }) => {
  return (
    <div
      className={`flex items-center gap-3 ${
        textSize ? textSize : "text-[12px]"
      }`}
    >
      {children}
    </div>
  );
};

export default AlignCenter;
