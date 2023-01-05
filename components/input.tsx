import { InputHTMLAttributes, MutableRefObject } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: string;
  placeholder: string;
  customAttr?: any;
  ref?: MutableRefObject<HTMLInputElement | null>;
}

const Input = ({
  className,
  type,
  placeholder,
  customAttr,
  value,
  ref,
}: InputProps) => {
  return (
    <input
      className={`border py-3 pr-4 pl-11 text-primary  ${className}`}
      type={type}
      ref={ref}
      placeholder={placeholder}
      {...customAttr}
      value={value}
    />
  );
};

export default Input;
