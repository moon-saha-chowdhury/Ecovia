import React from "react";

const Footer = () => {
  return (
    <div className="ev-container">
      <div className="w-full flex flex-col justify-center items-center py-[25px] bg-[#12383d] mb-2 rounded-[24px]">
        <div className="w-full max-w-[180px] m-auto footer-img">
          <img
            alt="logo"
            src="/assets/images/logo.png"
            height={55}
            width={160}
            className="object-cover object-center m-auto"
          />
        </div>
        <div className="text-[14px] text-center leading-[1.5] text-[#fff] pt-0.5">
          &copy; {new Date().getFullYear()} , Dipankar Saha. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
