import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mt-2">
        <div className="ev-container">
          <div className="border-b border-gray-200 shadow bg-transparent backdrop-blur w-full flex justify-between items-center p-[20px] rounded-[24px]">
            <Link className="w-full md:max-w-[180px] max-w-[120px]" href="/">
              <img
                alt="logo"
                src="/assets/images/logo1.png"
                className="object-cover object-center w-full "
              />
            </Link>
            <button className="px-[15px] py-[12px] border-0 shadow-none  bg-[#8acbcf] rounded-[25px] text-[#12383d] md:text-[16px] text-[14px] font-medium">
              Book a session
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
