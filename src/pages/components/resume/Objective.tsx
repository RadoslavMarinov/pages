import React from "react";
import SectionTitle from "./SectionTitle";

const Objective: React.FC = () => {
  return (
    <div>
      <SectionTitle title="Objective"></SectionTitle>
      <div className="flex flex-col items-center text-center">
        <p className="my-2">
          Software Developer with over 10 years of experience leading and
          collaborating on diverse projects, including the development of
          software, frameworks, and libraries, as well as resolving complex
          problems in existing systems. Having deep expertise in advanced
          software design patterns and methodologies. Self-motivated, proactive,
          and a team player with the ability to work independently and deliver
          results effectively.
        </p>
        <p className="my-2">
          I am an open-minded professional with a passion for exploring and
          adopting new technologies, frameworks, and tools. I thrive on
          developing and implementing innovative ideas that drive company growth
          and efficiency. With a problem-solving mindset, I approach challenges
          from multiple perspectives, employing diverse methods to find
          effective solutions. Eager to share knowledge and continuously learn,
          I excel in both collaborative team environments and independent work
          settings
        </p>
        <p className="my-2">
          My goal is to build a long-term relationship with a company where I
          can contribute to its success while growing professionally and
          personally.
        </p>
      </div>
    </div>
  );
};

export default Objective;
