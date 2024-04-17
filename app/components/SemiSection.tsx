import { ISemiSection } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

const SemiSection = ({
  direction,
  section,
}: {
  direction: "ltr" | "rtl";
  section: ISemiSection;
}) => {
  return (
    <section
      className={`grid grid-cols-1 lg:grid-cols-2 w-full p-5 md:p-20 min-h-[90vh]`}
      style={{
        backgroundColor: section?.metadata?.backgroundColor,
      }}
    >
      <div
        className={`flex items-center md:items-start gap-y-8 flex-col p-14 text-md md:text-xl ${
          direction == "ltr" ? "md:order-2" : ""
        }`}
      >
        <h1 className="text-2xl md:text-5xl font-bold text-light-coral-2">
          {section?.title}
        </h1>
        <p className="leading-relaxed text-center md:text-start">
          {section?.content}
        </p>
        <NavLink
          navLink={{
            title: section.navLink || "",
            url: section.navLinkUrl || "",
            variant: "contained",
          }}
        />
      </div>
      <div className={`flex items-center justify-center p-10`}>
        <Image
          src={section.imageUrl}
          alt={section?.title}
          width={200}
          height={200}
          className="h-48 md:h-[80%] w-auto"
        />
      </div>
    </section>
  );
};

export default SemiSection;
