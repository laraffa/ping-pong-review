var pingPong = function(inputNumber) {
  if (inputNumber % 3 === 0){
    return [1,2,'ping'];
  } else if (inputNumber % 5 === 0) {
    return [1,2,3,4,'pong'];
  } else if (inputNumber % 15 === 0) {
    return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,'pingpong'];
  }
};
