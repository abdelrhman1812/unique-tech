import CollaborateContent from "./Collaborate-content";
import CollaborateHead from "./Collaborate-head";

const Collaborate = () => {
  return (
    <section className="collaborate bg-black py-[80px] md:py-[140px]">
      <div className="container flex flex-col md:flex-row gap-y-[30px] md:gap-y-0 gap-x-[30px] md:gap-x-[55px]">
        <CollaborateHead />
        <CollaborateContent />
      </div>
    </section>
  );
};

export default Collaborate;
