const https = require('https');


async function downloadFiles(domain,array){
	for(var i=0;i < array.length;i++){
		console.log('https://' + domain + array[i]);
	/*
	https.get('https://' + domain + array[i], (res) => {
			res.on('data', (d) =>{
				process.stdout.write(d);
			});
		});
	*/
	}
	return new Promise(function(resolve, reject){
		resolve('pint');	
	});

}

exports.downloadFiles = downloadFiles;
