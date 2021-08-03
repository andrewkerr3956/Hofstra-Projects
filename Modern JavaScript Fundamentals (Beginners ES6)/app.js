 // document.body.textContent = "hello";

// comment
// console.log('hi'); // This is a comment. This code won't run due to that.

/*
This is
a long
comment
*/
let message = 'Hello World';
alert(message);
message = "New Value";
console.log(message);
let val = "string value"; // string
val = "updated";
let val1 = 35; // Number
val = "String";
console.log(typeof val1); // View the data type of a variable.
console.log(message, val1);

const newval = 'Hello World'; let val2 = 'Hi Everyone';

let num = 100 // number
let str = 'String' // string
let bool = true; // boolean
let nu = null; // declared variable but no value assigned.
let undef; // undefined variable

// Strings
let first = 'Andrew';
let last = 'Kerr';
console.log(first, last);
let fullName = first + ' ' + last;
console.log(fullName);
console.log(first.length);
console.log(fullName.length);
console.log(first[8]);
let initials = first[0] + last[0];
console.log(first.toUpperCase());
console.log(last.toLowerCase());
console.log(first);
first = first.toLowerCase();
console.log(first);
str = 'I love JavaScript because its JavaScript';
val = str.indexOf('JavaScript');
console.log(val);
let lastVal = str.lastIndexOf('JavaScript');
console.log(lastVal);
val2 = str.search('JavaScript');
console.log(val2);
let val3 = str.indexOf('JavaScript',20);
console.log(val3);
first = 'aNdReW';
last = 'kERr';
let needle = 'JavaScript';
str = 'I love ' + needle + ', becauses its ' + needle + ', and ' + needle + ' its the best';
console.log(str);
let start = str.indexOf(needle);
let len = needle.length;
let end = start + len;
console.log(start, len, end);
let firstSlice = str.slice(start);
let mySlice = str.slice(start, end);
let subby = str.substring(start, end);
let subby2 = str.substr(start, len);
let html = str.replace(needle, 'HTML');


// Numbers
let a = 10;
let b = 25;
console.log(a, b);
// Math operators +,-,*,/,%
let c = a * b * b + a;
console.log(c);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(b % a);
// JavaScript handles mathematical solving in PEMDAS order.
console.log(5 + (a * b) - 10);
a = a + 1;
a++;
a = a + 10;
a += 10;
a -= 22;
a *= 5;
console.log(a);
c = 10;
let d = '25';
console.log(a + b);
let e = '20 hello';
console.log(a + c);
d++; // JavaScript converts string number back into number type
console.log(d);
e++; // Starts with number, but hello being in the string does not allow it to be converted back to a number
console.log(e); // NaN
let f = Number(d);
console.log(f);
console.log(Number(c));
console.log(parseInt(d));
console.log(parseInt(e)); // Converts the number and ignores the rest of the string

// Template literals
let greeting = 'Hello World';
let js = 'JavaScript';
let mes1 = 'i\'d rather be coding ' + js;
let mes2 = `I'd rather be coding ${js}`; 
let mes3 = `
<h1>${js}</h1>
<p>${mes1}</p>
<p>${mes2}</p>
`;
console.log(mes3);

// Arrays
let friends = ['Mike', 'John', 'Lisa', 'Jane'];
let friends2 = ['Mike', 'John', 'Lisa', 'Jane'];
console.log(friends[0]);
console.log(friends.length);
console.log(friends[2]);
friends[2] = 'Jack';
console.log(friends);
// Arrays can contain several different data types
let mixer = ['Hello', 50, true, 100, 600, null, [1, 2, 3]];
console.log(mixer[6]);
console.log(mixer[6][2]);
console.log(mixer);
mixer[6][1] = 100;
console.log(mixer.toString());
let mixer2 = mixer.toString();
console.log(mixer2);
let joiner = friends.join('----*----');
console.log(joiner);
// Remove last item from friends array
let itemLast = friends.pop();
console.log(itemLast);
// Add new item to last index position in friends array
friends.push('Linda');
console.log(friends);
let itemFirst = friends.shift();
friends.unshift('Bob');
let middle = friends.splice(2, 2, 'Larry', 'Joe', 'Jen');
console.log(middle);
let firstItem = friends.splice(0, 1);
let myArray = friends.concat(friends2);
// Manipulates the order of the array
friends.sort(); 
friends2.reverse();
friends2.sort().reverse();

console.log(friends);
console.log(friends2);
console.log(friends.includes('Mike'));

// Booleans
let okay = true;
let notOkay = false;
message = 'Hello JavaScript';
let checker = message.includes('JavaScript');
console.log(message == 'JavaScript');
console.log(message == 'Hello JavaScript');
console.log(5 == 5);
console.log(5 != 5);
console.log(10 < 5);
console.log(5 <= 5);
console.log (1 > 6);
console.log(1 >= 6);
console.log('5' == 5); // TRUE
console.log('5' === 5); // FALSE; third equals sign checks the data type
console.log(typeof('5'));
console.log(typeof(true));
if (okay) { // okay is set to true
    console.log('it was true');
}
else {
    console.log('it was false');
}
let word = 'HTML';
if(checker) {
    console.log(`${word} was found`);
}
else {
    console.log(`${word} was not found`);
}
let output = (word === 'JavaScript') ? 'It was true' : 'It was not true';
console.log(output);
word = 'JavaScript';
checker = message.includes(word);
let output1 = (checker) ? `${word} was found` : `${word} was not found`;
console.log(output1);

