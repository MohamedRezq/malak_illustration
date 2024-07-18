"use client";
import { useState } from "react";
import data from "@/public/content/works.json";
import WorkCard from "../components/WorkCard";

export default function Works() {
  const [activeTabs, setActiveTabs] = useState<string[]>([]);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  return (
    <main className="flex p-10 md:p-20 min-h-screen flex-col items-center gap-10">
      {/* tabs-selection */}
      <div className="flex gap-x-5 gap-y-5 md:gap-x-10 flex-wrap items-center justify-center">
        {data.categories.map((category) => (
          <div
            key={category.title}
            onMouseEnter={() => setHoveredTab(category.title)} // Set the active tab
            onMouseLeave={() => setHoveredTab(null)}
            onClick={() => {
              if (activeTabs.find((cat) => cat === category.title)) {
                setActiveTabs(() => {
                  return activeTabs.filter((tab) => tab !== category.title);
                });
              } else {
                setActiveTabs([...activeTabs, category.title]);
              }
            }}
            style={{
              borderColor: category.themeColor,
              color:
                activeTabs.find((cat) => cat === category.title) ||
                hoveredTab === category.title
                  ? "white"
                  : category.themeColor,
              backgroundColor:
                activeTabs.find((cat) => cat === category.title) ||
                hoveredTab === category.title
                  ? category.themeColor
                  : "",
            }}
            className="px-2 font-bold py-1 rounded-full text-sm md:text-md w-32 text-center cursor-pointer border-2 shadow-lg transition-colors duration-300"
          >
            {category.title}
          </div>
        ))}
      </div>
      {/* Work Cards */}
      <div className="flex flex-wrap gap-5 justify-center">
        {data.workCards
          .filter((workcard) => {
            return activeTabs.find((tab) => tab === workcard.category);
          })
          .map((workcard) => (
            <WorkCard key={workcard.title} workCard={workcard} />
          ))}
        {activeTabs.length == 0 &&
          data.workCards.map((workcard) => (
            <WorkCard key={workcard.title} workCard={workcard} />
          ))}
      </div>
    </main>
  );
}
