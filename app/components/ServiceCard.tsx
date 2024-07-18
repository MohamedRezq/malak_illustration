import { IServiceCard } from "@/types/interfaces";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ serviceCard }: { serviceCard: IServiceCard }) => {
  return (
    <div className="flex col-span-2 flex-col gap-y-4 justify-start items-center text-center">
      <Image
        height={100}
        width={100}
        className="w-auto h-40 lg:h-60"
        src={serviceCard.imageUrl}
        alt={serviceCard.title}
      />
      <h5 className="text-xl lg:text-2xl font-bold">{serviceCard.title}</h5>
      <desc className="text-lg font-normal text-center">
        {serviceCard.description}
      </desc>
    </div>
  );
};

export default ServiceCard;
