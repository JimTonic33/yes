'use strict';

// function describeCountry(country, population, capitalCity) {
//     const countryInfo = `${country} has ${population} million people and its
// capital city is ${capitalCity}`
//     return countryInfo;
// }

// describeCountry('Greece', 10, 'Athens')

// // const greeceInfo = describeCountry('Greece', 10, 'Athens')
// // console.log(greeceInfo)

// // const spainInfo = describeCountry('Spain', 47, 'Madrid')
// // console.log(spainInfo)

// // const germanyInfo = describeCountry('Germany', 83, 'Berlin')
// // console.log(germanyInfo)

// console.log(describeCountry('Greece', '10', 'Athens'));
// console.log(describeCountry('Spain', 47, 'Madrid'));
// console.log(describeCountry('Germany', 83, 'Berlin'));

// function percentageOfWorld1(population) { return (population / 7900) * 100 };

// const percentageOfWorld2 = function(population) {
//     return (population / 7900) * 100;
// };
// const percPortugal1 = percentageOfWorld1(10);
// const percChina1 = percentageOfWorld1(1441);
// const percUSA1 = percentageOfWorld1(332);
// console.log(percPortugal1, percChina1, percUSA1);

const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal1 = percentageOfWorld3(10);
const percChina1 = percentageOfWorld3(1441);
const percUSA1 = percentageOfWorld3(332);
console.log(percPortugal1, percChina1, percUSA1)

const describePopulation = function(country, population) {
    const percentage = percentageOfWorld3(population);
    const description = `${country} has ${population} million people which is about ${percentage}% of the world`;
    console.log(description)
};

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);

const populations = [10, 1441, 332, 9]
console.log(populations.length === 4)
const percentages = [
    percentageOfWorld3(populations[0]),
    percentageOfWorld3(populations[1]),
    percentageOfWorld3(populations[2]),
    percentageOfWorld3(populations[3])
];
console.log(percentages);