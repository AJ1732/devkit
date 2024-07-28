import Button from "../Button";
import sparkle from "../../assets/icons/sparkle.svg";
import logo from "../../assets/logos/logo.svg";

const Navbar = () => {
  const navlinks: string[] = ["Product", "Pricing", "Learn", "Company"];

  return (
    <header className="full-width px-6 md:px-10">
      <nav className="flex size-full items-center justify-between pb-4 pt-6">
        <div className="flex items-center justify-center gap-6 font-semibold">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-2xl">DevKit</h1>
          </div>

          <button className="from-primary-500 flex items-center justify-center gap-1 rounded-lg bg-gradient-to-b to-[#2b0D67] px-4 py-3">
            <img src={sparkle} alt="sparkle" />
            <span className="text-white">Get premium</span>
          </button>
        </div>

        <ul className="text-primary-500 flex items-center justify-center gap-4 *:px-4 *:font-medium max-lg:hidden">
          {navlinks.map((navlink) => (
            <li>{navlink}</li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-3 max-lg:hidden">
          <Button>Login</Button>
          <Button className="shadow-md">Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
