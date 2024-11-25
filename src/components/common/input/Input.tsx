import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ placeholder, value, onChange, ...rest }: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Input;
