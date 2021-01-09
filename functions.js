const axios = require('axios');

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = { firstName: 'Dinesh' };
		user['lastName'] = 'DSV';
		return user;
	},
	fetchUser: async () => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
		return data;
	},
	// axios
	// 	.get('https://jsonplaceholder.typicode.com/users/1')
	// 	.then((res) => res.data)
	// 	.catch((error) => 'error'),
};

module.exports = functions;
