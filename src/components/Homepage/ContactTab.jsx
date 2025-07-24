"use client";
import { useState } from "react";
import ConsultancyForm from "./ConsultancyForm";
import TrainingForm from "./TrainingForm";

const ContactTab = () => {
  const [formType, setFormType] = useState("consultancy");
  const labelStyle = "block text-[15px] font-medium text-[#143d3c] mb-1";
  const inputStyle =
    "w-full px-4 py-3 rounded-md text-[#143d3c] placeholder:text-[#143d3c]/40 focus:outline-none focus:ring-2 focus:ring-[#8acbcf] bg-[#fff] transition-all";

  return (
    <section className="bg-[#e0e0e2] py-6 md:px-[40px] px-[25px] rounded-[15px] shadow-md max-w-[900px] mx-auto">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-full font-medium  ${
            formType === "consultancy"
              ? "bg-[#8acbcf] text-[#12383d]"
              : "text-[#143d3c] border-[#8acbcf] border hover:bg-[#8acbcf] hover:text-[#12383d]"
          }`}
          onClick={() => setFormType("consultancy")}
        >
          Consultancy
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium  ${
            formType === "training"
              ? "bg-[#8acbcf] text-[#12383d]"
              : "text-[#143d3c] border-[#8acbcf] border hover:bg-[#8acbcf] hover:text-[#12383d]"
          }`}
          onClick={() => setFormType("training")}
        >
          Training
        </button>
      </div>

      {/* Consultancy Form */}
      {formType === "consultancy" && (
        <ConsultancyForm inputStyle={inputStyle} labelStyle={labelStyle} />
      )}

      {/* Training Form */}
      {formType === "training" && (
        <TrainingForm inputStyle={inputStyle} labelStyle={labelStyle} />
      )}
    </section>
  );
};

export default ContactTab;
