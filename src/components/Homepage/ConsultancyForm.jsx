import React from "react";

const ConsultancyForm = ({ inputStyle, labelStyle }) => {
  return (
    <>
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
    </>
  );
};

export default ConsultancyForm;
