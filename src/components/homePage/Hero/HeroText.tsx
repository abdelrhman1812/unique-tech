const HeroText = () => {
  return (
    <div className="w-full md:w-[700px] h-auto flex flex-col space-y-6">
      <div className="w-[94px] py-[40px]">
        <span className="w-[94px] h-2 rounded bg-black block"></span>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          We make creative Things everyday!
        </h1>
        <p className="text-[24px] text-gray-600 opacity-70 mb-6">
          Unique tech is where your imagination and our expertise converge to
          create design solutions that elevate your brand and set you apart from
          the competition.
        </p>
        <button className="bg-bgBtn w-[246px] h-[66px] p-[10px] rounded text-white font-bold hover:bg-bgBtnHover transition">
          LET’S TALK
        </button>
      </div>
    </div>
  );
};

export default HeroText;
