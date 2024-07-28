interface Props {
  src?: string;
  title?: string;
  caption?: string;
}

const Card: React.FC<Props> = ({ src, title, caption }) => {
  return (
    <article className="size-full max-w-72 space-y-8 rounded-3xl bg-white p-6">
      <figure className="rounded-lg bg-neutral-100">
        <img
          src={src}
          alt="Card Image"
          className="h-40 w-60 rounded-lg object-cover"
        />
      </figure>

      <div className="space-y-2 text-center">
        <h3 className="font-semibold text-primary-500 first-letter:capitalize">
          {title}
        </h3>
        <p className="text-xs font-medium text-fade-100">{caption}</p>
      </div>
    </article>
  );
};
export default Card;
