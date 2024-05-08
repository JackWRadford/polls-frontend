import { useState } from "react";
import styles from "./radioSelect.module.css";

interface Option {
	value: string;
	label: string;
}

interface RadioSelectProps {
	options: Option[];
	onSelect: (value: string) => void;
}

const RadioSelect = ({ options, onSelect }: RadioSelectProps) => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	const handleSelect = (value: string) => {
		setSelectedValue(value);
		onSelect(value);
	};

	return (
		<div>
			{options.map((option) => (
				<label key={option.value} className={styles.radioLabel}>
					<input
						type="radio"
						value={option.value}
						checked={selectedValue === option.value}
						onChange={() => handleSelect(option.value)}
					/>
					{option.label}
				</label>
			))}
		</div>
	);
};

export default RadioSelect;
