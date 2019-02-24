var express = require("express");

var app = express();
var path = require('path');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain)
app.use(express.static("website"))
//Initialize the app
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  })

//get for faq
app.get('/faq',function(req,res) {
  res.sendFile(path.join(__dirname +'/website'+ '/faq.html'));
})

app.get('/wallets',function(req,res) {
  res.sendFile(path.join(__dirname +'/website'+ '/wallets.html'));
})

app.get('/news',function(req,res) {
  res.redirect('https://medium.com')

})

app.get('/notices',function(req,res) {
  res.redirect('https://medium.com')

})

app.get('/roadmap',function(req,res) {
  res.sendFile(path.join(__dirname +'/website'+ '/roadmap.html'));
})

app.get('/privacy-policy',function(req,res) {
  res.sendFile(path.join(__dirname +'/website'+ '/privacy-policy.html'));
})

app.get('/terms-of-use',function(req,res) {
  res.sendFile(path.join(__dirname +'/website'+ '/terms-of-use.html'));
})
