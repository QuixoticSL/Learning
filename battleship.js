// Variable declarations
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guesses = 0;
var hits = 0;
var isSunk = false;

// Actual code logic
while (isSunk == false) { // LOOP: while the ship isn't sunk
    guess = prompt("Ready, aim, fire! (enter a number between 0-6!):"); // GET: the users guess
    if (guess < 0 || guess > 6) { // IF guess number is less than 0 or more than 6 it is invalid, so alert
      alert("Please enter a number between 0 and 6!")
    } else {
      guesses = guesses + 1; // ADD one to guesses

    if (guess == location1 || guess == location2 || guess == location3){
      alert("HIT!");
      hits = hits + 1; // ADD to hits if any of the above is true

      if (hits == 3) { // IF the number of hits is 3
        isSunk = true; // SET isSunk to true
        alert("You've sunk my battleship!"); // INFORM the user
      } else {
        alert("MISS!");
      }
    }
  }
}

var stats = "You took " + guesses + " guesses to sink a ship, " +
"which means your accuracy was: " + (3/guesses);

alert(stats);
