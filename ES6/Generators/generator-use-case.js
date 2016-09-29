const jsonfile = require('./fake-data/users.json');

// fake async sample
function fakeUsers() {
	return new Promise((resolve) => {
		
		setTimeout(() => {
			resolve(jsonfile);
		}, 2000)
		
	});

}

function controller(generator){
	
	const it = generator();
	
	const advancer = ({value, done}) => {
		if(!done){
			value.then( data => {
				advancer(it.next(data));
			})
		}
	};
	
	advancer(it.next());
	
}

// calling the controller with generator parameter

controller(function* gen() {
	console.log('fetching user data, waiting ...')
	const data = yield fakeUsers();
	console.log('fetching user data, Done!, here is your data...')
	console.log(data[0]);
});