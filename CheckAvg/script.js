// //Function Declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(1985);

// //Funtion Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1985);
// console.log(age1, age2);

//Arrow Functions
// const calcAge3 = (birthYear) => 2037 - birthYear;

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }


//Arrow Function: declaration = (parameters) => return;
let calcAverage = (a,b,c) =>(a + b + c) / 3;

console.log(calcAverage(7,9,2));

// Test 1
const scoreDolphins = calcAverage(530,65,73);
const scoreKoalas = calcAverage(49,87,19)


console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
     if (avgDolphins >= 2 * avgKoalas) {
         console.log(`Dolphins win the trophy 🏆 🎉 (${avgDolphins} vs ${avgKoalas})`);
     } 
     else if (avgKoalas >= 2* avgDolphins) {
console.log(`Koalas win  win the trophy 🏆 🎉 (${avgKoalas} vs ${avgDolphins})`);
     } else {
         console.log('No team wins');
     }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(200, 700);