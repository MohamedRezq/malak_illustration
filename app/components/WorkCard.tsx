import { IWorkCard } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

const WorkCard = ({ workCard }: { workCard: IWorkCard }) => {
  return (
    <div className="p-5 border-2 shadow-xl rounded-md w-72 text-center flex flex-col justify-between gap-3 items-center">
      <Image
        width={100}
        height={100}
        className="w-full h-40 object-contain"
        src={workCard.imageUrl}
        alt={workCard.title}
      />
      <p className="text-lg font-bold">{workCard.title}</p>
      <p className="text-base font-extralight">{workCard.description}</p>
      <p className="font-semibold text-base mt-2">{workCard.category}</p>
      <div className="self-end text-light-coral-2 hover:text-light-steel-blue">
        <NavLink
          navLink={{
            title: "للمزيد",
            url: workCard.url,
            variant: "outlined",
          }}
        />
      </div>
    </div>
  );
};

export default WorkCard;
