import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHome, FaPlus, FaSearch, FaStar } from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import Logo from "../assets/disney-logo.png";
import HeaderItems from "./HeaderItems";

import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = [
    {
      name: "HOME",
      icon: FaHome,
    },
    {
      name: "SEARCH",
      icon: FaSearch,
    },
    {
      name: "PLUS",
      icon: FaPlus,
    },
    {
      name: "FAVORIES",
      icon: FaStar,
    },
    {
      name: "MOVIE",
      icon: PiTelevisionBold,
    },
    {
      name: "SERIES",
      icon: RiMovie2Line,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Logo disney +"
            className="max-w-[80px] object-cover"
          />
          <div className="hidden md:flex items-center gap-6">
            {menu.map((item) => (
              <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex md:hidden items-center gap-6">
            {menu.map(
              (item, index) =>
                index < 3 && (
                  <HeaderItems
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                  />
                )
            )}
          </div>
          <div className="relative md:hidden" onClick={handleMenu}>
            <HeaderItems name={""} Icon={BsThreeDotsVertical} />
            {menuOpen ? (
              <div className="absolute mt-3 z-[100] bg-[#060a12] border border-gray-700 px-6 py-3 flex flex-col gap-2 rounded-md">
                {menu.map(
                  (item, index) =>
                    index < 3 && (
                      <HeaderItems
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1714078254516-f7ff6ea91499?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User image"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </>
  );
}

export default Header;
