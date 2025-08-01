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
console.log('=============================5=================================')
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
console.log('============================*6*==================================')
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

Solve Exercise 6 here:
*/


for (const gym of game.gyms) {
  if (gym.difficulty < 3 && gym.completed === false) {
    gym.completed = true;
  }
}
console.log(game.gyms);
console.log('============================*7*==================================')
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

Solve Exercise 7 here:
*/

for (let i= 0; i < game.party.length; i++) {
  const currentPoke = game.party[i];
  if (currentPoke.starter === true) {
    for (let p = 0; p< pokemon.length; p++){
      if (pokemon[p].number === currentPoke.number + 1) {
        game.party.splice(i,1, pokemon[p]);
        break;
      }
    }
  }
}
console.log(game.party);
console.log('============================*8*==================================')
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
game.party.forEach(poke => {
  console.log(poke.name);
})
console.log('============================*9*==================================')
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
for (const poke of pokemon) {
  if (poke.starter === true) {
    console.log(poke.name);
  }
}
console.log('============================*10*==================================')
/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};

game.catchPokemon(pokemon[35]);
//console.log(game)
//console.log(game.party)
console.log('============================*11*==================================')
/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
game.catchPokemon = function (pokemonObj) {
  for (let item of this.items) {
   if (item.name === 'pokeball') {
    item.quantity -= 1;
    break;
   }
}
   this.party.push(pokemonObj);

};

game.catchPokemon(pokemon[0]);
console.log(game.items);
console.log('============================*12*==================================')
/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
for (const gym of game.gyms) {
  if (gym.difficulty > 2 && gym.difficulty < 6 && gym.completed === false) {
    gym.completed = true;
  }
}
console.log(game.gyms);

console.log('============================*13*==================================')
/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function () {
  const gymTally = { completed : 0, incomplete : 0};
  for (let i = 0; i< this.gyms.length; i++) {
    const gym = this.gyms[i];
   if (gym.completed === true) {
    gymTally.completed += 1;
   } else if (gym.completed === false) {
    gymTally.incomplete += 1;
   }
  }
   console.log(gymTally);
}
//game.gymStatus();
console.log('============================*14*==================================')
/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = function() {
 return this.party.length;  
};
console.log(game.partyCount());
console.log('============================*15*==================================')
/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for (const gym of game.gyms) {
  if (gym.difficulty > 5 && gym.difficulty < 8 && gym.completed === false) {
    gym.completed = true;
  }
}
console.log(game.gyms);
console.log('============================*16*==================================')
/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game);
console.log('============================*17*==================================')
/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?

Solve Exercise 17 here:*/

game.party.sort((a, b) => (b.hp - a.hp));
console.log(game.party);
console.log('============================*18*==================================')
/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

game.catchPokemon = function (pokemonObj) {
  for (let item of this.items) {
   if (item.name === 'pokeball') {
    item.quantity -= 1;
    break;
   }
}
   this.party.push(pokemonObj);
   while (this.party.length > 6) {
    let lowestHpIndex = 0;
    for (let i =1; i< this.party.length; i++) {
      if (this.party[i].hp < this.party[lowestHpIndex].hp) {
        lowestHpIndex =i;
      }
    }

    const [removedPoke] = this.party.splice(lowestHpIndex, 1);
    this.collection.push(removedPoke);
    }

};

game.catchPokemon(pokemon[20]);
console.log(game.items);
console.log('Number of Pokemon in the Game Party', game.partyCount());
console.log('============================*19*==================================')
/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/


game.catchPokemon = function(pokemonObj) {

  let pokeballItem = null;
  for (let item of this.items) {
    if (item.name === 'pokeball') {
      pokeballItem = item;
      break;
    }
  }


  if (!pokeballItem || pokeballItem.quantity < 1) {
    console.log('There are not enough pokeballs to catch the desired Pokemon');
    return; 
  }

  pokeballItem.quantity -= 1;

  this.party.push(pokemonObj);

  if (this.party.length > 6) {
    let lowestHpIndex = 0;
    for (let i = 1; i < this.party.length; i++) {
      if (this.party[i].hp < this.party[lowestHpIndex].hp) {
        lowestHpIndex = i;
      }
    }
    const [removedPokemon] = this.party.splice(lowestHpIndex, 1);
    this.collection.push(removedPokemon);
  }
};

game.catchPokemon(pokemon[33]);
console.log('party')
console.log(game.party);
console.log('Number of Pokemon in the Game Party', game.partyCount());
console.log(game.items);
console.log('collection')
console.log(game.collection);
game.catchPokemon(pokemon[32]);
console.log(game.party);
console.log(game.items);
console.log('============================*20*==================================')
/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon = function(pokeName) {
  let selectedpoke = null;
  for (let poke of pokemon) {
    if(poke.name.toLowerCase() === pokeName.toLowerCase()) {
      selectedpoke = poke;
      break;
    }
  }
  if (!selectedpoke) {
    return "That Pokemon does not exist";
  } 
  let pokeballItem = null;
  for (let item of this.items) {
    if (item.name === 'pokeball') {
      pokeballItem = item;
      break;
    }
  }

  if (!pokeballItem || pokeballItem.quantity < 1) {
    console.log('There are not enough pokeballs to catch the desired Pokemon');
    return; 
  }
  pokeballItem.quantity -= 1;

  this.party.push(selectedpoke);

  if (this.party.length > 6) {
    let lowestHpIndex = 0;
    for (let i = 1; i < this.party.length; i++) {
      if (this.party[i].hp < this.party[lowestHpIndex].hp) {
        lowestHpIndex = i;
      }
    }
    const [removedPokemon] = this.party.splice(lowestHpIndex, 1);
    this.collection.push(removedPokemon);
  }
};

game.catchPokemon('PiKacHU');
console.log(game.items);
console.log('============================*21*==================================')
/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:

const pokemonType = {};
for (const poke of pokemon) {
  if(!pokemonType[poke.type]) {
    pokemonType[poke.type] = [];
  }
  pokemonType[poke.type].push(poke);
}


console.log(pokemonType.grass);