import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" passHref>
        <h4 className="flex h-[35px] w-[253px] items-center text-black">
          <span className="relative flex h-[35px] w-[49px] items-center justify-center text-[32px] font-extrabold">
            U
            <span className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] w-[60%] bg-black"></span>
          </span>
          <span className="w-[197px] text-[20px] font-semibold uppercase sm:h-[35px] sm:text-[28px]">
            Unique Tech
          </span>
        </h4>
      </Link>
    </div>
  );
};

export default Logo;
