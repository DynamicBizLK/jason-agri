import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showBg, handleShowBg] = useState(false);
  const [showMobileNav, handleShowMobileNav] = useState(false);

  const transitionNavbar = () => {
    window.pageYOffset > 100 ? handleShowBg(true) : handleShowBg(false);
  };

  useEffect(() => {
    handleShowBg;
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const handleMobileNav = () => {
    handleShowMobileNav(!showMobileNav);
  };

  const navItems = [
    {
      title: "Home",
      dest: "/",
    },
    {
      title: "About",
      dest: "/#about-us",
    },
    {
      title: "Products",
      dest: "/#products",
    },
    {
      title: "Developing Projects",
      dest: "/#projects",
    },
    {
      title: "Services",
      dest: "/#services",
    },
    {
      title: "Contact",
      dest: "/#contact",
    },
  ];

  return (
    <nav className="fixed left-0 right-0 z-10 text-white isolate">
      <div className={`bg-jasonred w-full h-24 fixed top-0 left-0 right-0 transition-opacity -z-10 ${showBg ? "opacity-100" : "opacity-0 ease-out duration-700"}`} />
      <div className="container max-w-6xl h-24 flex items-center justify-between gap-2 md:gap-4">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 372 298" className="h-10">
            <path
              fill="#fff"
              d="M55.113 256v41.34c-6.95-.07-10-.24-14.92-.56-4.48-.29-12.89-.94-23.45-2.41-6.59-.92-12.25-1.91-16.71-2.77.1-15.77-.11-27.8 0-43.56a35.861 35.861 0 0 0 11.74 5.36c1.58.35 2.87.6 4.11.79 2.25.35 4.17.67 5.45.73 1.28.06 2.88.37 4.39.52 2.62.26 5.133.433 7.54.52 2.37.09 4.19.11 5.3.12 7.3.04 14.38-.05 16.55-.08ZM65.663 297.5v-41.42a65.38 65.38 0 0 0 6.83 0c3-.18 5.19-.47 7.34-.74 3.4-.44 5.39-.83 5.91-.94.52-.11 2.2-.41 4.48-1 1.38-.39 2.55-.78 3.46-1.1.41-.18.85-.37 1.32-.55.86-.34 1.46-.52 1.83-.65a20.408 20.408 0 0 0 2.95-1.27 10.767 10.767 0 0 0 3.81-2.51 16.024 16.024 0 0 0 3.05-5.15c.48-1.1.82-2 1-2.72.18-.72.65-1.72 1-3a60.402 60.402 0 0 0 1.59-7.66c.24-1.38.62-3.53 1.12-6.22l.72-8.94 1-171.62c.11-14.24.11-28 .11-41.81h43.35v215.23a82.957 82.957 0 0 1-.8 16.09 72.04 72.04 0 0 1-4 15.9 64.9 64.9 0 0 1-11 19.13 72.55 72.55 0 0 1-15.14 13.58 86.622 86.622 0 0 1-12.15 6.8c-.91.42-4.65 2.16-9.95 4a120.35 120.35 0 0 1-17.94 4.78 103.439 103.439 0 0 1-19.89 1.79Z"
            />
            <path fill="#00A651" d="m177.213 52.44 26.56-.11 19.2-.08 31.38 55.08-46.89.19-30.25-55.08ZM231.003 169.81l20.56-.08 27.34-.1 38.83 70.39-49.57-.1-37.16-70.11Z" />
            <path fill="#fff" d="M371.093 44.4V0h-200.38v44.4h200.38ZM371.093 161.82v-44.4h-200.38v44.4h200.38ZM371.093 295.88v-44.4h-200.38v44.4h200.38Z" />
          </svg>
        </Link>

        <ul className="flex items-center gap-6 text-md sm:text-base sm:hidden">
          {navItems.map(({ title, dest }, index) => {
            return (
              <Link href={dest} key={index}>
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>

        <button className="hidden sm:block" onClick={() => handleMobileNav()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {showMobileNav && (
          <ul className="hidden text-lg absolute top-24 sm:flex flex-col w-screen bg-jasonred">
            {navItems.map(({ title, dest }, index) => {
              return (
                <Link href={dest} key={index}>
                  <motion.li
                    initial={{ x: "100%", opacity: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: (navItems.length - index) / 100,
                    }}
                    animate={{ x: "0%", opacity: 100 }}
                    exit={{ x: "100%", opacity: 0 }}
                    className="hover:bg-red-700 p-4"
                    onClick={() => handleMobileNav()}
                  >
                    {title}
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
