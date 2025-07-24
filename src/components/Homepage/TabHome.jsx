import Link from "next/link";
import React from "react";

const TabHome = () => {
  return (
    <div
      className="min-h-[calc(80vh-80px)]
 lg:py-[25px] w-full mx-auto flex flex-col  md:gap-[25px] gap-[15px] relative z-10"
    >
      <div className="absolute inset-0 bg-[url('/assets/images/heroBg.png')] bg-contain  bg-[position:center_100px] bg-no-repeat z-[-2] md:opacity-30 opacity-12" />
      <h1 className="[leading-trim:both] [text-edge:cap] 2xl:text-[60px] leading-none tracking-normal  xl:text-[54px] lg:text-[44px] md:text-[36px] text-[32px] text-center font-semibold text-[#143d3c] pt-[100px]">
        Empowering industries with sustainable manufacturing
      </h1>
      <p className="text-[16px] text-[#5c5c5c] mx-auto max-w-[669px] tracking-normal  leading-[1.6] text-center">
        Ecovia is your trusted partner in sustainability. We specialize in LEED
        certification, industrial sustainability planning, and eco-friendly
        solutions that make a measurable impact
      </p>
    </div>
  );
};

export default TabHome;
