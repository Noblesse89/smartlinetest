function A(cb) {
	setTimeout(() => {
		cb('A executed');
	}, 500)
}

function B(cb) {
	setTimeout(() => {
		cb('B executed');
	}, 800)
}

function C(cb) {
	setTimeout(() => {
		cb('C executed');
	}, 1000)
}

function ToServer(all_data) {
	console.log(all_data);
}

const proceedExecution = () => {
	return Promise.all(
		[
			new Promise((resolve, reject) => A(resolve)),
			new Promise((resolve, reject) => B(resolve)),
			new Promise((resolve, reject) => C(resolve))
		])
}
proceedExecution().then(ToServer);