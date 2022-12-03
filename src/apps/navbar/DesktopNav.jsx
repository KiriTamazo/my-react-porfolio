import { links } from "../../data/data";
import Link from "./Link";

const DesktopNav = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex justify-between  sm:gap-10 md:gap-16 font-opensans text-sm font-semibold">
      {links.map((link, i) => (
        <Link
          key={i}
          page={link}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  );
};
export default DesktopNav;
