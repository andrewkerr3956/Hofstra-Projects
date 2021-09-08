const honda = new Car('Red', 'Honda', 'Accord', 45000, 2020);
const mustang = new Car('Black', 'Ford', 'Mustang', 50000, 1965);

function Car(color, make, model, price, year) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
    this.year = year;
    this.drive = function() {
        console.log(`I'm driving my ${this.year} ${this.make}, vroom vroom`);
    }
    this.park = function() {
        console.log(`Parking the ${this.model}`);
    }
    this.sell = function() {
        console.log(`I want to sell my ${this.make} for at least $${this.price * 0.9} since I paid $${this.price}`);
    }
}

/*
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.greeting = function() {
        return(`Hello ${this.firstname} ${this.lastname}`);
    }

}   

const tester1 = new Person('andrew', 'kerr');
const tester2 = new Person('mike', 'jones');
console.log(tester1);
console.log(tester2);
*/

/*
function BluePrint() {
    this.stuff = 'yes';
    this.greet = 'hello';
}

const myObj1 = new BluePrint();
const myObj2 = new BluePrint();
*/

/*
const myObj = {
    'people': [
        { 'firstName': 'Mike', 'lastName': 'Jones', 'age': 40 },
        { 'firstName': 'Jane', 'lastName': 'Doe', 'age': 30 },
        { 'firstName': 'John', 'lastName': 'Svekis', 'age': 50 },
    ]
};

myObj.people.forEach(person => {
    console.log(person);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${person.firstName}</h3> ${person.lastName}`;
    div.style.border = '1px solid #ddd';
    div.style.display = 'inline-block';
    div.style.width = '100px';
    console.log(div);
    document.querySelector('div').appendChild(div);
});
*/

/*
const myObj = {
    'people': [
        { 'firstName': 'Mike', 'lastName': 'Jones', 'age': 40 },
        { 'firstName': 'Jane', 'lastName': 'Doe', 'age': 30 },
        { 'firstName': 'John', 'lastName': 'Svekis', 'age': 50 },
    ]


};

for (let i = 0; i < myObj.people.length; i++) {
    let person = myObj.people[i];
    console.log(person.firstName + ' ' + person.lastName);
}

myObj.people.forEach(person => {
    console.log(person.firstName + ' ' + person.lastName);
});

for (let i in myObj.people) {
    let person = myObj.people[i];
    console.log(person.firstName + ' ' + person.lastName);
}

for(let prop in myObj) {
    console.log(prop)
}


const myObj2 = myObj.people.map = (key, index) => {
    let person = myObj.people[index];
    console.log(key);
    return key.firstName + ' ' + key.lastName;
}
*/

/*
const myCar = {
    color: 'Taupe Gray',
    make: 'Cheverolet',
    model: 'Malibu',
    year: '2012',
    price: 4000,
    drive: function() {
        console.log(`I'm driving my ${this.model}, vroom vroom`)
    },
    park: function() {
        console.log(`The ${this.make} is now parked.`)
    }
}
*/

/*
const myObj = {
    stuff: 'Hello World',
    greet: 'hi',
    num: 10,
    arr: [4,6,7,'hi'],
    obj: {
        first: 'test',
        two: 'test2'
    }
};
myObj.add = 'hi';
myObj['test1'] = 'two';

const person = {
    first: 'Andrew',
    last: 'Kerr',
    id: 1,
    details: function() {
        return `${this.last}, ${this.first}, id #${this.id}`
    }
}
*/