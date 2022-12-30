const jsGrabber = require('./tools/jsGrabber');
const downloadJsArr = require('./tools/downloadJsArray.js');

domain = process.argv[2];
path = process.argv[3];

function main() {
	if(domain == undefined || path == undefined){
		console.log('You need to provide a domain and a path');
		process.exit();
	}
	const JsFiles = jsGrabber.grab(domain,path)
	//.then(result => console.log(result));
	.then(result => downloadJsArr.downloadFiles(domain,result));
}

if(require.main == module){
	main();
}
