/*eslint-env browser*/

//Trouble with understanding and wording.
function tellFortune(title, location, name, children) {
    "use strict";
    title = ["Doctor", "Astronaut", "Teacher"];
    location = ["Hollywood", "New York City", "Seattle"];
    name = ["Bob", "Sally", "Billy", "Joe"];
    children = ["1", "2", "3"];
    
    var roundOne = window.document.write("You will be a " + title[0] + " in " + location[0] + " married to " + name[0] + " with " + children[0] + " kids."), roundTwo = window.document.write("You will be a " + title[1] + " in " + location[1] + " married to " + name[1] + " with " + children[1] + " kids."), roundThree = window.document.write("You will be a " + title[2] + " in " + location[2] + " married to " + name[2] + " with " + children[2] + " kids."), i;
}
tellFortune();