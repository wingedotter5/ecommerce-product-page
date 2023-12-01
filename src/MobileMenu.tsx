const MobileMenu = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div
      className=" fixed inset-0 z-40 min-h-screen min-w-full bg-[rgba(0,0,0,0.7)]"
      onClick={toggleMenu}
    >
      <div
        className="min-h-screen max-w-[70%] bg-white p-5"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="mb-5 cursor-pointer font-bold" onClick={toggleMenu}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-5">
          <li className="text-xl">
            <a href="#">Collections</a>
          </li>
          <li className="text-xl">
            <a href="#">Men</a>
          </li>
          <li className="text-xl">
            <a href="#">Women</a>
          </li>
          <li className="text-xl">
            <a href="#">Contact</a>
          </li>
          <li className="text-xl">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
