
var server = require('../server.js')
var request = require("supertest").agent(server);
  
 describe('GET /', function() {
    after(function (done) {
        server.close();
        done();
    });

   it('displays "Hello World!"', function(done) {
     // The line below is the core test of our app.
     request.get('/').expect('Hello World!').end(done)
   });
 });