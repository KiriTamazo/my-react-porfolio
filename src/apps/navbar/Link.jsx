import { Link as Links } from "react-scroll";
const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  activeClass = "text-yellow",
  sidebar,
}) => {
  const lowerCasePage = page?.toLowerCase();

  return (
    <>
      <Links
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        activeClass={activeClass}
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
          hover:text-yellow ${
            sidebar && "hover:text-blue"
          } transition-all duration-500 cursor-pointer text-xl
          `}
        to={`${lowerCasePage}`}
      >
        {page}
      </Links>
    </>
  );
};
export default Link;
