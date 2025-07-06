import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      className="w-full  py-[55px] md:py-[80px] lg:py-[100px] bg-[#fbfbfb]"
      id="about"
    >
      <div className="ev-container">
        <div className="flex flex-col justify-center items-center xl:mb-[48px] mb-[35px]">
          <h1 className="[leading-trim:both] [text-edge:cap] leading-none tracking-normal  xl:text-[48px] lg:text-[40px] md:text-[32px] text-[28px] text-center font-semibold text-[#22603f] mb-[24px]">
            Inside Ecovia
          </h1>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
          {/* Left Info */}
          <div className="bg-gray-100 flex flex-col items-center p-6 md:p-8 w-full lg:w-1/3 text-center">
            <div className="max-w-28 w-full h-28  mb-4">
              <img
                className="rounded-full w-full h-full object-center object-cover border-1 border-[#22603f]"
                src="/assets/images/author.png"
                alt="picture"
              />
            </div>

            {/* Contact */}
            <div className="text-left w-full space-y-2 mt-4">
              <h3 className="font-semibold text-gray-900">CONTACT</h3>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <FaPhone className="text-green-800" />
                <span>+88017 2323 0077 (Mobile)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <FaEnvelope className="text-green-800" />
                <span>dyp.dha@gmail.com (Email)</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 text-left w-full">
              <h3 className="font-semibold text-gray-900 mb-1">
                CERTIFICATIONS
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>LEED® Green Associate™</li>
                <li>LEED® AP™ BD+C (Prep)</li>
                <li>LEED® AP™ EB O+M (Prep)</li>
                <li>Higg v4 FEM FSLM BRM</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-4 text-left w-full">
              <h3 className="font-semibold text-gray-900 mb-1">
                CONVERSANCE WITH
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>RSC Cap</li>
                <li>ASHRAE Energy Audit</li>
                <li>SREDA Energy Audit</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mt-4 text-left w-full">
              <h3 className="font-semibold text-gray-900 mb-1">
                LEED PROJECTS
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>DBL Group</li>
                <li>PANAM Group</li>
                <li>MASCO Group</li>
                <li>MONDOL Group</li>
                <li>YOUTH Group</li>
                <li>NEW ASIA Group</li>
                <li>UNIFILL Group</li>
              </ul>
            </div>

            {/* Membership */}
          </div>

          {/* Right Content */}
          <div className="p-6 md:p-10 w-full lg:w-2/3 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dipankar Saha
            </h2>

            <h3 className="font-semibold text-lg text-gray-800">
              Industrial and Production Engineer
            </h3>
            <p className="text-sm text-gray-600 italic">
              Sustainability & LEED Green Building & Higg Practitioner
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Throughout my 15-year professional career in the RMG industry, I
              have acquired a wide range of abilities and dynamic experience in
              industrial facility design and management. With the goal of
              contributing to sustainability, I am currently pursuing my skills
              and experience to help enable Green Industry Infrastructure
              Development and Sustainable Manufacturing Practices in the Garment
              Industry.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I currently manage both LEED BD+C and LEED O+M green building
              projects for a green building consulting firm. As required by
              LEED, I support industry specialists in enhancing water and energy
              efficiency, renewable energy, GHG reduction, indoor air quality in
              the production facility, waste management, and rainwater
              management—keeping track of and gathering the relevant supporting
              documentation and reports for the assessment of credit
              accomplishments for LEED Certification.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I oversee over twenty green building projects. Three of these
              ranked among the world's top ten green buildings, with seven
              achieving Platinum certification, five earning Gold, while the
              rest are still in progress.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I enjoy sharing my knowledge with professionals who want to work
              in sustainability by offering training on LEED and Higg V4, as
              well as consulting on LEED Green Building Certification, Green
              Finance, and the Higg Index for the garment industry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              <div className="flex flex-col items-start">
                <div className="text-green-800 lg:text-[28px] text-[22px] font-bold">
                  15+
                </div>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-green-800 lg:text-[28px] text-[22px] font-bold">
                  20+
                </div>
                <p className="text-sm text-gray-600">Green Building Projects</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-green-800 lg:text-[28px] text-[22px] font-bold">
                  7
                </div>
                <p className="text-sm text-gray-600">Platinum Certifications</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-green-800 lg:text-[28px] text-[22px] font-bold">
                  5
                </div>
                <p className="text-sm text-gray-600">Gold Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
