class Vehicle {
    constructor(color, direction, currentSpeed, topSpeed, engineStarted) {
    // Properties
    this.color = color; 
    this.direction = direction;
    this.currentSpeed = currentSpeed;
    this.topSpeed = topSpeed;
    this.engineStarted = engineStarted;

    }

    // Methods
    accelerate() {
        this.currentSpeed += 10;
        if (this.currentSpeed > this.topSpeed) {
            this.currentSpeed = this.topSpeed;
        }
        else {
            this.currentSpeed = this.currentSpeed;
        }
        console.log('Accelerated. Speed is now ' + this.currentSpeed);
    }
    brake() {
        this.currentSpeed = 0;
        console.log('Braked');
    }
    turnOn() {
        this.engineStarted = true;
        console.log('Engine Started');
    }
    turnOff() {
        this.engineStarted = false;
        console.log('Engine Stopped');
    }
    turnLeft() {
        this.direction = -90;
        console.log('Turned left');
    }
    turnRight() {
        this.direction = 90;
        console.log('Turned right');
    }
    set direction(degrees) {
        if(this.direction > 359) {
            this.direction = 359;
        }
        else if (this.direction < 0) {
            this.direction = 0;
        }
        else {
            return this.direction;
        }
    }
};