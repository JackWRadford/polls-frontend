import styles from "./radioSelect.module.css";

interface Option {
  id: string;
  title: string;
}

interface RadioSelectProps {
  options: Option[];
  selectedOptionId: string | undefined;
  onSelect: (value: string) => void;
}

const RadioSelect = ({
  options,
  selectedOptionId,
  onSelect,
}: RadioSelectProps) => {
  const handleSelect = (value: string) => {
    onSelect(value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.id} className={styles.radioLabel}>
          <input
            type="radio"
            value={option.id}
            checked={selectedOptionId === option.id}
            onChange={() => handleSelect(option.id)}
          />
          {option.title}
        </label>
      ))}
    </div>
  );
};

export default RadioSelect;
