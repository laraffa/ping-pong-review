var pingPong = function(inputNumber) {
var numberSet = [];

if (inputNumber < 0) {
  numberSet.push("Enter a number that is greater than 0.");
}

if (isNaN(inputNumber)) {
   numberSet.push("You must enter a number!");
 }

for (var i = 1; i <= inputNumber; i++) {
  if (i % 15 === 0) {
    numberSet.push("pingpong");
  } else if (i % 3 === 0) {
    numberSet.push("ping");
  } else if (i % 5 === 0) {
    numberSet.push("pong");
  } else {
    numberSet.push(i);
  }
}
return numberSet;
};

//   if (inputNumber % 3 === 0){
//     return [1,2,'ping'];
//   } else if (inputNumber % 5 === 0) {
//     return [1,2,3,4,'pong'];
//   } else if (inputNumber % 15 === 0) {
//     return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,'pingpong'];
//   }
//
// };
