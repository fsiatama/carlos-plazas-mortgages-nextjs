import React from "react";
import Link from "next/link";

import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav
      id="header"
      className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" passHref legacyBehavior>
            <a
              className="toggleColour text-blue-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <Image
                src="/images/logo.svg"
                alt="carlos plazas logo"
                width={267}
                height={66}
              />
            </a>
          </Link>

          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " block" : " hidden")
          }
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center"></ul>
          <Link href="/aplicar-casa-propia" passHref legacyBehavior>
            <button
              id="navAction"
              className="cursor-pointer mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Preaprobación en 24 horas
            </button>
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
