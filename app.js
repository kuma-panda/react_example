const Express = require('express');
const app = Express();
app.use(Express.static(__dirname + '/public'));
// app.get('/hello', function(req, res){
//      res.status(200).send('hello world');
// });
app.listen(8080, '0.0.0.0');
