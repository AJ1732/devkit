interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-6 py-3 font-semibold ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
