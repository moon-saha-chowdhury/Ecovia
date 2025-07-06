import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="py-[16px] border-b border-gray-200 shadow bg-[#fbfbfb]">
        <div className="ev-container">
          <div className=" w-full flex justify-between items-center ">
            <Link className="w-full md:max-w-[180px] max-w-[120px]" href="/">
              <img
                alt="logo"
                src="/assets/images/logo.png"
                height={55}
                width={180}
                className="object-cover object-center"
              />
            </Link>
            <button className="px-[15px] py-[10px] border-0 shadow-none btn btn-primary bg-[#22603f] rounded-[4px] text-[#fbfbfb] md:text-[16px] text-[14px] font-medium">
              Start a session
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
