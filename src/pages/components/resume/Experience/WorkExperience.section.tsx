import React from "react";
import SectionTitle from "../SectionTitle";
import Responsibilities from "./Responsabilities";
import Company, { ICompany } from "./Company";

interface WorkExperienceItem {
  company: ICompany;

  role: string;
  duration: string;
  responsibilities?: string[];
  description: string | React.ReactNode;
}

interface WorkExperienceProps {
  experience?: WorkExperienceItem[];
}
const workExperienceData: WorkExperienceItem[] = [
  {
    company: {
      name: "Anthill",
      location: "Sofia, Bulgaria",
      link: "https://anthill.one/",
    },
    role: "Senior Software Engineer",
    duration: "Nov 2023 - Present",
    description:
      "Design, development, and maintenance software solutions for automotive leasing industry",
    responsibilities: [
      "Car Catalogue - Full-stack Application for car leasing",
      "Car Index - ETL, from data sources(raw data) to content in CMS",
      "Monitoring - Cloudwatch Dashboards for services",
      "GitHub Workflow pipelines - Automated build, static code analysts(SonarCloud), test, and deployment lifecycles on GitHub",
    ],
  },
  {
    company: {
      name: "TechPods",
      location: "Sofia, Bulgaria",
      link: "https://www.techpods.co/",
    },
    role: "Full Stack Engineer",
    duration: "Apr 2022 - Oct 2023",
    description: (
      <span>
        Fullstack Software at Engineer{" "}
        <a
          href="https://www.cleartreasury.co.uk/"
          target="_blank"
          className="underline"
        >
          Clear Treasury
        </a>{" "}
        dedicated team
      </span>
    ),
    responsibilities: [
      "Design, architecture, and development of a platform for Foreign Exchange and international payments and financial instruments",
      "CI/CD pipelines",
      "Trunk-based development",
    ],
  },
  {
    company: {
      name: "Programmicat",
      location: "Sofia, Bulgaria",
      link: "https://programmicat.bg/",
    },
    role: "Full Stack Engineer",
    duration: "Mar 2019 - Apr 2022",
    description:
      "Design, development, modernization, and maintenance of Corporate Social Reponsability(CSR) and Environmental, Social and Governance (ESG) platform",
    responsibilities: [
      "Collecting, filtering, aggregating and normalizing data for companies",
      "Provisioning web interface",
      "CMS support (Comfortable Mexican Sofa)",
      "eCommerce (Spree)",
      "Modernization of legacy project (from RoR to NextJS)",
      "Team lead",
    ],
  },
  {
    company: {
      name: "(Freelancer)",
      location: "Rudozem, Bulgaria",
    },
    description:
      "Software development. Application for automobile history tracking, maintenance schedules, service checks, insurance, technical inspection.",
    duration: "Nov 2018 - Mar 2019",
    role: "Full Stack Engineer",
    responsibilities: [],
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
              <div className="lg:w-3/4 w-full flex flex-col gap-2">
                <h3 className="text-center lg:text-left">
                  <span className="text font-semibold text-gray-900 dark:text-white">
                    {item.role}
                  </span>{" "}
                  at <Company {...item.company} />
                </h3>
                <p className="text-rsm-main text-center lg:text-start">
                  {item.description}
                </p>

                <Responsibilities items={item.responsibilities || []} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WorkExperience;
