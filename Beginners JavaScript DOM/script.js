/*
let stopper = false;
let dir = 1;
const mover = document.createElement('div');
mover.style.position = 'absolute';
mover.style.left = '10px';
mover.style.top = '100px';
mover.style.backgroundColor = 'red';
mover.style.padding = '20px';
mover.textContent = 'Catch Me';
mover.style.color = 'white';
mover.addEventListener('click', animateMe);
const myOutput = document.querySelector('.container');
let animator = window.requestAnimationFrame(render);
myOutput.appendChild(mover);

function animateMe() {
    if (stopper) {
        animator = window.requestAnimationFrame(render);
        stopper = false;
        console.log(dir);
        dir *= -1;
    }
    else {
        stopper = true;
        window.cancelAnimationFrame(animator);
    }
}

function render() {
    let pos = mover.offsetLeft;
    //console.log(pos);
    mover.style.left = (pos + dir) + 'px';
    animator = window.requestAnimationFrame(render);
}

let blinky;
const btn1 = document.querySelector('.navbar-toggle');
const output = document.querySelector('.container');
const btns = document.querySelectorAll('button');
btns.forEach(function (el) {
    el.addEventListener('click', stopChanger);
})
btn1.addEventListener('click', function () {
    blinky = setInterval(changer, 100);
})
blinky = setInterval(changer, 100);

function stopChanger(e) {
    e.preventDefault();
    clearInterval(blinky);
}

function changer() {
    output.style.color = output.style.color == 'red' ? 'black' : 'red';
    output.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
}

const myName = document.querySelector('input[name=firstName]');
const myEmail = document.querySelector('input[name=email]');
console.log(myName.value);
const btnSubmit = document.querySelector('#submitButton');
btnSubmit.addEventListener('click', submitForm);
const output = document.querySelector('#header');

function submitForm(e) {
    e.preventDefault();
    if (myName.value) {
        output.textContent = 'Hello ' + myName.value + ' (' + myEmail.value + ')';
    }
}

const num = 10;
const output = document.querySelector('.container');
const myDiv = document.createElement('div');
myDiv.setAttribute('class', 'red');
myDiv.style.fontSize = '3em';
myDiv.textContent = 'Hello World';
document.body.prepend(myDiv);
for (let x = 0; x < num; x++) {
    let img = document.createElement('img');
    let clr = Math.random().toString(16).substr(-6);
    img.src = 'https://via.placeholder.com/100x100/' + clr;
    img.addEventListener('click', function (e) {
        img.src = 'https://via.placeholder.com/100x100/' + Math.random().toString(16).substr(-6);
    })
    myDiv.prepend(img);

const num = 10;
const output = document.querySelector('.container');
const myDiv = document.createElement('div');
myDiv.setAttribute('class', 'red');
myDiv.style.fontSize = '3em';
myDiv.textContent = 'Hello World';
document.body.prepend(myDiv);
for (let x = 0; x < num; x++) {
    let img = document.createElement('img');
    let clr = Math.random().toString(16).substr(-6);
    img.src = 'https://via.placeholder.com/100x100/' + clr;
    myDiv.prepend(img);
}
const myImages = document.querySelectorAll('img');
myImages.forEach(function (el) {
    el.addEventListener('click', function (e) {
        let clr = Math.random().toString(16).substr(-6);
        e.target.src = 'https://via.placeholder.com/100x100/' + clr;
    })
})

const output = document.querySelector('.container');
const header = document.querySelector('#header');
const mouseMover = function(e) {
    console.log(e);
    console.log(e.x);
    header.textContent = 'x is at ' + e.x + ' y is at ' + e.y;
}
output.addEventListener('mouseover', mouseMover);

const btns = document.querySelectorAll('button');
const output = document.querySelector('.navbar');
let cnt = 0;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', btnClick, true);
}

function btnClick(e) {
    console.log(e);
    console.log(this);
    cnt++;
    console.log(cnt);
    e.target.style.backgroundColor = 'red';
    this.textContent = 'You clicked #' + cnt;
}

const myButton = document.querySelector('#btnA');
myButton.textContent = 'THIS ONE !!!!!!';
myButton.style.backgroundColor = 'red';
let counter = 0;
const main = document.querySelector('.navbar');
myButton.addEventListener('click', () => {
    counter++;
    console.log('clicked');
    main.textContent = 'You clicked it ' + counter;
})

const vals = [200, 300, 400];
const main =  document.querySelector('.container');
vals.forEach( (v) => {
    let img = document.createElement('img');
    console.log(img);
    img.setAttribute('src', 'https://via.placeholder.com/' + v +'x100/0000ff');
    let html = document.createElement('div');
    console.log(html);
    html.appendChild(img);
    main.prepend(html);
    main.appendChild(html);
    console.log(html);
});

vals.forEach( (v) => {
    let html = `<img src='https://via.placeholder.com/' + ${v} + 'x100/0000ff'>`;
    main.innerHTML += html;
    main.prepend(html);
});

const ul = document.querySelector('.row ul');
const li = document.createElement('li');
li.appendChild(document.createTextNode('List f'));
li.textContent = 'List F';
li.setAttribute('id', 'listF');
li.classList.add('listClass');
console.log(li);
ul.appendChild(li);

const btn = document.querySelector('button');
btn.setAttribute('id','myButton');
console.log(btn.id);
btn.removeAttribute('id');
console.log(btn.id);

const rows = document.querySelectorAll('.row');
for(let i = 0; i < rows.length; i++) {
    console.log(rows[i].className);
    rows[i].className += ' blue '; // Spacing in className is intentional and necessary.
    rows[i]
}
rows.forEach( (el, index) => {
    console.log(el);
    console.log(index);
    el.classList.add('red');
    el.classList.remove('blue');
    el.classList.toggle('red'); // If class is already present, removes it. If class is not present, adds it instead.
});

const rowElement = document.getElementsByClassName('row');
for(let i = 0; i < rowElement.length; i++) {
    console.log(rowElement[i]);
    let el = rowElement[i];
    el.style.textAlign = 'center';
    el.style.color = 'blue';
    el.style.backgroundColor = 'red';
    el.style.border = '1px solid red';
}

const headerElement = document.getElementById('header');
headerElement.innerHTML = 'New Content';
headerElement.style.backgroundColor = 'yellow';
headerElement.style.fontFamily = 'Cambria';
headerElement.style.border = '5px solid black';
headerElement.style.padding = '5px';

const ul1 = document.getElementsByTagName('ul')[1];
console.log(ul1.childNodes);
console.log(ul1.children);
for(let i = 0; i < ul1.children.length; i++) {
    console.log(ul1.children[i]);
    console.log(ul1.children[i].nodeType);
}
for(let i = 0; i < ul1.children.length; i++) {
    console.log(ul1.childNodes[i]);
    console.log(ul1.childNodes[i].nodeType);
}
const el1 = document.querySelectorAll('div')[3];
console.dir(el1);
console.dir(el1.childNodes[1].childNodes[0].childNodes[0]);
el1.childNodes[1].childNodes[0].childNodes[0].textContent = 'WOW';

const myImgs = document.getElementsByTagName('img');
console.log(myImgs);
for(let i = 0; i < myImgs.length; i++ ) {
    console.log(myImgs[i]);
    myImgs[i].height = 20;
    myImgs[i].title = myImgs[i].alt;
    console.log(myImgs[i].alt);
}

const myVal = document.querySelector('a[href*=\'JS\']');
console.log(myVal);
for (let i = 0; i < myVal.length; i++) {
    console.log(myVal[i].href);
    myVal[i].textContent = 'CHANGED ' + i;
    myVal[i].href = 'http://www.discoveryvip.com';
}
const container = document.querySelector('ul.nav');
console.log(container);
const liActive = container.querySelectorAll('li.active');
console.log(liActive);
console.log(liActive[0]);

const els1 = document.querySelectorAll('p');
console.log(els1);
const els2 = document.querySelectorAll('p .second');
console.log(els2);
const els3 = document.querySelectorAll('p .first');
console.log(els3);
for(let i = 0; i < els3.length; i++) {
    console.log(els3[i]);
    els3[i].innerHTML = els3[i].textContent + '<b>' + i + '</b>';
}

const el1 = document.querySelector('h1');
console.log(el1);
const el2 = document.querySelector('.row');
console.log(el2);
const el3 = document.querySelector('#header');
console.log(el1);
el1.textContent = 'Hello';
console.log(el3.textContent);

const hh = document.getElementById('div');
hh.textContent = 'New Header';
const getID = document.getElementById('header');
getID.textContent = 'New Value';
const byTag = document.getElementsByTagName('h1');
console.log(byTag);
byTag[4].textContent = 'UPDATED --------------';

console.dir(document);
const hh = document.getElementById('#header');
hh.textContent = 'New Header';

document.body.innerHTML = 'new page';
console.log(document.body);
console.dir(document.body);

document.write('hello world');
console.log('hello');
const x = 'Hello World';
document.getElementById('idOne').innerHTML = x;

var myvalue = document.getElementById('idOne');
var info = myvalue.textContent;
console.log(typeof myvalue);
console.log(typeof info);
console.info(info);
console.warn(info);
console.error(info);
console.log('%c Hello', 'color: green; font-weight: bold;');
console.log('%c Hello', 'color: white; background: blue; font-weight: bold;');
*/