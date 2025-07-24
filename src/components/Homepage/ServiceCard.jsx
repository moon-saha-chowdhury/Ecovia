import Image from "next/image";

const ServiceCard = ({ title, description, subtitle, items }) => {
  return (
    <div className="bg-[#f0f0f2] p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-[20px] font-semibold text-[#143d3c]">{title}</h3>
      </div>
      <p className="text-[#5c5c5c] mb-4">{description}</p>
      <h4 className="text-[18px] font-semibold text-[#143d3c] mb-2">
        {subtitle}
      </h4>
      <ul className="list-disc list-inside text-[#5c5c5c] space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
