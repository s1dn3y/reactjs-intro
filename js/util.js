function popularObjetoCom(args) {
	var obj = {};
	Object.keys(args).map(function(key){
		if (args[key]) {
			obj[key] = args[key];
		}
	});
	return obj;
}
