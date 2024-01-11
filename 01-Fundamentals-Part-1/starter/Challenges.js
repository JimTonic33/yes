// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//     and height in meter)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

//CHALLENGE 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn



// if (BMIMark > BMIJohn) { console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})`) } else { console.log(`John's BMI(${BMIJohn}) is higher than Marks's(${BMIMark})`) }

//CHALLENGE 3

// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas) { console.log('Dolphins Win!') } else if (scoreDolphins === scoreKoalas) { console.log("It's a draw!") } else { console.log('Koalas win!') }

//BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3
// const scoreKoalas = (109 + 95 + 50) / 3
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) { console.log('Dolphins Win!') } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) { console.log("It's a draw!") } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) { console.log('Koalas win!') } else { console.log('No one wins ') }

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}.`)

const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) { console.log(`Koalas win ${avgDolphins} vs. ${avgKoalas}`) } else if (avgKoalas >= 2 * avgDolphins) { console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`) } else { console.log('No team wins') }
    return;
}

const avgDolphins = checkWinner(scoreDolphins, scoreKoalas)