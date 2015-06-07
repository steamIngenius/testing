var fs = require('fs'),
    http = require('http'),
    url = 'http://Medusa.local:8090/api/v1',
    path = '/catalog/CB2AFCFB-0262-51AB-C327-927AA2F79D9C/asset/554/_derivative?',
    session = 'session=TOKEN-be62606a-b201-4a98-a1ce-2fdc492d9ed4',
    async = 'async=false',
    imageOptions = 'imageOptions={
                        "outputFileFormat": "JPEG",
                        "colormode": "RGB",
                        "resizeWidth": 512,
                        "resizeHeight": 600,
                        "compressionQuality": 95,
                        "source": "original",
                        "resolution": 72,
                        "compressionType": "JPEG" }',
    delim = '&',
    filename = 'model.jpg';

http.get(url+
    path+
    session+
    delim+
    async+
    delim+
    imageOptions,
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
