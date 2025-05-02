import React from "react";
import SectionTitle from "./SectionTitle";
import EduSection from "./EduSection";

const Education: React.FC = () => {
  return (
    <div className="w-full">
      <SectionTitle title="Education"></SectionTitle>
      <div className="w-full flex flex-col items-center">
        <EduSection>
          <div>2004 September - 2007 June</div>
          <div>
            Second Qualification Level Specialist - Electronics / Technical
            School “Vasil Dimitrov” - Madan, Bulgaria
          </div>
        </EduSection>

        <EduSection>
          <div>2007 September - 2013 September</div>
          <div>
            Master Degree - Electrical Engineering / University of Transport
            “Todor Kableshkov” - Sofia, Bulgaria
          </div>
        </EduSection>
        <div className="font-bold self-start text-rsm-secondary">
          Training courses:
        </div>
        <EduSection>
          <div>2015 June - 2015 September</div>
          <div>
            <div className="font-bold">
              Software Testing / SoftAcad - Sofia, Bulgaria
            </div>
            <ul className=" ml-4 list-disc list-inside">
              <li>Software Development Methodologies (Agile, Waterfall)</li>
              <li>Quality Assurance</li>
              <li>Test Tools (Bugzilla, Selenium)</li>
            </ul>
          </div>
        </EduSection>
      </div>
    </div>
  );
};

export default Education;
