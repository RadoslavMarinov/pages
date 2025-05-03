import ListTick from "@/components/icons/Tick";
import React from "react";

interface ResponsibilitiesProps {
  items: string[];
}

const Responsibilities: React.FC<ResponsibilitiesProps> = ({ items }) => {
  return (
    <ul className="my-4 space-y-1 text-gray-600 dark:text-gray-400">
      {items.map((item, index) => (
        <li
          className="flex items-center lg:justify-start space-x-3 lg: rtl:space-x-reverse"
          key={index}
        >
          <ListTick className="text-rsm-secondary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default Responsibilities;
