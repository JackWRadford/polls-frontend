export const emailIsValid = (email: string): boolean => {
	return email.trim().includes("@");
};
