import React, { useState } from "react";
import { BurguerIcon } from "../icons/BurguerIcon";
import { CloseIcon } from "../icons/CloseIcon";

export const NavBarJSX = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#222222] fixed w-full top-0">
      <nav
        className="flex justify-between 
      max-w-[810px] mx-auto px-6"
      >
        {/* Logo */}
        <a href="#top">
          <img src="/experience/logo.png" alt="Descripción del ícono" loading="eager" />
        </a>
        {/* burguer menu */}
        <div className="sm:hidden flex justify-center items-center">
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon className="text-right text-white size-6" />
            ) : (
              <BurguerIcon className="text-right text-white size-6" />
            )}
          </button>
        </div>
        {/* botones nav */}
        <nav className="text-white sm:flex gap-16 hidden">
          <a
            href="#home"
            className="font-semibold text-[15px]
       flex items-center justify-center"
          >
            Home
          </a>
          <a
            href="#proyectos"
            className="font-semibold text-[15px]
       flex items-center justify-center"
          >
            Projects
          </a>
          <a
            href="#experiencia"
            className="font-semibold text-[15px]
       flex items-center justify-center"
          >
            Experience
          </a>
          <a
            href="#contacto"
            className="font-semibold text-[15px]
       flex items-center justify-center"
          >
            Contact
          </a>
        </nav>
      </nav>

      {/* NavBar responsive */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        }  text-white mx-auto max-w-[200px] flex justify-center my-6 `}
      >
        <ul className="space-y-6">
          <li>
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href="#home"
              className="font-semibold text-[15px]
       flex items-center justify-center"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href="#proyectos"
              className="font-semibold text-[15px]
       flex items-center justify-center"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href="#experiencia"
              className="font-semibold text-[15px]
       flex items-center justify-center"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href="#contacto"
              className="font-semibold text-[15px]
       flex items-center justify-center"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
