/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The default that occurs whenever "this" is used to invoke a function without any specific rules, such as 'dot', 'call()', 'apply()', 'bind()', etc.". Unless specified otherwise, the function is invoked in, and pulls data from, the global scope (the entire browser).
* 2. Implicit Binding - The most common form of binding, in which dot notation is used to invoke a function. More specifically, whatever is to the left of the dot becomes the direct content for 'this.'
* 3. New Binding - Binding that allows you to essentially create a new object, and link it to a previous one by using the "this" keyword.
* 4. Explicit Binding - Explicit binding occurs when either '.bind()', '.call()', or '.apply()' are used to invoke a function. 
*
* write out a code example of each explanation above
*/

// Principle 1

function FavoriteColor(){
    console.log(this);
}
FavoriteColor();

// Principle 2

let myDog = {
    name: 'Braco',
    breed: 'Labrador',
    color: 'Yellow',
    FavGame: 'Fetch',
    game: function(){
        return (`My dog, ${this.name}, is a ${this.color} ${this.breed} who likes to play ${this.FavGame}.`);
    }
    
};
console.log(myDog.game());

// Principle 3

function CEO(idol) {
    this.founder = idol;
}
let MyNewFavFounder = new CEO ('Tom Bilyeu');

console.log(`My entrepreneurial idol is ${MyNewFavFounder.founder}.`)

// Principle 4

let myFunnyQuote = {
    quote: 'People say nothing is impossible, but I do nothing every day.'
}
function FunnyQuote(){
    console.log(this.quote);
}
FunnyQuote.call(myFunnyQuote);

