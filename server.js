var express = require('express');
var path = require('path');
var app = express();

require('./express.js')(app);

app.set('port' , 4000);

app.listen(app.get('port') , function() {
    console.log('server running' + app.get('port'));
})