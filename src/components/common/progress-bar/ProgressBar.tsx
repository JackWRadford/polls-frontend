import { useMemo } from "react";
import styles from "./progressBar.module.css";

interface ProgressBarProps {
	value: number;
	maxValue?: number;
	ariaLabel?: string;
}

const ProgressBar = ({
	value,
	maxValue = 100,
	ariaLabel,
}: ProgressBarProps) => {
	const percentage = useMemo(
		() => Math.floor((value / maxValue) * 100),
		[maxValue, value]
	);

	return (
		<div
			className={styles.backgroundBar}
			aria-label={ariaLabel}
			role="progressbar"
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
