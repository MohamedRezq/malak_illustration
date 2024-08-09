import { ISemiSection } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";
import AnimatedSection from "./AnimatedSection";

const SemiSection = ({
  direction,
  section,
}: {
  direction: "ltr" | "rtl";
  section: ISemiSection;
}) => {
  return (
    <AnimatedSection
      classNames={`grid grid-cols-1 lg:grid-cols-2`}
      styles={{
        backgroundColor: section?.metadata?.backgroundColor,
      }}
    >
      <div className={`flex items-center justify-center`}>
        <Image
          src={section.imageUrl}
          alt={section?.title}
          width={200}
          height={200}
          className="h-36 md:h-1/2 w-auto"
        />
      </div>
      <div
        className={`flex items-center md:items-start gap-y-8 flex-col p-8 text-md md:text-lg ${
          direction == "ltr" ? "md:order-1" : ""
        }`}
      >
        <h1 className="text-2xl self-center md:self-start lg:text-3xl font-bold text-light-coral-2">
          {section?.title}
        </h1>
        <p className="leading-relaxed text-center md:text-start text-[14pt]">
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
    </AnimatedSection>
  );
};

export default SemiSection;
