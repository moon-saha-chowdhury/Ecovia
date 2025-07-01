import React from "react";

const SessionDetails = () => {
  return (
    <div className="pt-[100px] pb-[130px] ">
      <div className="ev-container">
        <div className="flex flex-col justify-center items-center xl:mb-[48px] mb-[35px]">
          <h1 className="[leading-trim:both] [text-edge:cap] leading-none tracking-normal  xl:text-[48px] lg:text-[40px] md:text-[32px] text-[28px] text-center font-semibold text-[#22603f] mb-[24px]">
            Empower Your Knowledge: Book a Session
          </h1>
          <div className="text-xl text-[#5c5c5c] text-center">
            Select the plan that fits your learning goals and schedule.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px] justify-center ">
          {pricingData?.map((data, i) => {
            return (
              <div
                key={data.id}
                className="card w-96 bg-base-100 shadow-sm border-1 border-[#38895e]"
              >
                <div className="card-body h-full">
                  {data.recommended && (
                    <span className="badge badge-xs badge-warning">
                      Popular
                    </span>
                  )}
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{data.title}</h2>
                    <span className="text-xl">${data.price}/mo</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-[12px] text-[16px] max-h-[152px] h-full">
                    {data.listItem.map((item, i) => {
                      return (
                        <li key={i}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 me-[4px] inline-block text-success"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#22603f"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-6">
                    <button
                      className={`btn btn-primary shadow-[none] border-1 border-[#22603f] btn-block ${
                        data.recommended
                          ? "bg-[#22603f] text-[#fbfbfb]"
                          : "bg-transparent text-[#22603f]"
                      } hover:bg-[#22603f] hover:text-[#fbfbfb]`}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
export const pricingData = [
  {
    id: 1,
    title: "Starter",
    text: "Training service: No fee",
    listItem: ["Higg index", "LEED certification green building"],
    recommended: false,
    price: 0,
  },
  {
    id: 2,
    title: "Advance",
    text: "Most Popular: Fee required",
    listItem: [
      "Higg Index",
      "LEED certification green building",
      "Higg V4 FEM Level 1 to 3",
      "LEED GA  Credential",
    ],
    recommended: true,
    price: 20,
  },
  {
    id: 3,
    title: "Consultancy",
    text: "Advanced automation, onboarding & support",
    listItem: [
      "Higg v4 FEM Assessment",
      "LEED Certification for Building Design and construction (BD+C)",
      "LEED Certification for Existing Building Operation and Maintenance (EB O+M)",
    ],
    price: 25,
    recommended: false,
  },
];
