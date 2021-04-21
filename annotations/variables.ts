let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let nada: undefined = undefined;

//built in objs
let now: Date = new Date();

// arr
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,false,true];


// classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


//  Using annotations
// 1. Function that returns the 'any' type
const json = '{"x":10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

// 2. When we declare a variable on one line
// and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] == 'green') {
        foundWord = true;
    }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i];
    }
}