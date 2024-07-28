import { Card } from "../../components";
import { cards } from "../../data/db";

const CardSection = () => {
  return (
    <section className="w-fit rounded-[2.25rem] bg-[#F3F6FF] p-6 mb-16">
      <div className="flex w-fit flex-wrap items-center justify-center gap-6">
        {cards.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </section>
  );
};
export default CardSection;
