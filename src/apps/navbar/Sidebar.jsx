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
  console.log("Sidebar");

  return (
    <aside
      className={`fixed right-0 top-0 h-full ${
        isMenuToggle === true ? "w-[300px]" : "w-[0]"
      } bg-grey transition-all duration-500 filter-none z-[1111]`}
    >
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
          <FaTimes className="text-2xl text-slate-900" />
        </button>
      </div>
      {/* Menu item */}
      <div className="flex flex-col gap-10 ml-[33%] text-2xl text-slate-900">
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
