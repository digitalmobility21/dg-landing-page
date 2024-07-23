export const toUpperCaseFirstChar = (value: string) => {
	if (value) {
		const [first, ...rest] = value.trim();
		return first.toUpperCase() + rest.join('').toLowerCase();
	}
	return '';
};
export const getMaxStringLength = (text: string, maxLength = 25): string => {
	if (text.length <= maxLength) {
		return text;
	}
	return `${text.slice(0, maxLength - 3)}...`;
};

export const getFullName = (input: any) => {
	return `${input?.firstName || ''} ${input?.lastName || ''}`;
};
export const getInitials = (input: { firstName: string; lastName: string }): string => {
	// Get the first letter of the first name and last name
	const firstInitial = input?.firstName.charAt(0).toUpperCase();
	const lastInitial = input?.lastName.charAt(0).toUpperCase();

	// Return the initials
	return `${firstInitial}${lastInitial}`;
};

