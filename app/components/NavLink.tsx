import { INavLink } from "@/types/interfaces";
import Link from "next/link";
import React from "react";

const NavLink = ({ navLink }: { navLink: INavLink }) => {
  return (
    <Link
      key={navLink.title}
      href={navLink?.url}
      className={`rounded-2xl w-full md:w-fit text-center px-6 py-2 underline-offset-[12px] ${
        navLink?.variant == "contained"
          ? "text-white bg-slate-blue hover:bg-light-coral-2 shadow shadow-gray-700"
          : "hover:underline hover:text-slate-blue text-light-coral-2 font-semibold"
      }`}
    >
      {navLink?.title}
    </Link>
  );
};

export default NavLink;
