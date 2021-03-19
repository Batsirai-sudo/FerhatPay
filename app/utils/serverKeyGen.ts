const users = [];

const genApiKey = () => {
	return [...Array(30)].map((x) => ((Math.random() * 36) | 0).toString(36)).join('');
};

const createUser = (_email, req) => {
	const today = new Date().toISOString().split('T')[0];
	let user = {
		_id: Date.now(),
		apiKey: genApiKey(),
		email: _email,
		host: req.headers.origin,
		usage: [{ date: today, count: 0 }],
	};

	users.push(user);
};

const validteKey = (req, res, next) => {
	let host = req.headers.origin;
	let apiKey = req.query.apiKey; //version 1.
	let account = users.find((u) => u.host === host && u.apiKey === apiKey);

	if (account) {
		const today = new Date().toISOString().split('T')[0];
		let usageIndex = account.usage.findIndex((day) => day.date === today);

		if (usageIndex >= 0) {
			/// already used today

			if (account.usage[usageIndex].count >= 25) {
				res.status(429).send({
					error: {
						code: 429,
						message: 'Max API calls exceeded',
					},
				});
			} else {
				// you havent reached max usage
				account.usage[usageIndex].count++;
				console.log('Good Api call');
				next();
			}
		} else {
			account.usage.push({ date: today, count: 1 });
		}
	}
};
