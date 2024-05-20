import { ReactNode, useEffect, useRef } from "react";
import styles from "./dialog.module.css";
import Button, { ButtonProps } from "../common/button/Button";

interface DialogProps {
	title: string;
	message: string;
	isOpen: boolean;
	buttons?: ButtonProps[];
	children?: ReactNode;
	defaultButtonLabel?: string;
	hideDefaultButton?: boolean;
	onClose: () => void;
}

const Dialog = ({
	title,
	message,
	isOpen,
	children,
	buttons = [],
	defaultButtonLabel,
	hideDefaultButton,
	onClose,
}: DialogProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen) {
			ref.current?.showModal();
			document.body.classList.add("model-open");
		} else {
			ref.current?.close();
			document.body.classList.remove("model-open");
		}
	}, [isOpen]);

	return (
		<dialog ref={ref} className={styles.dialog}>
			<div className={styles.dialogContent}>
				<h3>{title}</h3>
				<p>{message}</p>
				{children}
				<div className={styles.buttonsContainer}>
					{buttons.map((buttonProps) => (
						<Button {...buttonProps} />
					))}
					{!hideDefaultButton && (
						<Button
							label={defaultButtonLabel ?? "Okay"}
							onClick={onClose}
						/>
					)}
				</div>
			</div>
		</dialog>
	);
};

export default Dialog;
