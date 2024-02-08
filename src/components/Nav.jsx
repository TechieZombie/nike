import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={100} height={23} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className="text-gray-500" href="item.href">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <img
          src={hamburger}
          alt="hamburger "
          className="h-5 w-5  hidden md:block"
        />
      </nav>
    </header>
  );
};

export default Nav;
