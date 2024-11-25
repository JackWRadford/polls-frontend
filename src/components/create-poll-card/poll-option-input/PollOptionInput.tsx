import { HiXMark } from "react-icons/hi2";
import Button from "../../common/button/Button";
import Input, { InputProps } from "../../common/input/Input";
import styles from "./pollOptionInput.module.css";

interface OptionInput extends InputProps {
  onDelete: () => void;
}

const PollOptionInput = ({ onDelete, ...rest }: OptionInput) => {
  return (
    <li className={styles.container}>
      <Input {...rest} type="text" />
      <Button
        type="button"
        onClick={onDelete}
        level="secondary"
        aria-label="Remove option"
      >
        <HiXMark size={20} />
      </Button>
    </li>
  );
};

export default PollOptionInput;
