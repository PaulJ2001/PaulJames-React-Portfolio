import React from "react";
const HobbyItem = ({ title, description }) => {
    return (
      <div className="p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    );
  };
  
  export default HobbyItem;