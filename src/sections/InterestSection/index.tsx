import { alias, interests } from "../../data/db";

const InterestSection = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* ALIAS DIVS */}
        <div className="flex items-center justify-center gap-4">
          {alias.map(({ icon, text }) => (
            <div
              key={text}
              className="itce flex items-center justify-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-[#FEFEFE]"
            >
              <img src={icon} alt="logo" className="size-5" />
              <span className="font-semibold first-letter:capitalize">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* INTEREST DIVS */}
        <div className="flex max-w-[52rem] flex-wrap items-center justify-center gap-4 text-primary-500">
          {interests.map((item) => (
            <div
              key={item}
              className="itce flex items-center justify-center gap-2 rounded-lg border-[1.5px] border-black/20 bg-transparent px-3 py-1"
            >
              <span className="font-medium leading-6 first-letter:capitalize">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InterestSection;
