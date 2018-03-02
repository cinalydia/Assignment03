/*eslint-env browser*/

//PRACTICE WITH FUNCTIONS
/* --- STEP 1 --- */
function halfNumber(num1) {
    "use strict";
    var number = num1 / 2;
    return window.console.log("Half of 5 is " + number + ".");
}
halfNumber(5);

/* --- OR? ---
function halfNumber(x) {
    "use strict";
    x = arguments[0] / 2;
    window.console.log("Half of " + arguments[0] + " is " + x);
}
halfNumber(44);

function halfNumber(num1) {
    "use strict";
    window.console.log("Half of 5 is " + num1 / 2 + ".");
}
halfNumber(5);*/




/* --- STEP 2 --- */
function squareNumber(num1) {
    "use strict";
    var number_2 = Math.pow(num1, 2);
    return window.console.log("The result of squaring the number 3 is " + number_2);
}
squareNumber(3);

/* --- OR? ---
function squareNumber(x) {
    "use strict";
    x = Math.pow(arguments[0], 2);
    window.console.log("The result of squaring the number " + arguments[0] + " is " + x);
}
squareNumber(7);

function squareNumber(num1) {
    "use strict";
    window.console.log("The result of squaring the number 3 is " + Math.pow(num1, 2));
}
squareNumber(3);*/




/* --- STEP 3 --- */
function percentOf(num1, num2) {
    "use strict";
    var number_3 = num1 / num2 * 100;
    window.console.log(num1 + " is " + number_3 + "%" + " of " + num2 + ".");
}
percentOf(2, 4);

/* --- OR? --
function percentOf(x) {
    "use strict";
    x = arguments[0] / arguments[1] * 100;
    window.console.log(arguments[0] + " is " + x + "%" + " of " + arguments[1]);
}
percentOf(20, 20);

function percentOf(num1, num2) {
    "use strict";
    window.console.log(num1 + " is " + num1 / num2 * 100 + "%" + " of " + num2 + ".");
}
percentOf(2, 4);*/




/* --- STEP 4 --- */
function findModulus(num1, num2) {
    "use strict";
    var number_4 = num2 % num1;
    window.console.log(number_4 + " is the modulus of " + num1 + " and " + num2 + ".");
}
findModulus(4, 10);

/* -- OR --
function findModulus(x) {
    "use strict";
    x = arguments[0] % arguments[1];
    window.console.log(x + " is the modulus of " + arguments[0] + " and " + arguments[1]);
}
findModulus(3, 9);

function findModulus(num1, num2) {
    "use strict";
    window.console.log(num2 % num1 + " is the modulus of " + num1 + " and " + num2 + ".");
}
findModulus(4, 10);*/



/* --- step 5 --- */
//Struggled with wording.
function chooseNum(numbers) {
    "use strict";
    var base = Number(numbers), i;
    for (i = 1; i < arguments.length; i++) {
        base += Number(arguments[i]);
    }
    return base;
}
chooseNum(window.prompt("Pick numbers").slice(","));


