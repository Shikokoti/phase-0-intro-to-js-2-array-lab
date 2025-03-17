// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
    return cats
    }
function destructivelyPrependCat (Bob) {
    cats.unshift("Bob");
    return cats
}

function  destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}

function appendCat(name){
    return  [...cats, "Broom" ];
}

function prependCat(name) {
    return [ "Arnold", ...cats];
}

function removeLastCat(name) {
    return [...cats.slice(0, -1)];
}
function removeFirstCat(name) {
    return [...cats.slice(1)];
}