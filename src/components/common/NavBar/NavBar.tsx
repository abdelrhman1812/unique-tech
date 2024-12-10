import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className=" shadow-custom py-10 ">
      <div className="container  flex justify-between items-center ">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
