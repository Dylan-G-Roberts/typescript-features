class Vehicle {
    constructor(public color: string) {
    }

    protected honk(): void {
        console.log('HONK');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.honk();
        this.drive();
    }
}

const car = new Car(4, 'black');
car.startDrivingProcess();