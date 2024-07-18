"use client";

import React from "react";
import data from "@/public/content/header.json";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import NavLink from "./NavLink";
import { INavLink } from "@/types/interfaces";
import Drawer from "react-modern-drawer";
import menu_icon from "@/public/images/menu_icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const NavLinksList = () => (
    <nav className="flex flex-col md:flex-row text-light-coral-2 text-lg md:text-[16pt] font-bold items-center gap-x-3 gap-y-3">
      {data.navLinks.map((navLink) => (
        <NavLink key={navLink.title} navLink={navLink as INavLink} />
      ))}
    </nav>
  );

  return (
    <header className="flex w-full bg-misty-rose-4 items-center justify-between py-3 px-14 md:px-28">
      <div className="hidden md:flex">
        <NavLinksList />
      </div>
      <>
        <button
          className="block md:hidden bg-light-coral-2 rounded-lg p-2 opacity-85 hover:opacity-100"
          onClick={toggleDrawer}
        >
          <Image width={30} height={30} src={menu_icon} alt="Menu" />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className=""
        >
          <div className="h-full flex flex-col justify-between p-10 items-center">
            <NavLinksList />
            <div className="flex flex-col gap-y-5 items-center">
              <Image
                width={140}
                height={140}
                src={logo}
                alt="Malak Illustrations"
                className="opacity-85"
              />
              <div className="text-light-coral-2 bg-misty-rose-4 border border-light-coral-2 text-sm text-center rounded-lg px-2 py-1 italic shadow-lg">
                Malak Illustration Studio
              </div>
            </div>
          </div>
        </Drawer>
      </>
      <Image
        width={80}
        height={80}
        src={logo}
        alt="Malak Illustrations"
        className="md:mx-10 w-20 h-auto md:w-28"
      />
    </header>
  );
};

export default Header;
