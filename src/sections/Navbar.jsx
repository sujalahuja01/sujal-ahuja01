import React, { useState } from "react";
const Navigation = () => {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-Link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-Link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#work" className="nav-Link">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-Link">
          Contact
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2  sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Sujal
          </a>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      <div className="block overflow-hidden text-center sm:hidden">
        <nav className="pb-5">
          <Navigation />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
