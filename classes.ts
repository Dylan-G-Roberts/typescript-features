class Vehicle {
    protected honk(): void {
        console.log('HONK');
    }

}

const vehicle = new Vehicle();


class Car extends Vehicle {
    drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.honk();
        this.drive();
    }
}

const car = new Car();
car.startDrivingProcess();