"use client";
import { useTabs } from "@/context/tab-context";
import Image from "next/image";
import React from "react";

const TabHome = () => {
  const { setActiveTab } = useTabs();

  return (
    <div
      className="
 lg:py-[20px] w-full mx-auto flex flex-col  md:gap-[25px] gap-[15px] relative z-10"
    >
      <div className="w-full" />
      <h1 className="[leading-trim:both] [text-edge:cap] 2xl:text-[32px] leading-none tracking-normal  xl:text-[28px]  text-[26px] text-center font-semibold text-[#143d3c] pb-[28px]">
        Empowering industries with sustainable manufacturing
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(article.goTo)}
            className="flex flex-col group p-2 bg-white rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:bg-[#eceef1] transition-background items-start text-left"
          >
            {/* Image */}
            <div className="w-full h-56 relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              {/* <span className="text-sm text-gray-600">{article.author}</span> */}
              <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-[#143d3c] transition-colors">
                {article.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabHome;
const articles = [
  {
    author: "Mary Summers Rogers",
    title:
      "Industrial Facility Design for Garment, Dyeing, Washing, Knitting, Spinning Unit Project Master plan, Architectural, Electrical, Plumbing, HVAC, 3D Visualization",
    image: "/assets/images/IndustrialFacilityDesign.jpg",
    goTo: 2,
  },
  {
    author: "Aaron Hope",
    title:
      "LEED Certification for New Building (BD+C) and Existing Building (EB O+M) Feasibility, Energy Model, Energy Audit, Commissioning, Certification",
    image: "/assets/images/LEEDCertification.jpg",
    goTo: 2,
  },
  {
    author: "Jacqueline Maley",
    title:
      "Green Finance, Green Transformation Fund, Sustainable Finance Low-cost refinance from Bangladesh bank, JICA & etc",
    image: "/assets/images/GreenFinance.jpg",
    goTo: 2,
  },
  {
    author: "Heather Benjamin",
    title:
      "Higg V4 FEM & FSLM & BRM for Apparel Industry , Higg v4 FEM (Level 1, 2, 3) & FSLM Assessment File Preparation",
    image: "/assets/images/HiggIndex.jpg",
    goTo: 2,
  },
  {
    author: "Gracie Tilman",
    title:
      "Green Building Design Training for Architects & Engineers Unlock Sustainability. Shape the Future.",
    image: "/assets/images/training2.jpg",
    goTo: 3,
  },
  {
    author: "Heather Benjamin",
    title:
      "Higg V4 FEM (Level 1,2,3) & FSLM Training for Garment Industry Professionals Elevate your professional skill with Higg FEM v4 Training",
    image: "/assets/images/training1.jpg",
    goTo: 3,
  },
];
