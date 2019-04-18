var querystring = require('querystring');
var http = require('http');


console.log('Registering new user')

for (let index = 0; index < 10; index++) {
       register(index);
}

console.log('Registration finished')

function register(index) {
    console.log('Registering user' + index);

    var readableName = 'test+user' + index;
    var name = 'user' + index + '%40gmail.com';
    var data = 'readableName=' + readableName + '&name=' + name + '&password=9003d1df22eb4d3820015070385194c8&game=iCanCode+Contest&data=js%7C0%7Ccompany&gameName=icancode';

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