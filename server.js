const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
   res.json({
       'status': 'I lovue!'
   })
});

app.listen(8080, function () {
    console.log('Listening');
});