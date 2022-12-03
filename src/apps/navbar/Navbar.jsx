import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopNav from "./DesktopNav";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px");
  const navbarBackground = isTopOfPage ? "" : "bg-glass";

  return (
    <>
      <header
        className={` ${navbarBackground} z-40 w-full fixed top-0 left-0 py-6`}
      >
        <nav className="flex items-center justify-between mx-auto w-5/6">
          <h4 className="font-playfair text-3xl font-bold">LWHA</h4>
          {/* Desktop Nav <==> Mobile Nav */}
          {isAboveSmallScreens ? (
            <DesktopNav
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ) : (
            <button
              className="rounded-full bg-red p-2 cursor-pointer"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <FaBars />
            </button>
          )}
        </nav>
      </header>
      {!isAboveSmallScreens && isMenuToggle && (
        <Sidebar
          setIsMenuToggle={setIsMenuToggle}
          isMenuToggle={isMenuToggle}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
    </>
  );
};

export default Navbar;
