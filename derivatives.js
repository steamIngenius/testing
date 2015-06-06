var http = require('http');
var catList;

http.get('http://Medusa.local:8090/api/v1/catalog/?session=TOKEN-be62606a-b201-4a98-a1ce-2fdc492d9ed4',
    function(res) {
        var body = '';

        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            try {
                catList = JSON.parse(body);
            } catch(er) {
                console.log(er);
            }
        });
    });

