describe("pingPong", function(){
it("replaces numbers divisible by 3 with 'ping'", function() {
  expect(pingPong(3)).to.equal('ping');
});

it("replaces numbers divisible by 5 with with 'pong'", function(){
  expect(pingPong(5)).to.equal('pong');
});
});
