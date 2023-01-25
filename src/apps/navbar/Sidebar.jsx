import { links } from "../../data/data";
import Link from "./Link";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = ({
  setIsMenuToggle,
  isMenuToggle,
  setSelectedPage,
  selectedPage,
}) => {
  return (
    <aside
      className={`fixed right-0 top-0 h-full w-[300px] ${
        isMenuToggle === true ? "translate-x-[0]" : "translate-x-[100%]"
      } bg-[#100f38] transition-all duration-500 filter-none z-[1111]`}
    >
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
          <FaTimes className="text-2xl text-white" />
        </button>
      </div>
      {/* Menu item */}
      <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
        {links.map((link, i) => (
          <Link
            activeClass="text-blue"
            sidebar
            key={i}
            page={link}
            selectedPage={selectedPage}
            setSelectedPage={selectedPage}
          />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
