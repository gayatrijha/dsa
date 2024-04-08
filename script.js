'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// for of
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

for (const menu of menus) {
  console.log(menu);
}

for (const [i, item] of menus.entries()) {
  console.log(i, item);
}

console.log([...menus.entries()]);
// looping obj
// property name
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let open = `we are open ${properties.length} days:`;
for (const day of properties) {
  // console.log(day);
  open += `${day},`;
}
console.log(open);

// properties val

const objValues = Object.values(restaurant.openingHours);
console.log(objValues);

// entire obj, key+ val
const entireObj = Object.entries(restaurant.openingHours);
console.log(entireObj);

for (const [key, { open, close }] of entireObj) {
  console.log(`on ${key} we are open at ${open} and closed at ${close}`);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check 
  if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects 
have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as
 the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD
*/

// SETS
const orderSet = new Set(['pasta', 'momo', 'rice', 'pasta', 'momo']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('momo'));
orderSet.add('garlic');
orderSet.delete('pasta');
// orderSet.clear();

for (const item of orderSet) {
  console.log(item);
}

// usage
const staff = ['waiter', 'manager', 'chef', 'manager', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(orderSet);
console.log(new Set('jonas '));
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const scores = {};
for (const players of Object.values(game.scored)) {
  if (scores.players == scores.players) {
    scores.players++;
  } else {
    scores.players = 1;
  }
}

console.log(scores.players);
for (const [i, score] of game.scored.entries()) {
  console.log(`Goal: ${i + 1}  ${score}`);
}

const val = Object.values(game.odds);
console.log(typeof val);
console.log(val);
const calcAverage = val.reduce((acc, val) => acc + val, 0) / val.length;
console.log(calcAverage);

//Odd of victory Bayern Munich: 1.33
for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw' : `victory of ${game[team]}`;
  console.log(`odd of ${str} is ${odd} `);
}

// strings
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('b737'[0]);
console.log(airline.length);
console.log('b568'.length);

// methods

console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('P'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf('P')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //  b, e are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('middle seat');
  else console.log('not middle');

  // if (seat.includes('B') || seat.includes('E')) {
  //   console.log('its a middle seat');
  // } else {
  //   console.log('its a aisel seat');
  // }
};

checkMiddleSeat('11B');
checkMiddleSeat('11A');

console.log(new String('gayatri'));
const myName = 'gaYatri';
const nameLower = myName.toLowerCase();
const corr = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(corr);

const email = 'gayatri@gmail.com';
const login = ' Gayatri@Gmail.com ';

const lowerEmail = login.toLowerCase().trim();
console.log(lowerEmail);
console.log(email === lowerEmail);

const priceGB = '288,34#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'all passenger come to boarding door 23. boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll(/door/g, 'gate'));

// booleans

const plane2 = 'Airbus a234neo';
console.log(plane2.includes('a'));
console.log(plane2.startsWith('34'));
console.log(plane2.startsWith('Airbus') && plane2.endsWith('neo'));

// practise

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('not allow to board');
  else console.log('allow');
};
checkBaggage('I have laptop, Food, knife');
checkBaggage('socks, camera');

// split

console.log('a+very+nice+string'.split('+'));
console.log('gayatri jha'.split(' '));

const [fname, lname] = 'gayayri jha'.split(' ');
console.log(fname, lname);

const newNmae = ['Miss', fname, lname.toUpperCase()].join('       ');
console.log(newNmae);

const capatalizeName = function (name) {
  const names = name.split(' ');
  for (const na of names) {
    const cap = na.toLowerCase()[0].toUpperCase() + na.slice(1);
    console.log(cap);
  }
};
capatalizeName('jessica anna devis');

// padding a str
const message = ' go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function (num) {
  // const str = String(num);
  const str = num + '';
  const last = str.slice(-4);
  const masked = last.padStart(str.length, '*');
  return masked;
};

console.log(maskCreditCard(2234353436));

// repeat
const message1 = 'bad weather.. all departure delayed';
console.log(message1.repeat(2));

// c4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     // cat_dog= catDog
//     const textLower = row.toLowerCase().trim();
//     const underscoreIndex = textLower.indexOf('_');

//     const print =
//       textLower.slice(0, underscoreIndex) +
//       textLower.slice(underscoreIndex + 1)[0].toUpperCase() +
//       textLower.slice(underscoreIndex + 2);

//     // console.log(print);
//     const textp = `${print} ${'✅'.repeat(i + 1)}`;
//     console.log(textp);
//   }
// });

// map
const res = new Map();
res.set('name', 'fire ice');
res.set(1, 'firanz, italy');
console.log(res.set(2, 'milan, italy'));

res
  .set('category', ['italino', 'pizzeria', 'vegi'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

// to get data

console.log(res.get('name'));
console.log(res.get(true));

const time = 21;
console.log(time > res.get('open') && time < res.get('close'));

console.log(res.has('name'));
console.log(res.delete('name'));
console.log(res.size);
// console.log(res.clear());

// res.set([1, 2], 'test');
// console.log(res.get[(1, 2)]); // does nt work

const arr = [1, 2];
res.set(arr, 'test');
console.log(res.get(arr)); // does nt work

console.log(res);

const question = new Map([
  ['question', 'wht is the best programming langg in worl'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'when user is correct'],
  [false, 'when user is incorrect'],
]);
console.log(Object.entries(restaurant.openingHours));
console.log(question);

// convert obj to map
const hourMap = new Map(Object.entries(restaurant.openingHours));
console.log(hourMap);

// iterantion

// quiz
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`ans ${key} : ${value}`);
  }
}

// const ans = Number(prompt('your ans'));
// console.log(ans);
// if (question.get('correct') === ans) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// console.log(question.get(question.get('correct') === ans));

// map to array
console.log([...question]);
