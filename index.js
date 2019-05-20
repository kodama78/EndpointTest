function Test() {
	this.data = {};
}

Test.prototype.create = function(string) {
	const items = string.split('/');
	const data = {};
	Array.prototype.reduce.call(items, function (object, key) {
		if (!object[key]) {
			return object[key] = object[key] ? Object.assign(object[key], {}) : {};
		}
	}, data)
};

Test.prototype.list = function(directory) {
	console.log(directory);
}

Test.prototype.move = function(location, destination) {
	const workingDirectory = location.split('/');
	const newDirectory = destination.split('/');

	this.create(newDirectory.concat(workingDirectory[workingDirectory.length-1]));
	this.delete(workingDirectory.reduct )
}

Test.prototype.delete = function(path) {
	const _obj = JSON.parse(JSON.stringify(obj));
	const keys = path.split('/');

	keys.reduce((acc, key, index) => {
		console.log(acc);
		if (index === keys.length - 1) {
			delete acc[key];
			return true;
		}
		return acc[key];
	}, _obj);

	return _obj;
}


