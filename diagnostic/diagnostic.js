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
        'readableName': 'theuser ' + makeid(6),
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

    var request = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
        const status = res.statusCode;
        console.log('Status: ' + status);
        if (status == 303) {
            const location = res.headers['location'];
            console.log('Location: ' + location);
            openSession(location)
        }

    });

    request.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    console.log('Sending request: ' + data);
    request.write(data);
    request.end();
    console.log('Request has been sent');
}

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function openSession(location) {
    var uris = location.split("/")
    var creds = uris[uris.length - 1]
    var parts = creds.split("?code=")
    console.log('Name: ' + parts[0])
    console.log('Code: ' + parts[1])
}