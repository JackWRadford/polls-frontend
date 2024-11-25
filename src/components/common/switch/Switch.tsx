import styles from "./switch.module.css";

interface SwitchProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ id, label, checked, onChange }: SwitchProps) => {
  return (
    <div className={styles.switchContainer}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Switch;
