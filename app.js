const pokemon = require('./data.js');
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

//console.dir(pokemon, { maxArrayLength: null })
console.log('===============================================================')
console.log(pokemon[58]);
console.log('===============================================================')
/*Exercise 2

Next, add the following console.log: console.log(game)*/

//console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/
game.difficulty = 'hard';
//console.log(game);

console.log('===============================================================')
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/

for (const poke of pokemon) {
  if (poke.starter === true) {
    game.party.push(poke);
  }
}
console.dir(game.party);
console.log('===============================================================')
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/

let count = 0;
for (const threePoke of pokemon) {
  if ((threePoke.type === 'fire' || threePoke.type === 'water') && threePoke.starter !== true &&
  count < 3 ) {
    game.party.push(threePoke);
    count++;

  }
}
console.dir(game.party);