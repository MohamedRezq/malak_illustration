import { IServiceSection } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";
import AnimatedSection from "./AnimatedSection";

const ServiceSection = ({ section }: { section: IServiceSection }) => {
  return (
    <AnimatedSection
      classNames={`grid grid-cols-1 lg:grid-cols-2 w-full lg:p-20 min-h-[90vh]`}
      styles={{
        backgroundColor: section?.metadata?.backgroundColor,
      }}
    >
      <div
        className={`flex col-span-2 lg:col-span-1 items-start gap-y-8 flex-col p-10 text-md lg:text-xl`}
      >
        <h1 className="text-3xl self-start lg:text-4xl font-bold text-light-coral-2">
          {section?.title}
        </h1>
        <p className="leading-relaxed text-start text-[14pt]">
          {section?.subTitle}
        </p>
        <div className={`flex self-center`}>
          <Image
            src={section.image}
            alt={section?.title}
            width={200}
            height={200}
            className="h-48 lg:h-[80%] w-auto"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[15pt]">أهم النقاط لطلب هذه الخدمة:</p>
          {section.points.map((point) => (
            <div className="flex items-center gap-5" key={point.text}>
              <Image
                src={point.iconUrl}
                alt={point.text}
                width={30}
                height={30}
              />
              <p className="text-[14pt]">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 w-full flex items-center justify-center gap-5 text-lg">
        <NavLink
          navLink={{
            title: "كافة أعمالى من هنا",
            url: section.urlWorks || "",
            variant: "outlined",
          }}
        />
      </div>
      <div className="col-span-2 px-10 mt-5 mb-20 w-full flex items-center justify-center gap-5">
        <NavLink
          navLink={{
            title: "اطلب الخدمة",
            url: section.urlService || "",
            variant: "contained",
          }}
        />
        <NavLink
          navLink={{
            title: "طريقة عملى",
            url: section.urlMethod || "",
            variant: "contained",
          }}
        />
      </div>
    </AnimatedSection>
  );
};

export default ServiceSection;
