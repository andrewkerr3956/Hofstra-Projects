let Player = function(name) {
    // Properties
    this.name = name;
    this.livesLeft = 1;
    this.score = 0;
    this.speed = 1;
    this.gridLocationX = 0;
    this.gridLocationY = 0;

    // Methods
    Player.prototype.die = () => {
        this.livesLeft = 0;
        alert(this.name + ' has died.');
    },

    Player.prototype.moveLeft = () => {
        if(this.gridLocationX > 0) {
            this.gridLocationX--;
        }
        else {
            alert('Cannot move left.');
        }
    },

    Player.prototype.moveRight = () => {
        if(this.gridLocationX < 10) {
            this.gridLocationX++;
        }
        else {
            alert('Cannot move right.');
        }
    },

    Player.prototype.moveUp = () => {
        if(this.gridLocationY < 10) {
            this.gridLocationY++;
        }
        else {
            alert('Cannot move up.');
        }
    },

    Player.prototype.moveDown = () => {
        if(this.gridLocationY > 0) {
            this.gridLocationY--;
        }
        else {
            alert('Cannot move down.');
        }
    }

};