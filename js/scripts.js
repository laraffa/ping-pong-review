var pingPong = function(inputNumber) {
var numberSet = [];

if (inputNumber < 0) {
  numberSet.push("Whoops! You must enter a number that is greater than 0.");
}
if (isNaN(inputNumber)) {
  numberSet.push("Whoops! You must enter a number!");
 }
// else if (inputNumber = "") {
//   numberSet.push("Please input a number.");
// }

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

$(document).ready(function() {
  $("button#pingPongBtn").click(function() {
    $( "#pingPongOutput" ).empty();

    var numberInput = $("input#numberInput").val();
    var pingPongNumberos = pingPong(numberInput);

    $("#pingPongOutput").append("<ul>");
    pingPongNumberos.forEach(function(number){
      $("#pingPongOutput").append("<li>" + number +"</li>");
    });
    $("#pingPongOutput").append("</ul>");

    event.preventDefault();
  });
});
