import { links } from "../data/data";
import { Link as Links, scrollSpy, scroller } from "react-scroll";
import { useEffect } from "react";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  const x = scroller.getActiveLink();
  useEffect(() => {
    console.log(x);
  }, [window.scroll]);
  return (
    <div className="flex flex-col gap-6 fixed top-[45%] right-7">
      {links.map((link, i) => {
        const lowerCaseLink = link.toLowerCase();

        return (
          <Links
            key={i}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            activeClass={
              "relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]"
            }
            className={`bg-dark-grey
          hover:text-yellow transition-all duration-500 cursor-w-3 h-3 rounded-full
          `}
            to={`${lowerCaseLink}`}
            // onClick={() => setSelectedPage(lowerCasePage)}
          ></Links>
          // <AnchorLink
          //   key={i}
          //   className={`${
          //     selectedPage === lowerCaseLink ? selectedStyles : "bg-dark-grey"
          //   } hover:text-yellow transition-all duration-500 `}
          //   href={`#${lowerCaseLink}`}
          //   onClick={() => setSelectedPage(lowerCaseLink)}
          // />
        );
      })}
    </div>
  );
};

export default DotGroup;
