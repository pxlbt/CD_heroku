let express = require('express')
var app = express()

app.get('/', function (req, res) {
 res.send('I pass the Travis!')
})


let server = app.listen(process.env.PORT || 3000, function () {
        console.log('Example app listening on port 3000!')
})


module.exports = server;
