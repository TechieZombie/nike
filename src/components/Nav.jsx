import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="text-slate-gray leading-normal text-lg"
                href="item.href">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <img
          src={hamburger}
          alt="hamburger "
          className="h-5 w-5 hidden max-lg:block"
        />
      </nav>
    </header>
  );
};

export default Nav;
