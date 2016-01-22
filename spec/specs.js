describe("pingPong", function(){
it("will replace numbers divisible by 3 with 'ping'", function(){
  expect(pingPong(3)).to.eql([1,2,'ping']);
  });
  it("replaces numbers divisible by 5 with with 'pong'", function(){
    expect(pingPong(5)).to.eql(1,2,3,4,'pong');
  });
// it("replaces numbers divisible by 5 with with 'pong'", function(){
//   expect(pingPong(5)).to.equal('pong');
//   });
});