for (let x = 0; x < 5; x++) {
    console.log(x);
}
console.log('LOOP COMPLETED');
let y = 0;
while(y < 5) {
    console.log(y);
    y++;
}
console.log('WHILE LOOP COMPLETED');
let z = 0;
do {
    console.log(z);
    z++;
}
while(z < 5);
// WILL ALWAYS RUN AT LEAST ONCE
console.log('dowhile loop completed');

// Loops with arrays
for(let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
let j = 0;
while (j < friends.length) {
    console.log(friends[j]);
    j++;
} 

// Functions
const message1 = function(msg = 'default', num = 100){
    console.log('Hello world function expression' + ' ' + msg + ' ' + num);
    return msg;
}
message1();

function message2(msg = 'default') {
    console.log('Hello world function declaration' + ' ' + `${msg}`);
    return msg;
}
message2();

console.log(message1());
let str2 = message1('Hello World', 350);
let str3 = message2(25);

const addme = function(a = 0, b = 10) {
    console.log(a, b);
    return a + b;
}
console.log(addme());
console.log(addme(5, 22));
console.log(addme(50, 7));

const adder = (a = 0, b = 10) => {
    console.log(a, b);
    return a + b + 10;
}
console.log(adder());
console.log(adder(5));
console.log(adder(5, 7));

const adder2 = /*Parameters*/ (a = 0, b = 10) => /* Return */ a + b + 10;
console.log(adder2());
console.log(adder2(5));
console.log(adder2(5, 7));

// Callback functions
function greeter(name) {
    console.log(`Hello ${name}`);
}
function test(callback) {
    let name = 'Laurence';
    callback(name); /* Function passed to another function as an argument */
}
test(greeter);

console.log(friends);
friends.forEach(function(friend, index) {
    console.log(friend, index);
    console.log(friend);
});
friends.forEach((friend, index) => {
    console.log(friend, index);
    console.log(friend);
});

// Objects
let car = {
    make: 'ford',
    model: 'mustang',
    year: 2000,
    price: 50000,
    color: 'red',
    tires: true,
    drive() {
        console.log('its driving'); 
    },
    instructions: ['Turn key', 'Put in gear', 'Press gas pedal'],
    help() {
        console.log(this);
    },
    info() {
        console.log(`Make ${this.make} Model ${this.model}`);
    },
    howto() {
        this.instructions.forEach(step => {
            console.log(step);
        })
    }
};
console.log(car);
car.color = 'blue';
console.log(car);
car['color'] = 'green';
console.log(car.color);

let prop = 'make';
car[prop] = 'black';
console.log(car);

car.inside = ['radio', 'seats', 'steering wheel', true];
car.outside = {
    tires: 4,
    windshield: 'glass',
    bumper: true
}
console.log(car.outside.windshield);
console.log(car);
car.drive();
car.howto();

let friend1 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 40
};
console.log(Object.keys(friend1));
console.log(Object.values(friend1));
for(prop in friend1) {
    console.log(prop);
    console.log(friend1[prop]);
}

let friend2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25
};
for(prop in friend2) {
    console.log(prop);
    console.log(friend2[prop]);
}

let newfriends = {
    list: [friend1, friend2]
};
console.log(newfriends.list);
newfriends.list.forEach(function(friend) {
    console.log(`${friend.firstName} ${friend.lastName}`);
});

// Document Object Model (DOM)
console.dir(document)
console.log(document.querySelector('div'));
document.querySelector('div').textContent = 'Hi';
const el1 = document.querySelector('div');
el1.textContent = '#1';
const el2 = document.querySelector('#main');
el2.textContent = '#2';
const el3 = document.getElementById('main');
el3.textContent = '#3';
el2.textContent = '#4';
const el4 = document.querySelector('#output');
el4.textContent = '#5';
el2.style.backgroundColor = 'blue';
console.log(el4.style.backgroundColor);

const el5 = document.querySelectorAll('div');
console.log(el5);
console.log('For loop query selector');
for(let i = 0; i < el5.length; i++) {
    console.log(el5[i]);
    el5[i].style.color = 'red';
    el5[i].textContent = `${i} Next div`;
}
el5[1].style.backgroundColor = 'purple';

el5.forEach(function(el) {
    // console.log(el);
    el.addEventListener('mouseover', function(e) {
        // console.log(this);
        // console.log(e.target);
        console.log(el.textContent);
        el.style.backgroundColor = 'yellow';
    });
    el.addEventListener('mouseout', function(e) {
        el.style.backgroundColor = 'white';
    });
    el.style.backgroundColor = 'green';
});