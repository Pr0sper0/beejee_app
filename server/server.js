const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const router = express.Router();


const port = process.env.PORT || 3000;

const daysidePath = path.join(__dirname, '..', 'dayside');
app.use(express.static(publicPath));
app.use(express.static(daysidePath));
var phpExpress = require('php-express')({
    
    binPath: 'php'
  });

// set view engine to php-express
app.set('views', path.join(daysidePath, '../'));
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.all(/.+\.php$/, phpExpress.router);

// Homepage (THIS IS NOT WHAT ISN'T WORKING)


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
    
   

});

var server = app.listen(port, () => {
    console.log('Server is up');
    var host = server.address().address;
    var port = server.address().port;
    console.log('PHPExpress app listening at http://%s:%s', host, port);
});
