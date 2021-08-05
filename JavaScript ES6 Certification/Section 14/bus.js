class Bus extends Vehicle {
    constructor(color, direction, currentSpeed, topSpeed, engineStarted, numberOfSeats) {
        super(color, direction, currentSpeed, topSpeed, engineStarted);
        this.numberOfSeats = numberOfSeats;
    }
}