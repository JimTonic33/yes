/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas"
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob)
console.log(myCurrentJob)




let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;
// x--;
// x--;
// console.log(x);

// Comparison operators
// console.log(ageJonas > ageSarah)
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018)

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jonas'
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`
// console.log(jonasNew)

// console.log(`Just a regular string...`)

// console.log(`String
// multiple
// lines`)

// const age = 15;

// if (age >= 18) { console.log('Sarah can start driving license 🚗'); } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
// }


// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//TYPE CONVERSION
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// //TYPE COERCION
// console.log('i am ' + 23 + ' years old')

// const money = 100;
// if (money) { console.log("Don't spend it all ;)"); } else { console.log('You should get a job!'); }

// let height;
// if (height) { console.log('YAY! Height is defined'); } else { console.log('Height is undifined') }

// const age = 18;
// if (age === 18) console.log('You just became an adult (strict)');
// if (age == 18) console.log('You just became an adult (loose)');

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if (favorite === 33) { console.log('cool! 33 is an amazing number') } else if (favorite === 7) { console.log('7 is also a cool number') } else { console.log('Number is not 33 or 7') }

// if (favorite !== 33) console.log('why not 33?')

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) { console.log('Sarah is able to drive!'); } else { console.log('someone else should drive...'); }

// const isTired = true //C

// console.log(hasDriversLicense && hasGoodVision);

// if (hasDriversLicense && hasGoodVision && !isTired) { console.log('Sarah is able to drive!'); } else { console.log('someone else should drive...'); }

// const day = 'thursday';

// switch (day) {
//     case 'monday': // day === 'monday
//         console.log('Plan course structure')
//         console.log('Go to coding meetup')
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos')
//         break;
//     case 'sutarday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D')
//         break;
//     default:
//         console.log('Not a valid day')


// }
// if (day === 'monday') {
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
// } else if (day === 'tuesday') { console.log('Prepare theory videos') } else if (day === 'wednesday' || day === 'thursday') { console.log('Write code examples') } else if (day === 'friday') { console.log('Record videos') } else if (day === 'suterday' || day === 'sunday') { console.log('Enjoy the weekend :D') } else { console.log('Not a valid day') }

const age = 23;
// age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine🍷' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water'}`)