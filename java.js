// const player = 'sam';
// let experience = 100;
// let level =false;
// if(experience > 90){
//     let level = true;
// }

// const obj = {
//     player:'bobby',
//     experience: 100,
//     level: false
// }
// // const player = oj.player;
// // const experience = obj.experience;
// let level = obj.level;

// const{ player, experience} = obj;
// let { level} = obj;
// let a = 'test';
// let b = true;
// let c = 789;
// a = 'test2';

// destructuring
// var person = {
//     firstName : "sam",
//     lastName : "tim",
//     age : 40,
//     eyecoolor: "blue"
// };
// const{ firstName, lastName, age, eyecoolor} = person;
// // Object properties

// const a  = 'test';
// const b = true;
// const c = 789;

// const okobj = { a, b,c};
// // Template strings
// const message = `hello ${firstName} i saw you ${city} yep`;
// // Symbol
// // Create a symbol: "This is my first Symbol"
// const sym = Symbol('This is my first Symbol');

// // Arrow functions
// const whereAmI = (username, location) => {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
// arrow function 
const first = () => {
    const greet = 'Hi';
    const second = () =>{
        alert(greet);
    }
    return second;
}
    const newFunc = first();
    newFunc();

    // closures 




// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//compose
const compose = (f, g) => (a) => f(7);
const sum = (num) => num +1;
compose(sum, sum)(5);
