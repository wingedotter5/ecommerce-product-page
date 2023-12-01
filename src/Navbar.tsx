import { useState } from "react";

import MobileMenu from "./MobileMenu";
import User from "./components/User";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className="flex flex-wrap items-center justify-between border-b border-grayish-blue p-5">
      <div className="flex flex-wrap items-center gap-16">
        <div className="flex flex-wrap items-center gap-3">
          <svg
            className="cursor-pointer sm:hidden"
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleMenu}
          >
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
          <h2 className="text-4xl font-bold text-black">
            <a href="#">sneakers</a>
          </h2>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex flex-wrap items-center gap-8 text-xl text-dark-grayish-blue">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <User />
      </div>
      {showMenu && <MobileMenu toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Navbar;
