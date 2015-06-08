var fs = require('fs'),
    http = require('http'),
    url = 'http://Modok:8090/api/v1',
    assetId = 334,
    path = '/catalog/4903AB2A-16E2-9444-9B03-DFE0EA598C7B/asset/'+assetId+'/_derivative?',
    session = 'session=TOKEN-fb2db149-6b45-47e3-a651-8d074345c6eb',
    async = 'async=false',
    imageOptions = 'imageOptions='+JSON.stringify({
        "outputFileFormat": "JPEG",
        "colormode": "RGB",
        "resizeWidth": 700,
        "resizeHeight": 1050,
        "compressionQuality": 95,
        "source": "original",
        "resolution": 72,
        "compressionType": "JPEG"
    }),
    and = '&',
    filename = 'model.jpg';

console.log(imageOptions);

http.get(url+path+session+and+async+and+imageOptions,
    function(res) {
        res.pipe(fs.createWriteStream(filename)).on('error', function(err) {
            console.log(err);
            res.read();
        }).on('close', function() {
            console.log('done');
        });
    });
