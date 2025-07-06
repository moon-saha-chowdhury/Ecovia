import React from "react";

const SessionDetails = () => {
  return (
    <div className="lg:pt-[80px] pt-[65px] lg:pb-[130px] pb-[100px]">
      <div className="ev-container">
        {/* Header */}
        <div className="flex flex-col justify-center items-center xl:mb-[48px] mb-[35px]">
          <h1 className="[leading-trim:both] [text-edge:cap] leading-none tracking-normal text-center font-semibold text-[#22603f] mb-[24px] text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px]">
            Empower Your Knowledge: Book a Session
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#5c5c5c] text-center">
            Select the plan that fits your learning goals and schedule.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {pricingData?.map((data) => (
            <div
              key={data.id}
              className="card bg-base-100 shadow-sm border border-[#38895e] h-full"
            >
              <div className="card-body h-full flex flex-col justify-between">
                {/* Popular Badge */}
                {data.recommended && (
                  <span className="badge badge-warning badge-xs self-start">
                    Popular
                  </span>
                )}

                {/* Title & Price */}
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{data.title}</h2>
                  <span className="text-lg">${data.price}/mo</span>
                </div>

                {/* Features */}
                <ul className="mt-6 flex flex-col gap-[12px] text-[16px]">
                  {data.listItem.map((item, i) => (
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
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-6">
                  <button
                    className={`btn btn-primary btn-block shadow-none border border-[#22603f] ${
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
          ))}
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
