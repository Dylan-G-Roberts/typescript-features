const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

const cars = carMakers[0]
const myCar = carMakers.pop();

// Prevent incompatible vals
carsByMake.push(['asdf']);

carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
