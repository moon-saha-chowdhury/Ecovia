const TrainingCard = ({ title, intro, sections }) => {
  return (
    <div className="bg-[#f0f0f2] p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 space-y-4">
      <h3 className="text-[20px] font-semibold text-[#143d3c]">{title}</h3>
      <p className="text-[#5c5c5c]">{intro}</p>

      {sections.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="text-[16px] font-semibold text-[#143d3c]">
            {section.heading}
          </h4>
          {section.type === "list" ? (
            <ul className="list-disc list-inside text-[#5c5c5c] space-y-1">
              {section.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-[#5c5c5c]">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrainingCard;
