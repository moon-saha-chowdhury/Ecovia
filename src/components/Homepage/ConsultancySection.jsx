import ServiceCard from "./ServiceCard";

const ConsultancySection = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-[28px] font-semibold text-[#143d3c] text-center">
        Industrial Consultancy Services
      </h2>

      {/* Industrial Facility Design */}
      <ServiceCard
        title="Industrial Facility Design for Garment, Dyeing, Knitting, Spinning Unit"
        description="Aiming to design the next generation of efficient, adaptable, and high-performance industrial facilities, I bring hands-on expertise in Industry 5.0 facility design that focuses on sustainable manufacturing practices and collaborates with clients from the earliest conceptual stages through final build-out."
        subtitle="Core Services Offered:"
        items={[
          "AutoCAD-based Plans: Project Site Plan",
          "Architectural Floor Layout",
          "Machine Layout",
          "Electrical Layout – SLD & ELD",
          "Plumbing Layout",
          "HVAC Layout",
          "Project 3D Visualization",
        ]}
      />

      {/* LEED Certification */}
      <ServiceCard
        title="LEED Certification for New Building (BD+C) and Existing Building (EB O+M)"
        description="With a strong foundation in sustainable design and green building standards, I bring comprehensive LEED consultancy expertise to industrial projects. Specializing in guiding clients from initial feasibility to final certification."
        subtitle="Core Services Offered:"
        items={[
          "Certification Strategy & Feasibility Assessments",
          "Design Evaluation & Energy Modeling",
          "Commissioning & Performance Evaluation",
          "Documentation, Submission & Certification",
        ]}
      />

      {/* Green Finance */}
      <ServiceCard
        title="Green Finance"
        description="Bangladesh Bank’s low-cost green refinance schemes, offered at up to 5% interest rates, can enable the apparel industry to channel this capital towards green projects. Apparel industries are shifting their focus to energy-efficient production and rooftop solar while new industries consider a whole-system-design approach to minimize energy consumption through the most efficient technologies."
        subtitle="Core Services Offered:"
        items={[
          "Prepare and organize necessary documents for industries to avail the low-cost green refinance from the bank.",
        ]}
      />

      {/* Higg V4 FEM & FSLM */}
      <ServiceCard
        title="Higg V4 FEM & FSLM Assessment for Apparel Industry"
        description="The Higg Index is the most comprehensive and holistic framework in the world for measuring sustainability performance in the apparel industry. As a certified Higg professional, I bring expertise to help apparel industries prepare for Higg v4 FEM & FSLM assessments and verifications."
        subtitle="Core Services Offered:"
        items={[
          "Higg v4 FEM (Level 1, 2, 3) Assessment File Preparation",
          "Higg v4 FSLM Assessment File Preparation",
        ]}
      />
    </div>
  );
};

export default ConsultancySection;
