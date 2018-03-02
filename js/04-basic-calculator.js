/* eslint-env browser*/

//Calculator
var numbers = [window.prompt("Pick a number"), window.prompt("Pick a second number"), window.prompt("Which operation would you like to perform? (Add, Sub, Mul, Div)")];

function calculate(num1, num2, op) {
    "use strict";
    num1 = Number(numbers[0]);
    num2 = Number(numbers[1]);
    op = numbers[2];
    
    switch (op) {
    case "Add":
        window.alert(num1 + num2);
        break;
    case "Sub":
        window.alert(num1 - num2);
        break;
    case "Mul":
        window.alert(num1 * num2);
        break;
    case "Div":
        window.alert(num1 / num2);
        break;
    }
    if (numbers[2] === null) {
        var reset = window.confirm("Please enter a number to calculate.");
        if (reset !== true) {
            window.alert("Closing calculator.");
        } else if (reset === true) {
            return calculate(numbers);
        }
    }
}
calculate(numbers);