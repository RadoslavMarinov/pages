import Link from "next/link";
import { Burger } from "../Items/Burger/Burger";
import React from "react";
import NavLink from "../Links/NavLinks/NavLink";

interface NavItem {
  label: string;
  link: string;
}

interface MainNavProps {}

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Mabout",
    link: "/about/mabout",
  },
];

export const MainNav = ({}: MainNavProps) => {
  const [open, setOpen] = React.useState(false);

  const navItemClicked = (label: string) => {
    setOpen(false);
  };

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <nav
        className={`
        absolute
        bg-default
        font-bold
        text-lg
        min-w-[280px]
        md:w-full
        h-screen
        right-0
        md:left-0
        transition-transform duration-200 ease-out
        md:translate-x-0
         ${open ? "min-w-52" : "translate-x-full"}
        `}
      >
        <div
          className={`
          flex 
          flex-col
          md:flex-row 
        `}
        >
          {navItems.map(({ label, link }, idx) => (
            <NavLink
              onClick={() => navItemClicked(label)}
              key={idx}
              href={link}
              label={label}
            ></NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};
