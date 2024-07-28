import search from "../../assets/icons/search.svg";

const HeadlineSection = () => {
  return (
    <section className="pt-16">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="border-tint-200 bg-tint-300 flex w-fit items-center justify-center rounded-full border-2 px-4 py-2">
          <span className="font-medium">
            Products for Designers and Developers
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="from-primary-500 max-w-[43rem] bg-gradient-to-b from-[10.16%] to-[#3C0A67] to-[91.41%] bg-clip-text text-[4rem] font-semibold leading-[4rem] tracking-[-0.25rem] text-transparent">
            The ultimate library of templates & components for the creators
          </h1>
          <p className="text-fade-200 max-w-[61rem] text-lg font-medium leading-6">
            Premium templates at your fingertips. DevKit is the world’s largest
            library of Webflow, Figma & Framer components and tools. Enjoy
            hassle-free, highly efficient and faster development with DevKit
          </p>
        </div>

        <div className="flex w-full max-w-lg items-center justify-center gap-4 rounded-xl px-6 py-4 shadow-md">
          <label htmlFor="search">
            <img src={search} alt="Search Icon" />
          </label>

          <input
            type="text"
            name="Search"
            id="search"
            placeholder="Search templates, assests and more..."
            className="placeholder:text-[rgba(23, 3, 66, 0.40)] size-full bg-transparent font-medium leading-6 outline-none"
          />
        </div>
      </div>
    </section>
  );
};
export default HeadlineSection;
