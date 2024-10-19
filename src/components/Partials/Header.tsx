import { useEffect, useState } from "react";
import type { Link } from "../../my-types";
import Navbar from "../Navbar";
import GamerCat from "/Gamer-Cat.jpg"

function Header() {
  const [navItems, setNavItems] = useState<Array<Link>>([]);

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
      className="w-full flex flex-row flex-wrap justify-center align-middle gap-3 p-2"
    >
      <a href="/" className="aspect-square rounded-full w-[150px]">
        <img src={GamerCat} alt="Avatar" className="w-full rounded-full" />
      </a>

      <Navbar items={navItems} />
    </header>
  );
}

export default Header;
