import { ISemiSection } from "@/types/interfaces";
import SemiSection from "./components/SemiSection";
import data from "@/public/content/home.json";
import ServiceCard from "./components/ServiceCard";
import NavLink from "./components/NavLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Semi-Section */}
      <SemiSection
        section={data?.["semi-sections"]?.at(0) as ISemiSection}
        direction="rtl"
      />
      {/* Semi-Section */}
      <SemiSection
        section={data?.["semi-sections"]?.at(1) as ISemiSection}
        direction="ltr"
      />
      {/* My Services Section */}
      <section className="grid grid-cols-2 lg:grid-cols-8 gap-x-8 gap-y-14 my-20 mx-10 md:m-28">
        {data.serviceCards.map((serviceCard) => (
          <ServiceCard key={serviceCard.title} serviceCard={serviceCard} />
        ))}
        <div className="w-full flex justify-start mt-5 col-span-2 text-xl">
          <NavLink
            navLink={{
              title: "للمزيد...",
              url: "",
              variant: "contained",
            }}
          />
        </div>
      </section>
      {/* Semi-Section */}
      <SemiSection
        section={data?.["semi-sections"]?.at(2) as ISemiSection}
        direction="ltr"
      />
    </main>
  );
}
