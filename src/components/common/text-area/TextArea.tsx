import { TextareaHTMLAttributes } from "react";
import styles from "./textArea.module.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

const TextArea = ({ placeholder, ...rest }: TextAreaProps) => {
  return (
    <textarea className={styles.textArea} placeholder={placeholder} {...rest} />
  );
};

export default TextArea;
