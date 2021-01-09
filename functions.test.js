const functions = require('./functions');

test('Adds 2 + 2 to equals to 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

// test('Adds 2 + 2 to equals to 4', () => {
// 	expect(functions.add(2, 2)).not.toBe(4);
// });

test('Should be Null', () => {
	expect(functions.isNull()).toBeNull();
});

test('Should be Falsy', () => {
	expect(functions.checkValue(0)).toBeFalsy();
});
// Object or array referece data types
test('User Should retrun Dinesh DSV', () => {
	expect(functions.createUser()).toEqual({ firstName: 'Dinesh', lastName: 'DSV' });
});
// Arrays
test('Admin should be in username', () => {
	usernames = ['dinesh', 'sheki', 'admin'];
	expect(usernames).toContain('admin');
});
// Working with async data

// Promise
test('User Fetched name API test Promise', () => {
	expect.assertions(1);
	return functions.fetchUser().then((data) => {
		expect(data.name).toEqual('Leanne Graham');
	});
});

// Async function
test('User Fetched name API test Async', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});
