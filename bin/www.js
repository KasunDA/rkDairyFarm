var app = require('../app');
app.set('port',process.env.PORT||8081);
var server = app.listen(app.get('port'), function()
{
console.log('Express server listening on port ' + server.address().port);
});
process.on('uncaughtException', function (err) 
{
console.log(err);
});
