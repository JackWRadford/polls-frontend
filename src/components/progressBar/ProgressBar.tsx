import { useMemo } from "react";
import styles from "./progressBar.module.css";

interface ProgressBarProps {
	value: number;
	maxValue?: number;
}

const ProgressBar = ({ value, maxValue = 100 }: ProgressBarProps) => {
	const percentage = useMemo(
		() => Math.floor((value / maxValue) * 100),
		[maxValue, value]
	);

	return (
		<div
			className={styles.backgroundBar}
			aria-valuemin={0}
			aria-valuemax={maxValue}
			aria-valuenow={value}
		>
			<div
				className={styles.foregroundBar}
				style={{ width: `${percentage}%` }}
			></div>
		</div>
	);
};

export default ProgressBar;
