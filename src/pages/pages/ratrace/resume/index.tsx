import Education from "@/components/resume/Education";
import MainSection from "@/components/resume/MainSection";
import Objective from "@/components/resume/Objective";
import WorkExperience from "@/components/resume/Experience/WorkExperience.section";
import { StaticImage } from "@/components/StaticImage";
import React from "react";

const ResumePage: React.FC = () => {
  return (
    <div
      id="resume-page"
      style={{}}
      className="justify-center flex flex-col md:flex-row "
    >
      {/* HEADING BAR */}

      <div className="flex-grow w-full md:max-w-64 md:min-w-52 flex flex-col items-center text-center text-white bg-rsm-main basis-1/5 min-w-32 p-4">
        <StaticImage
          src="rsm-image.jpeg"
          className="shadow-rsm-secondary max-w-36 border rounded-[50%] shadow-lg "
        ></StaticImage>
        <span>Resume</span>
      </div>
      {/* CONTENT SECTION */}
      <MainSection>
        <Objective></Objective>
        <Education></Education>
        <WorkExperience />
      </MainSection>
    </div>
  );
};

export default ResumePage;
