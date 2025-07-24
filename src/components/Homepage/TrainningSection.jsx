import TrainingCard from "./TrainingCard";

const TrainingSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-[28px] font-semibold text-[#143d3c] text-center">
        Professional Training Programs
      </h2>

      {/* Green Building Design Training */}
      <TrainingCard
        title="Green Building Design Training for Architects & Engineers"
        intro="Unlock Sustainability. Shape the Future."
        sections={[
          {
            heading: "Why Attend",
            type: "list",
            content: [
              "Drive Efficiency & Profit: Learn to slash energy and water use, leading to lower utility bills and reduced maintenance costs.",
              "Enhance Occupant Well‑Being: Master design strategies for improved indoor air quality, thermal comfort, and natural lighting — boosting occupant satisfaction.",
              "Elevate Your Professional Profile: Gain the skills to design green-certified buildings (LEED), opening doors to tax incentives, higher property valuations, and leadership roles.",
            ],
          },
          {
            heading: "What You'll Learn",
            type: "list",
            content: [
              "Core green design principles — site optimization, resource efficiency, material selection, and lifecycle thinking.",
              "The latest passive and active strategies: orientation, natural ventilation, high-performance envelopes, and renewables integration.",
              "Navigating green certification systems — LEED, BREEAM, WELL: criteria, documentation, and compliance.",
              "Harnessing tech tools like BIM & energy modeling (EnergyPlus, eQuest), essential for sustainability performance analysis.",
              "Real-world case studies and hands-on exercises for practical skill-building.",
            ],
          },
          {
            heading: "Who Can Join",
            type: "paragraph",
            content:
              "Architects & MEP Engineers, Sustainability Professionals, Freshers & Students.",
          },
        ]}
      />

      {/* Higg V4 FEM & FSLM Training */}
      <TrainingCard
        title="Higg V4 FEM (Level 1,2,3) & FSLM Training for Garment Industry Professionals"
        intro="Elevate your professional skill with Higg FEM v4 Training!"
        sections={[
          {
            heading: "",
            type: "paragraph",
            content:
              "Gain deep expertise in the Higg Facility Environmental Module (FEM) v4, the global standard used by over 24,000 organizations to measure and manage facility-level environmental impacts. Designed for manufacturers, brands, and sustainability professionals seeking accuracy, compliance, and leadership in ESG.",
          },
          {
            heading: "What You'll Learn",
            type: "list",
            content: [
              "Comprehensive overview of the Higg FEM v4 framework and scoring methodology (Level 1, 2, 3).",
              "Key updates and enhancements from FEM 3.0 — what’s new and why it matters.",
              "Practical guidance on assessment file preparation, answering questionnaires, data collection, reporting, and performance tracking across energy, water, waste, air emissions, and chemicals module.",
              "Hands-on strategies to identify opportunities, reduce environmental footprint, and boost operational efficiency.",
              "Insights into the SAC/Cascale verification process, enabling smoother audits and improved credibility.",
            ],
          },
          {
            heading: "Who Can Attend",
            type: "paragraph",
            content:
              "EHS & Compliance Professionals, Sustainability Leads, Facility Operators, Supply Chain Professionals, and Freshers aiming to lead environmental initiatives.",
          },
        ]}
      />
    </div>
  );
};

export default TrainingSection;
