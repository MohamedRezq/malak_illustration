import { ISemiSection } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

const CustomSection = ({
  direction,
  section,
}: {
  direction: "ltr" | "rtl";
  section: ISemiSection;
}) => {
  return (
    <section
      className={`grid grid-cols-1 lg:grid-cols-2 w-full p-14`}
      style={{
        backgroundColor: section?.metadata?.backgroundColor,
      }}
    >
      <div
        className={`flex items-center justify-center p-10 ${
          direction == "rtl" ? "order-2" : ""
        }`}
      >
        <Image
          src={section.imageUrl}
          alt={section?.title}
          width={200}
          height={200}
          className="h-full w-auto"
        />
      </div>
      <div className="flex items-start gap-y-8 flex-col p-14 text-xl">
        <h1 className="text-5xl font-bold text-light-coral-2">
          {section?.title}
        </h1>
        <p className="text-xl leading-relaxed">{section?.content}</p>
        <NavLink
          navLink={{
            title: section.navLink || "",
            url: section.navLinkUrl || "",
            variant: "contained",
          }}
        />
      </div>
    </section>
  );
};

export default CustomSection;
