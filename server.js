// server.js
// where your node app starts

// init project
var express = require('express');
const PORT = process.env.PORT || 3000
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(express.json())
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('trust proxy', true)
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/whoami', (req,res) => {
    const resp = {
        ipaddress: req.ip.toString(),
        language:req.headers['accept-language'],
        software:req.headers['user-agent']
    }
    res.status(200).send(resp)
})


// listen for requests :)
app.listen(PORT, '0.0.0.0', function () {
  console.log('Your app is listening on port ' + PORT);
});
