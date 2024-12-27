"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Selecciona el elemento con la clase "menu-icon" en el Header
    const menuIcon = document.querySelector(".menu-icon");
    if (menuIcon) {
      menuIcon.addEventListener("click", () => setIsOpen(true));
    }

    // Limpia el evento al desmontar
    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener("click", () => setIsOpen(true));
      }
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-rojoMucho transition-transform duration-500 ease-in-out w-96 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 shadow-lg z-50`}
      >
        {/* Contenido del Slide Menu */}
        <div className="px-8 py-4 flex flex-col h-full">
          {/* Botón de cerrar */}
          <div className="flex justify-end">
            <Image
              src="/close-icon.svg"
              alt="Close Icon"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          <Link
            href="/"
            className="p-1 text-3xl text-white hover:text-black"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="p-1 text-3xl text-white hover:text-black"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
