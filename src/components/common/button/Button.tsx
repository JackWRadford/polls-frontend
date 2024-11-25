import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  level?: "primary" | "secondary" | "tertiary";
  fitContent?: boolean;
  children?: ReactNode;
  isLoading?: boolean;
  className?: string;
}

const Button = ({
  onClick,
  label,
  level = "primary",
  fitContent = false,
  children,
  isLoading = false,
  className,
  ...rest
}: ButtonProps) => {
  const levelClass = useMemo(() => {
    switch (level) {
      case "primary":
        return "";
      case "secondary":
        return styles.secondary;
      case "tertiary":
        return styles.tertiary;
    }
  }, [level]);
  const buttonStyle = fitContent ? { width: "fit-content" } : {};

  return (
    <button
      style={buttonStyle}
      className={clsx(styles.button, levelClass, className)}
      onClick={onClick}
      {...rest}
    >
      {!isLoading && label}
      {!isLoading && children}
      {isLoading && <LoadingIndicator />}
    </button>
  );
};

export default Button;
