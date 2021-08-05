class Ambulance extends Vehicle {
    constructor(color, direction, currentSpeed, topSpeed, engineStarted, siren) {
        super(color, direction, currentSpeed, topSpeed, engineStarted);
        this.siren = siren;
    }

    // Methods
    sirenOn() {
        this.siren = true;
        console.log('Siren is on.');
    }
    sirenOff() {
        this.siren = false;
        console.log('Siren is off.');
    }
}