const https = require('https');
const fs = require('fs');


async function downloadFiles(domain,array){
	
	for(var i=0;i < array.length;i++){
	
		https.get('https://' + domain + array[i],(res) => {
			res.on('data', (d) =>{
				process.stdout.write(d);
			});
		});
	}

	return new Promise(function(resolve, reject){
		resolve('print');	
	});

}

exports.downloadFiles = downloadFiles;
