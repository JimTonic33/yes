const country = 'Greece';
const continent = 'Europe';
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
language = 'Greek'
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2)
    // population++
console.log(population)
console.log(population > 6)
console.log(population < 33)

const description1 = `${country} is in ${continent} and its ${population} million people speak ${language}`

console.log(description1)

// const averagePopulation = 33
// console.log(averagePopulation - population)

// if (population > 33) { console.log(`${country}'s population is above average`) } else { console.log(`${country}'s population is ${33 - population} million bellow average`) }

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) { console.log("Only 1 border!") } else if (numNeighbours > 1) { console.log("more than 1 border") } else { console.log('No borders') }


switch (language) {
    case 'Spanish':
        console.log('2nd place in nubmber of native speakers')
        break;
    case 'Chinese':
    case 'mandarin':
        console.log('MOST number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('Number 4')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D')
}

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'}
average`)