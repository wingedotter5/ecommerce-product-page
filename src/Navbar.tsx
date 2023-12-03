import { ReactNode, useState } from "react";

import MobileMenu from "./MobileMenu";
import User from "./components/User";
import Cart from "./components/Cart";
import { useAppSelector } from "./hooks";
import CartItem from "./components/CartItem";

const NavItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="relative after:inset-0 after:top-[calc(100%-5px)] after:h-[5px] after:w-full after:bg-orange hover:after:absolute">
      <a className="block py-5" href="#">
        {children}
      </a>
    </li>
  );
};

const Navbar = () => {
  const items = useAppSelector((state) => state.cart.items);

  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = () => setShowCart((prevState) => !prevState);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className="relative flex flex-wrap items-center justify-between border-b border-grayish-blue p-5 sm:py-0">
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
            {["Collections", "Men", "Women", "About", "Contact"].map((item) => (
              <NavItem>{item}</NavItem>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-5">
        <Cart toggleShowCart={toggleShowCart} />
        <User />
      </div>

      {showMenu && <MobileMenu toggleMenu={toggleMenu} />}

      {showCart && (
        <div className="absolute left-0 right-0 top-[110%] z-40 mx-1 rounded-md bg-white shadow-lg sm:left-auto sm:right-0 sm:mx-0 sm:w-96">
          <div className="border-b border-grayish-blue p-5">
            <h3 className="font-semibold">Cart</h3>
          </div>
          <div className="flex flex-col gap-3 p-5">
            {items.length > 0 ? (
              <>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.id}>
                      <CartItem item={item} />
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-lg bg-orange p-3 font-semibold text-white">
                  Checkout
                </button>
              </>
            ) : (
              <p className="flex min-h-[100px] items-center justify-center">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
