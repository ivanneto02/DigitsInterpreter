export const randChar = () => {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	result += characters.charAt(Math.floor(Math.random() * characters.length));
	return result;
};
