import React from "react";
import SectionTitle from "./SectionTitle";

interface WorkExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface WorkExperienceProps {
  experience?: WorkExperienceItem[];
}
const workExperienceData: WorkExperienceItem[] = [
  {
    company: "TechCorp Inc.",
    role: "Software Engineer",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained web applications using React and TypeScript.",
  },
  {
    company: "Innovate Solutions",
    role: "Frontend Developer",
    duration: "Jun 2017 - Dec 2019",
    description:
      "Collaborated with designers and backend developers to create user-friendly interfaces.",
  },
];
const WorkExperience: React.FC<WorkExperienceProps> = ({
  experience,
}: WorkExperienceProps) => {
  return (
    <div>
      <SectionTitle title="Work Experience"></SectionTitle>
      <section>
        <ul>
          {(experience || workExperienceData).map((item, index) => (
            <li
              className={`
            w-full py-6 flex flex-row gap-6 flex-wrap lg:flex-nowrap lg:justify-start justify-center
          `}
              key={index}
            >
              <h2 className={`text-rsm-tertiary lg:w-1/4`}>{item.duration}</h2>
              <div>
                <h3>
                  {item.role} at {item.company}
                </h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WorkExperience;
