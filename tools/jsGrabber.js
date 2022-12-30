/* Module that scrap a website and find JavaScript files. */

const https = require('https');
var result = [];

async function grab(domain,path){
	const options = {
		method: 'GET',
		host: domain,
		port: 443||80,
		headers:{
			'User-Agent': 'Mozilla/5.0 (SMART-TV; LINUX; Tizen 4.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 TV Safari/537.36'
		},
		path: path
	}
	return new Promise(function(resolve, reject){		
		var data = '';
		var req = https.get(options,(res) => {
			res.on('data', (chunk) =>{
				data += chunk;
			});
			res.on('end', () => {		
				//	const regex = /(src)"*.*\.js/gm;
				const regex = /(src).*(\.js)/gm;
				const jspaths = data.match(regex);
				for(var i=0; i < jspaths.length; i++){
					const regex = /(h|\/).*(\.js)/gm
					const path = jspaths[i].match(regex)[0];
					path.includes('http'||'https') ? '' : result.push(path);
				}
				resolve(result);
				
			});
		});
	});

}


exports.grab = grab;
