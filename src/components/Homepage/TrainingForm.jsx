"use client";
import { useState } from "react";

const TrainingForm = ({ inputStyle, labelStyle }) => {
  const [trainingType, setTrainingType] = useState("");

  return (
    <div>
      <div className="mb-5">
        <label className={labelStyle}>Student / Profession</label>
        <select
          className={inputStyle}
          value={trainingType}
          onChange={(e) => setTrainingType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="profession">Profession</option>
        </select>
      </div>

      {trainingType === "student" && (
        <form className="space-y-5">
          <div>
            <label className={labelStyle}>Name *</label>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <label className={labelStyle}>Mobile *</label>
            <input className={inputStyle} type="tel" />
          </div>
          <div>
            <label className={labelStyle}>Email *</label>
            <input className={inputStyle} type="email" />
          </div>
          <div>
            <label className={labelStyle}>Department</label>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <label className={labelStyle}>Institute</label>
            <input className={inputStyle} type="text" />
          </div>
          <div className="pt-4">
            <button className="py-[15px] border-0 shadow-none  bg-[#8acbcf] rounded-[25px] text-[#12383d] md:text-[16px] text-[14px] font-bold w-full">
              Submit
            </button>
          </div>
        </form>
      )}

      {trainingType === "profession" && (
        <form className="space-y-5">
          <div>
            <label className={labelStyle}>Name *</label>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <label className={labelStyle}>Mobile *</label>
            <input className={inputStyle} type="tel" />
          </div>
          <div>
            <label className={labelStyle}>Email *</label>
            <input className={inputStyle} type="email" />
          </div>
          <div>
            <label className={labelStyle}>Designation</label>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <label className={labelStyle}>Department</label>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <label className={labelStyle}>Company Name</label>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <label className={labelStyle}>Company Address</label>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <label className={labelStyle}>Company Website</label>
            <input className={inputStyle} type="url" />
          </div>
          <div className="pt-4">
            <button className="py-[15px] border-0 shadow-none  bg-[#8acbcf] rounded-[25px] text-[#12383d] md:text-[16px] text-[14px] font-bold w-full">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TrainingForm;
