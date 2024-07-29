import search from "../../assets/icons/search.svg";

const HeadlineSection = () => {
  return (
    <section className="pt-16">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex w-fit items-center justify-center rounded-full border-2 border-tint-200 bg-tint-300 px-4 py-1.5 sm:py-2">
          <span className="font-medium max-md:text-sm">
            Products for Designers and Developers
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="max-w-xl leading-[3rem] md:max-w-2xl bg-gradient-to-b from-primary-500 from-[10.16%] to-[#3C0A67] to-[91.41%] bg-clip-text text-[2.75rem] font-semibold text-transparent max-md:tracking-tighter md:text-[3.45rem] lg:max-w-[43rem] lg:text-[4rem] lg:leading-[4rem] lg:tracking-[-0.25rem]">
            The ultimate library of templates & components for the creators
          </h1>
          <p className="max-w-2xl text-sm font-medium leading-6 text-fade-200 sm:text-lg md:text-base lg:max-w-[61rem]">
            Premium templates at your fingertips. DevKit is the world’s largest
            library of Webflow, Figma & Framer components and tools. Enjoy
            hassle-free, highly efficient and faster development with DevKit
          </p>
        </div>

        <div className="flex w-full max-w-lg items-center justify-center gap-4 rounded-xl px-6 py-4 shadow-md shadow-tint-300">
          <label htmlFor="search">
            <img src={search} alt="Search Icon" />
          </label>

          <input
            type="text"
            name="Search"
            id="search"
            placeholder="Search templates, assests and more..."
            className="size-full bg-transparent text-sm font-medium leading-6 outline-none placeholder:text-[rgba(23,_3,_66,_0.40)]"
          />
        </div>
      </div>
    </section>
  );
};
export default HeadlineSection;
