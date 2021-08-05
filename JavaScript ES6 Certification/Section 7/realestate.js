let listing = function (houseID, balance, squareft, sellprice, mortgage, repairs) {
    this.houseID = houseID,
        this.balance = balance,
        this.squareft = squareft,
        this.sellprice = sellprice,
        this.mortgage = mortgage,
        this.repairs = repairs
    /*
    sellHouse(){},
    buyHouse(){},
    repairHouse(){}
    */


    listing.prototype.sellHouse = () => {
        balance = 0;
        return alert('House sold');
    },

    listing.prototype.buyHouse = () => {
        balance += sellprice;
        return alert('House purchased');
    },

    listing.prototype.repairHouse = () => {
        balance += repairs;
        return alert('House repaired');
    }
};