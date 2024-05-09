import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import data from "@/public/content/footer.json";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-20 md:px-28 py-20 bg-light-steel-blue text-white text-lg">
      <div className="flex justify-between w-full">
        <nav className="flex flex-col gap-y-5 text-center w-full md:w-fit">
          {data.navLinks.map((navLink) => (
            <Link
              key={navLink.title}
              href={navLink.url}
              className="hover:underline underline-offset-4 hover:text-light-coral-2"
            >
              {navLink.title}
            </Link>
          ))}
        </nav>
        <div className="bg-white hidden md:flex rounded-full items-center justify-center w-12 h-12 border-4 shadow-lg border-light-coral-2 ">
          <Image
            src={logo}
            alt="Malak Illustrations"
            width={50}
            height={50}
            className="w-auto h-12 scale-125"
          />
        </div>
      </div>
      <div className="text-center w-full text-base mt-20">
        ملاك للرسوم الإيضاحية٬ كافة الحقوق محفوظة ٢٠٢١ ©{" "}
      </div>
    </div>
  );
};

export default Footer;
