interface Props {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <button className={`rounded-lg px-6 py-3 font-semibold ${className}`}>
      {children}
    </button>
  );
};
export default Button;
