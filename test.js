const should     = require('should');
const detectMocha= require('./index.js');

it('detects that Mocha is currently running', function(){
  detectMocha().should.equal(true);
});

it('detects if Mocha isn\'t currently running in  a given context',function(){
  detectMocha({}).should.equal(false);
});
