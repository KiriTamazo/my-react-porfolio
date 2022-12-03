import React, { useState } from "react";
import { socialLinks } from "../data/data";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {socialLinks.map((link, i) => {
        return (
          <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            key={i}
            href={link.to}
            className={`hover:-translate-y-2 transition duration-500 text-2xl rounded-sm  p-1`}
            style={{ backgroundColor: link.color }}
            target="_blank"
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
