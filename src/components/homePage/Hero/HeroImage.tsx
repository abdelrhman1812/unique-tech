import Image from "next/image";
import heroImg from "../../../../public/assets/heroImg.png";

const HeroImage = () => {
  return (
    <div className="w-full md:w-[439px] h-auto flex justify-center my-10 md-0">
      <Image
        src={heroImg}
        alt="Unique Tech Hero Image"
        width={439}
        height={427}
        layout="intrinsic"
      />
    </div>
  );
};

export default HeroImage;
