import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showBg, handleShowBg] = useState(false);

  const transitionNavbar = () => {
    window.pageYOffset > 100 ? handleShowBg(true) : handleShowBg(false);
  };

  useEffect(() => {
    handleShowBg;
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <nav className="fixed left-0 right-0 z-10 text-white isolate">
      <div className={`bg-green-700 w-full h-24 sm:h-28 fixed top-0 left-0 right-0 transition-opacity -z-10 ${showBg ? "opacity-100" : "opacity-0 ease-out duration-700"}`}></div>
      <div className="container max-w-6xl h-24 sm:h-28 flex items-center justify-between sm:justify-center gap-2 md:gap-4 sm:flex-col">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.09 297.49" className="h-10 fill-white">
            <defs />
            <g id="Layer_5" data-name="Layer 5">
              <path
                d="M55.12 256v41.34c-6.95-.07-10-.24-14.92-.56-4.48-.29-12.89-.94-23.45-2.41A327.91 327.91 0 0 1 .04 291.6c.1-15.77-.11-27.8 0-43.56a35.87 35.87 0 0 0 11.74 5.36c1.58.35 2.87.6 4.11.79 2.25.35 4.17.67 5.45.73s2.88.37 4.39.52q3.93.39 7.54.52c2.37.09 4.19.11 5.3.12 7.3.04 14.38-.05 16.55-.08ZM65.67 297.5v-41.42a65.65 65.65 0 0 0 6.83 0c3-.18 5.19-.47 7.34-.74 3.4-.44 5.39-.83 5.91-.94s2.2-.41 4.48-1c1.38-.39 2.55-.78 3.46-1.1.41-.18.85-.37 1.32-.55.86-.34 1.46-.52 1.83-.65a20.43 20.43 0 0 0 2.95-1.27 10.77 10.77 0 0 0 3.81-2.51 16 16 0 0 0 3.05-5.15c.48-1.1.82-2 1-2.72s.65-1.72 1-3a60.38 60.38 0 0 0 1.59-7.66c.24-1.38.62-3.53 1.12-6.22l.72-8.94 1-171.62c.11-14.24.11-28 .11-41.81h43.35v215.23a83 83 0 0 1-.8 16.09 72 72 0 0 1-4 15.9 64.9 64.9 0 0 1-11 19.13 72.54 72.54 0 0 1-15.14 13.58 86.57 86.57 0 0 1-12.15 6.8c-.91.42-4.65 2.16-9.95 4a120.42 120.42 0 0 1-17.94 4.78 103.46 103.46 0 0 1-19.89 1.79ZM177.22 52.44l26.56-.11 19.2-.08 31.38 55.08-46.89.19ZM231.01 169.81l20.56-.08 27.34-.1 38.83 70.39-49.57-.1ZM371.1 0v44.4H170.72V0zM371.09 117.42v44.4H170.71v-44.4zM371.1 251.48v44.4H170.72v-44.4z"
                className="cls-1"
              />
            </g>
          </svg>
        </Link>

        <ul className="flex items-center gap-6 text-lg">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/#about-us">
            <li>About</li>
          </Link>
          <Link href="/#products">
            <li>Products</li>
          </Link>
          <Link href="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      {/* <div className={`bg-green-700 w-full h-24 sm:h-16 fixed top-0 left-0 right-0 transition-opacity -z-10 ${showBg ? "opacity-100" : "opacity-0 ease-out duration-700"}`}></div>
      <div className="container max-w-6xl h-24 sm:h-16 flex items-center justify-between sm:justify-center">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.09 297.49" className="h-12 fill-white sm:hidden">
            <defs />
            <g id="Layer_5" data-name="Layer 5">
              <path
                d="M55.12 256v41.34c-6.95-.07-10-.24-14.92-.56-4.48-.29-12.89-.94-23.45-2.41A327.91 327.91 0 0 1 .04 291.6c.1-15.77-.11-27.8 0-43.56a35.87 35.87 0 0 0 11.74 5.36c1.58.35 2.87.6 4.11.79 2.25.35 4.17.67 5.45.73s2.88.37 4.39.52q3.93.39 7.54.52c2.37.09 4.19.11 5.3.12 7.3.04 14.38-.05 16.55-.08ZM65.67 297.5v-41.42a65.65 65.65 0 0 0 6.83 0c3-.18 5.19-.47 7.34-.74 3.4-.44 5.39-.83 5.91-.94s2.2-.41 4.48-1c1.38-.39 2.55-.78 3.46-1.1.41-.18.85-.37 1.32-.55.86-.34 1.46-.52 1.83-.65a20.43 20.43 0 0 0 2.95-1.27 10.77 10.77 0 0 0 3.81-2.51 16 16 0 0 0 3.05-5.15c.48-1.1.82-2 1-2.72s.65-1.72 1-3a60.38 60.38 0 0 0 1.59-7.66c.24-1.38.62-3.53 1.12-6.22l.72-8.94 1-171.62c.11-14.24.11-28 .11-41.81h43.35v215.23a83 83 0 0 1-.8 16.09 72 72 0 0 1-4 15.9 64.9 64.9 0 0 1-11 19.13 72.54 72.54 0 0 1-15.14 13.58 86.57 86.57 0 0 1-12.15 6.8c-.91.42-4.65 2.16-9.95 4a120.42 120.42 0 0 1-17.94 4.78 103.46 103.46 0 0 1-19.89 1.79ZM177.22 52.44l26.56-.11 19.2-.08 31.38 55.08-46.89.19ZM231.01 169.81l20.56-.08 27.34-.1 38.83 70.39-49.57-.1ZM371.1 0v44.4H170.72V0zM371.09 117.42v44.4H170.71v-44.4zM371.1 251.48v44.4H170.72v-44.4z"
                className="cls-1"
              />
            </g>
          </svg>
        </Link>

        <ul className="flex items-center gap-6 text-lg">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/#about-us">
            <li>About</li>
          </Link>
          <Link href="/#products">
            <li>Products</li>
          </Link>
          <Link href="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
