import clsx from "clsx";
import { ReactNode, useMemo } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./linkButton.module.css";

export interface LinkButtonProps extends LinkProps {
  label?: string;
  level?: "primary" | "secondary" | "tertiary";
  fitContent?: boolean;
  children?: ReactNode;
  className?: string;
}

const LinkButton = ({
  label,
  level = "primary",
  fitContent = false,
  children,
  className,
  ...rest
}: LinkButtonProps) => {
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
    <Link
      className={clsx(styles.link, levelClass, className)}
      style={buttonStyle}
      {...rest}
    >
      {label}
      {children}
    </Link>
  );
};

export default LinkButton;
