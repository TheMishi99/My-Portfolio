import { useEffect, useState } from "react";
import type { Link } from "../typings/my-types";

interface NavbarProps {
  items: Array<Link>;
}

export default function Navbar({ items }: NavbarProps) {
  const [showMobileNavBar, setShowMobileNavBar] = useState<boolean>(
    window.innerWidth < 768
  );
  const [showBurguerMenu, setShowBurguerMenu] = useState<boolean>(
    !showMobileNavBar
  );

  useEffect(() => {
    const handleResize = () => {
      setShowMobileNavBar(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onBurgerMenuButtonClick = () => {
    setShowBurguerMenu(!showBurguerMenu);
  };
  return (
    <nav className="w-full flex flex-row flex-wrap justify-center items-center">
      {showMobileNavBar ? (
        <>
          <button
            className="size-11 flex flex-row flex-wrap justify-center items-center bg-slate-800 rounded aspect-square cursor-pointer"
            id="burguer-menu"
            onClick={onBurgerMenuButtonClick}
          >
            <i className="fa-solid fa-bars self-center text-3xl"></i>
          </button>
          {showBurguerMenu && (
            <ul
              className={`w-full flex flex-row flex-wrap justify-center items-center py-2 gap-2${showBurguerMenu ? "scale-100" : "scale-0"
                } transition-all`}
            >
              {items.map((item, index) => {
                return (
                  <li
                    key={item.title + index}
                    className="w-full flex flex-row flex-wrap justify-center items-center p-1"
                  >
                    <a
                      href={item.to}
                      className="w-full flex justify-center items-center"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      ) : (
        <>
          <ul className="w-full flex flex-row flex-wrap justify-center items-center p-2 gap-2 transition-all">
            {items.map((item, index) => {
              return (
                <li
                  key={item.title + index}
                  className="w-[32%] max-w-[150px] flex flex-row flex-wrap justify-center items-center group"
                >
                  <a
                    href={item.to}
                    className="w-full flex justify-center items-center p-2 rounded-xl relative z-10 before:-z-10 before:absolute before:border-cyan-400 before:rounded-xl before:w-full before:h-full before:group-hover:border before:[transform:rotateY(90deg)] before:group-hover:[transform:rotateY(180deg)] before:[transition-property:all] before:[transition-duration:0.6s] before:[transition-timing-function:ease-in-out] before:group-hover:backdrop-blur"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </nav>
  );
}
