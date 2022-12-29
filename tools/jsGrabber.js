/* Module that scrap a website and find JavaScript files. */

const https = require('https');
const beautify = require('js-beautify');
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
				const data_b = beautify(data);
				const jspaths = data_b.match(regex);
				for(var i=0; i < jspaths.length; i++){
					path = jspaths[i].substring(7);
					path.includes('http'||'https') ? '' : result.push(path);
				}
				resolve(result);
			});
		});
	});

}


exports.grab = grab;
