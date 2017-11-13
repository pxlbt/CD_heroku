
var server = require('../server.js')
var request = require("supertest").agent(server);
  
 describe('GET /', function() {
    after(function (done) {
        server.close();
        done();
    });

   it('displays what he should', function(done) {
     // The line below is the core test of our app.
     request.get('/').expect('I pass the Travis!!').end(done)
   });
 });