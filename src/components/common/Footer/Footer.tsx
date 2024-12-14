import FooterHead from "./FooterHead";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <section className="container text-center">
        <FooterHead />
        <FooterLinks />
        <SocialIcons />
      </section>
    </footer>
  );
};

export default Footer;
