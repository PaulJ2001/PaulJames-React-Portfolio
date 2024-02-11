import React from "react";

const WorkExperienceItem = ({ title, company, duration, responsibilities }) => {
    return (
      <div className="bg-[#181818] p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-lg italic text-white">{company} | {duration}</p>
        <ul className="text-white">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WorkExperienceItem;