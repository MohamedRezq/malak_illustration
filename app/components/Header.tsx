"use client";

// ** Package Imports
import React from "react";
import Image from "next/image";
import Drawer from "react-modern-drawer";

// ** Static & Helpers Imports
import data from "@/public/content/header.json";
import logo from "@/public/images/logo.png";
import { INavLink } from "@/types/interfaces";
import menu_icon from "@/public/images/menu_icon.png";

// ** Components Imports
import NavLink from "./NavLink";

// ** Hooks Imports
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
  // ** HOOKS
  const scrollDirection = useScrollDirection();

  // ** STATE
  const [isOpen, setIsOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  // ** EFFECT
  React.useEffect(() => {
    setVisible(scrollDirection !== "down");
  }, [scrollDirection]);

  // ** FUNCTIONS
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const NavLinksList = () => (
    <nav className="flex flex-col md:flex-row text-light-coral-2 text-[10pt] md:text-[14pt] font-bold items-center gap-x-3 gap-y-3">
      {data.navLinks.map((navLink) => (
        <NavLink key={navLink.title} navLink={navLink as INavLink} />
      ))}
    </nav>
  );

  return (
    <header
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
      className="top-0 left-0 w-full bg-misty-rose-4 items-center justify-between py-2 px-14 md:px-28 shadow-md z-50 flex"
    >
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
        width={50}
        height={50}
        src={logo}
        alt="Malak Illustrations"
        className="md:mx-10 w-16 h-auto md:w-20"
      />
    </header>
  );
};

export default Header;
