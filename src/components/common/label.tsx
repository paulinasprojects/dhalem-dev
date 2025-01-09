
interface LabelProps {
  label: string;
  className?: string;
  htmlFor?: string;
};

const Label = ({ label, className, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>{label}</label>
  );
};

export default Label;