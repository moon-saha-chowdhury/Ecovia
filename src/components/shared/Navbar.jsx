"use client";
import { useTabs } from "@/context/tab-context";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const { setActiveTab } = useTabs();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mt-2">
        <div className="ev-container">
          <div className="border-b border-gray-200 shadow bg-transparent backdrop-blur w-full flex justify-between items-center p-[20px] rounded-[24px]">
            <Link className="w-full md:max-w-[180px] max-w-[120px]" href="/">
              <img
                alt="logo"
                src="/assets/images/brandLogo.png"
                className="object-cover object-center w-full "
              />
            </Link>
            <div className="flex gap-[15px] items-center">
              <Link
                href="mailto:d4i.dipankar@gmail.com"
                className="md:flex hidden items-center gap-2 text-sm text-gray-800"
              >
                <FaEnvelope className="text-primary" />
                <span>d4i.dipankar@gmail.com</span>
              </Link>
              <Link
                href="tel:+8801723230077"
                className="md:flex hidden items-center gap-[5px] text-sm text-gray-800"
              >
                <FaPhone className="text-primary" />
                <span>+88017 2323 0077</span>
              </Link>
              <button
                onClick={() => setActiveTab(4)}
                className="px-[15px] py-[10px] border-0   bg-primary rounded-[25px] text-white md:text-sm text-xs font-medium cursor-pointer"
              >
                Request Information
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
