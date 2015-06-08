var fs = require('fs'),
    http = require('http'),
    url = 'http://Medusa.local:8090/api/v1',
    assetId = 537,
    path = '/catalog/CB2AFCFB-0262-51AB-C327-927AA2F79D9C/asset/'+assetId+'/_derivative?',
    session = 'session=TOKEN-be62606a-b201-4a98-a1ce-2fdc492d9ed4',
    async = 'async=false',
    imageOptions = 'imageOptions={'+
                       '"outputFileFormat": "JPEG",'+
                       '"colormode": "RGB",'+
                       '"resizeWidth": 700,'+
                       '"resizeHeight": 1050,'+
                       '"compressionQuality": 95,'+
                       '"source": "original",'+
                       '"resolution": 72,'+
                       '"compressionType": "JPEG"'+
                   '}',
    and = '&',
    filename = 'model.jpg';

http.get(url+path+session+and+async+and+imageOptions,
    function(res) {
        res.pipe(fs.createWriteStream(filename)).on('close', function() {
            console.log('done');
        }).on('close', function() {
            console.log('double done');
        });
    });
