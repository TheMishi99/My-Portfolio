import { useEffect, useState } from "react";
import type { CustomSelectOption, Link } from "../../typings/my-types";
import Navbar from "../Navbar";
import GamerCat from "/Gamer-Cat.jpg"
import { SpainFlagIcon, UnitedStatesFlagIcon } from "../../utils/BrandsIcons";
import CustomSelect from "../CustomSelect";

function Header() {
  const [navItems, setNavItems] = useState<Array<Link>>([]);
  const [languageOptions] = useState<Array<CustomSelectOption>>([{
    icon: <UnitedStatesFlagIcon height={20} width={20} />,
    title: "English",
    value: "en"
  }, {
    icon: <SpainFlagIcon height={20} width={20} />,
    title: "Spanish",
    value: "es"
  }]);

  useEffect(() => {
    setNavItems([
      { title: "About Me", to: "#about-me" },
      { title: "My Projects", to: "#my-projects" },
      { title: "Contact Me", to: "#contact-me" },
    ]);
  }, []);

  return (
    <header
      id="header"
      className="w-full flex flex-row flex-wrap justify-center align-middle gap-3 p-2 relative"
    >
      <a href="/" className="aspect-square rounded-full w-[150px]">
        <img src={GamerCat} alt="Avatar" className="w-full rounded-full" />
      </a>

      <Navbar items={navItems} />
      <div className="absolute top-0 right-0 flex justify-center items-center p-2 gap-2" title="Change Language">
        <p className="text-sm">Not Working Yet</p>
        <CustomSelect options={languageOptions} />
      </div>
    </header>
  );
}

export default Header;
