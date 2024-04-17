import { IWorkCard } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

const WorkCard = ({ workCard }: { workCard: IWorkCard }) => {
  return (
    <div className="p-5 border-2 shadow-lg rounded-md w-80 text-center flex flex-col justify-between gap-3 items-center">
      <Image
        width={100}
        height={100}
        className="w-full h-40 object-contain"
        src={workCard.imageUrl}
        alt={workCard.title}
      />
      <p className="text-xl font-bold">{workCard.title}</p>
      <desc className="text-md  font-extralight">{workCard.description}</desc>
      <p className="font-semibold">{workCard.category}</p>
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
