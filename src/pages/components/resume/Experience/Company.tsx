import React from "react";

export interface ICompany {
  name: string;
  location?: string;
  logo?: string;
  link?: string;
}

const Company: React.FC<ICompany> = (props: ICompany) => {
  return (
    <span className="font-semibold text-gray-900 dark:text-white">
      <a
        className={`${
          props.link && "underline"
        } font-normal" target="_blank" href={props.link}`}
      >
        {props.name}
      </a>
      {props.location && ` | ${props.location}`}
    </span>
  );
};

export default Company;
