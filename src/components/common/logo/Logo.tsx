const Logo = () => {
  return (
    <div className="logo">
      <h4 className="text-black flex items-center w-[253px] h-[35px]">
        <span className="w-[49px] h-[35px] text-[32px] font-extrabold relative flex items-center justify-center">
          U
          <span className="absolute bottom-0 left-0 right-0 bg-black w-[90%] mx-auto h-[3px]"></span>
        </span>
        <span className="w-[197px] h-[35px] text-[28px] font-semibold uppercase">
          Unique Tech
        </span>
      </h4>
    </div>
  );
};

export default Logo;
