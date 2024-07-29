"use client";
import { useState } from "react";
import Button from "../Button";
import sparkle from "../../assets/icons/sparkle.svg";
import logo from "../../assets/logos/logo.svg";
import menu from "../../assets/icons/menu.svg";

const Navbar = () => {
  const navlinks: string[] = ["Product", "Pricing", "Learn", "Company"];

  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="full-width fixed z-50 w-full bg-white px-6 md:px-10">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between py-2 lg:pb-4 lg:pt-6">
        <div className="flex items-center justify-start gap-6 font-semibold">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-lg lg:text-2xl">DevKit</h1>
          </div>

          <button className="flex items-center justify-center gap-1 rounded-lg bg-gradient-to-b from-primary-500 to-[#2b0D67] px-3 py-2.5 lg:px-4 lg:py-3">
            <img src={sparkle} alt="sparkle" />
            <span className="text-white max-md:text-sm max-sm:hidden">
              Get premium
            </span>
          </button>
        </div>

        <ul className="flex items-center justify-center gap-4 text-primary-500 *:px-4 *:font-medium max-lg:hidden">
          {navlinks.map((navlink) => (
            <li key={navlink}>{navlink}</li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-3 max-lg:hidden">
          <Button>Login</Button>
          <Button className="shadow-md bg-primary-500 text-white shadow-tint-200">Sign Up</Button>
        </div>

        <Button
          className="-mr-6 lg:hidden"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          <img src={menu} />
        </Button>
      </nav>

      {/* MOBILE VIEW NAVIGATION */}
      <div
        className={`${!openNav && "!hidden"} full-width content-grid absolute inset-x-0 top-[100%] min-h-[calc(100dvh-5rem)] w-full md:!hidden`}
      >
        <div
          onClick={() => setOpenNav((prev) => !prev)}
          className="full-width absolute inset-0 size-full bg-tint-100/50 backdrop-blur-sm"
        ></div>

        <nav className="z-10 mt-10 h-fit rounded-md bg-[rgba(235,_239,_255)] px-4 py-8">
          <ul className="flex flex-col items-center justify-center gap-4 text-primary-500 *:px-4 *:font-medium">
            {navlinks.map((item, i) => (
              <li key={i} onClick={() => setOpenNav((prev) => !prev)}>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col mt-8 *:w-full items-center justify-center gap-2">
            <Button className="border border-primary-500">Login</Button>
            <Button className="shadow-md bg-primary-500 text-white shadow-tint-200">Sign Up</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
