import React, { useState } from "react";

const TAB_LABLE = [
  "Information",
  "WorkExperience",
  "Project",
  "Activity",
  "Education",
  "Certificate",
  "Award",
];

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col my-4 mb-20">
      <div className="flex justify-center mb-4">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={`mr-4 py-2 px-4 rounded-md ${
              activeTab === index ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange(index)}
          >
            {TAB_LABLE[index]}
          </button>
        ))}
      </div>
      <div>{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default TabLayout;
