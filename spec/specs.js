describe("pingPong", function(){
it("will replace numbers divisible by 3 with 'ping'", function(){
  expect(pingPong(3)).to.eql([1,2,'ping']);
  });
it("will replace numbers divisible by 5 with with 'pong'", function(){
    expect(pingPong(5)).to.eql([1,2,'ping',4,'pong']);
  });
it("will replace numbers divisible by 15 with with 'pingpong'", function(){
  expect(pingPong(15)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong']);
  });
it("will not accept numbers less than zero", function(){
  expect(pingPong(-3)).to.eql(["Whoops! You must enter a number that is greater than 0."]);
  });
it("will not accept anything that is not a number", function(){
  expect(pingPong("lindsey")).to.eql(["Whoops! You must enter a number!"]);
  });
});
// // it("will not accept an empty string", function(){
// //   expect(pingPong("")).to.eql(["Please input a number."])
// //   });
// });
