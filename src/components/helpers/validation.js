export const validationNameCity = (nameCity) => {
	const validCity = new RegExp(/^[a-z]{1,35}$/, 'i');
	if (!validCity.test(nameCity)) {
		return false;
	}
	return true;
};
