var querystring = require('querystring');
var http = require('http');


console.log('Registering new user')

for (let index = 0; index < 1; index++) {
       register(index);
}

console.log('Registration finished')

function register(index) {
    console.log('Registering user' + index);

    var data = querystring.stringify({
        'readableName': 'the user' + index,
        'name': 'theuser' + index + '@gmail.com',
        'password': '9003d1df22eb4d3820015070385194c8',
        'game': 'iCanCode Contest',
        'data': 'js|0|company',
        'gameName': 'icancode'
    });
    
    var options = {
        host: "localhost",
        port: "80",
        path: "/codenjoy-contest/register",
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    var request = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
        console.log('Status: ' + res.statusCode);
        console.log('Location: ' + res.headers['location']);
    });

    request.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    console.log('Sending request: ' + data);
    request.write(data);
    request.end();
    console.log('Request has been sent');
}