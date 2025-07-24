"use client";
import { useState } from "react";
import TabHome from "./TabHome";
import AboutSection from "./AboutSection";
import ConsultancySection from "./ConsultancySection";
import TrainingSection from "./TrainningSection";
import ContactTab from "./ContactTab";

const HeroSectionTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "About", "Consultancy", "Training", "Book a Session"];

  return (
    <section className="min-h-screen pb-[55px] md:pb-[68px] lg:pb-[80px] pt-[140px] bg-[#fbfbfb]">
      <div className="ev-container">
        {/* Tabs Wrapper */}
        <div className="md:flex w-full gap-[20px]">
          {/* Tabs Navigation */}
          <div className="w-full md:max-w-[300px]">
            <div className="md:sticky md:top-[120px] text-center">
              <div className="flex md:flex-col flex-nowrap overflow-x-auto no-scrollbar px-2 md:px-0 md:overflow-visible tabs tabs-bordered gap-x-2 md:justify-normal justify-between">
                {tabs.map((label, index) => (
                  <a
                    key={index}
                    className={`tab whitespace-nowrap flex-shrink-0 min-w-[120px] text-center tab-bordered rounded-md font-bold px-4 md:py-6 py-2 transition-all text-[16px]  h-full md:mb-2 ${
                      activeTab === index
                        ? "!text-[#143a3d] bg-[#e0e0e2] border-[#f0f0f2]"
                        : "text-[#143a3d]/80 bg-white border-transparent hover:bg-[#e0e0e2] hover:text-[#143a3d]"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full md:w-3/4 p-[20px] md:p-[30px] h-full border border-base-300 bg-base-100 rounded-md md:rounded-r-md mt-4 md:mt-0">
            {activeTab === 0 && <TabHome />}
            {activeTab === 1 && <AboutSection />}
            {activeTab === 2 && <ConsultancySection />}
            {activeTab === 3 && <TrainingSection />}
            {activeTab === 4 && <ContactTab />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTab;
