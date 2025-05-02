import React, { ReactNode } from "react";

interface EdiSectionProps {
  children: [ReactNode, ReactNode];
}

const EduSection: React.FC<EdiSectionProps> = ({ children }) => {
  if (!Array.isArray(children) || children.length !== 2) {
    throw new Error("TwoChildrenWrapper requires exactly two children.");
  }

  const [from, to] = children;

  return (
    <div
      className={`
        w-full py-6 flex flex-row gap-6 flex-wrap lg:flex-nowrap lg:justify-start justify-center
      `}
    >
      <div className="text-rsm-tertiary lg:w-1/4">{from}</div>
      <div className="lg:w-3/4">{to}</div>
    </div>
  );
};

export default EduSection;
