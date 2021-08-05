var Animal = function (type, weight, color, fur, length, soundItMakes) {
    //Properties
    this.type = type;
    this.weight = weight;
    this.color = color;
    this.fur = fur;
    this.length = length;
    this.soundItMakes = soundItMakes;
    //Methods
    Animal.prototype.makeSound = function() {
        alert(this.soundItMakes);
    },
        Animal.prototype.breathe = function() {
            alert(this.type + " is breathing");
        }
};