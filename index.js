var app = require('express')();
var users = require('./data/users');

var bodyParser = require('body-parser'); // 

var port = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// set Routes 
app.get('/', function(req, res){
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This id index page</h1>');
})

// user
app.get('/user', function (req, res) {
    res.json(users.findAll());
});
app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});
app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});


app.listen(port, function() {
    console.log('Starting node.js on port http://localhost:' + port);
});