// Server setup
const express = require('express');
const app = express();
const port = process.env.PORT || 4040;
app.listen(port);


// EJS and Public files
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));


// Routing
app.get('/',(req,res) => {
    res.render('homepage');
});
