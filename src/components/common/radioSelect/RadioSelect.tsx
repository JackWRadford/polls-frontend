import { useState } from "react";
import styles from "./radioSelect.module.css";

interface Option {
	id: string;
	title: string;
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
				<label key={option.id} className={styles.radioLabel}>
					<input
						type="radio"
						value={option.id}
						checked={selectedValue === option.id}
						onChange={() => handleSelect(option.id)}
					/>
					{option.title}
				</label>
			))}
		</div>
	);
};

export default RadioSelect;
