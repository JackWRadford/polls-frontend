import { ReactNode } from "react";
import styles from "./card.module.css";
import clsx from "clsx";

interface CardProps {
	className?: string;
	children: ReactNode;
}

const Card = ({ className, children }: CardProps) => {
	return <div className={clsx(className, styles.card)}>{children}</div>;
};

export default Card;
