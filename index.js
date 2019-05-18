function Test() {
	this.data = {};
}

Test.prototype.create = function() {
	const items = arguments;
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

Test.prototype.delete = function(string) {
	const items = string.split('/')
}


