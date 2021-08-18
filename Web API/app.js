// Section 19
const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);
let page = 1;

function getData() {
    btn.style.display = 'none';
    output.innerHTML = '';
    fetch(url + '?pg=' + page).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log(data);
        data.data.forEach(function (val) {
            let html = document.createElement('div');
            html.innerHTML = val[0] + ' ' + val[1] + ' ' + val[2] + '<br>';
            output.appendChild(html);
        })
        if (data.pgs.previous !== null) {
            let btn1 = document.createElement('button');
            btn1.textContent = data.pgs.previous;
            btn1.addEventListener('click', function (e) {
                page = data.pgs.previous;
                getData();
            })
            output.appendChild(btn1);
        }
        if (data.pgs.next !== null) {
            let btn2 = document.createElement('button');
            btn2.textContent = data.pgs.next;
            btn2.addEventListener('click', function (e) {
                page = data.pgs.next;
                getData();
            })
            output.appendChild(btn2);
        }
    })
}

// Section 18
/*
const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', sData);

function sData() {
    let val1 = document.querySelector('input[name="name"]').value || 'Unknown';
    let val2 = document.querySelector('input[name="message"]').value || 'Message';
    let arr = [val1, val2];
    let formData = new FormData();
    formData.append('data', JSON.stringify(arr));
    fetch(url, {
        method: 'POST'
        , body: formData
    }).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log(data);
    }).catch(function(error) {
        console.log(error);
    })
}
*/

// Section 17
// Google no longer supports the code below
/*
const id = '1L8uoxEfdkG1TNRNqgiKfD9XXGVhGO6uUXoweksPr1Kg';
const url = 'https://spreadsheets.google.com/feeds/list/' + id + '/1/public/values?alt=json';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);
const tbl = document.createElement('table');
const tbdy = document.createElement('tbody');
const row = ['First', 'Last', 'Status', 'Points'];
tbl.appendChild(tbdy);
output.appendChild(tbl);

function rowAdder(row) {
    console.log(row);
    const tr = document.createElement('tr');
    row.forEach(function (cell) {
        console.log(cell);
        let td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
    })
    tbdy.appendChild(tr);
}

function getData() {
    tbdy.innerHTML = "";
    rowAdder(row);
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data.feed.entry);
        data.feed.entry.forEach(function (val) {
            //console.log(val);
            let temp = [];
            for (const key in val) {
                //console.log(key);
                if (key.substring(0, 3) == 'gsx') {
                    //console.log(val[key]['$t']);
                    temp.push(val[key]['$t']);
                }
            }
            rowAdder(temp);
        })
    })
}
*/

// Section 16
// Google stop supporting the code below
/*
const id = '1L8uoxEfdkG1TNRNqgiKfD9XXGVhGO6uUXoweksPr1Kg';
const url = 'https://spreadsheets.google.com/feeds/list/' + id + '/1/public/values?alt=json';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData() {
  fetch(url).then(function (res) {
    return res.json()
  }).then(function (data) {
    console.log(data.feed.entry);
    data.feed.entry.forEach(function (val) {
      //console.log(val);
      let temp = [];
      for (const key in val) {
        //console.log(key);
        if (key.substring(0, 3) == 'gsx') {
          //console.log(val[key]['$t']);
          temp.push(val[key]['$t']);
        }
      }
      console.log(temp);
    })
  })
}
*/

// Section 15
/*
const url = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData(e) {
  e.preventDefault();
  fetch(url).then(function (rep) {
    return rep.json()
  }).then(function (data) {
    console.log(data.items);
    data.items.forEach(function (item) {
      console.log(item.question_id);
      console.log(item.title);
      console.log(item.link);
      let div = document.createElement('div');
      div.innerHTML = `${item.question_id} <a href="${item.link}" target="_blank">${item.title}</a>`;
      output.appendChild(div);
    })
  }).catch(function (e) {
    console.log(e);
  })
}
*/

// Section 14
/*
const url = 'https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData(e) {
  e.preventDefault();
  fetch(url).then(function (res) {
    return res.json()
  }).then(function (data) {
    mHTML(data.items);
  })
}

function mHTML(val) {
  output.innerHTML = "";
  for (let x = 1; x < val.length; x++) {
    console.log(val[x].name);
    console.log(val[x].description);
    console.log(val[x].url);
    let div = document.createElement('div');
    div.xurl = val[x].url;
    div.innerHTML = `${val[x].name} ${val[x].description}`;
    output.appendChild(div);
    div.addEventListener('click', function (e) {
      fetch(val[x].url).then(function (res) {
        return res.json()
      }).then(function (data) {
        console.log(data);
        let span = document.createElement('span');
        span.textContent = data.html_url;
        span.style.color = "red";
        div.appendChild(span);
      })
    }, {
      once: true
    })
  }
}
*/

// Section 13
/*
const url = 'https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData(e) {
    e.preventDefault();
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        mHTML(data.items);
    })
}

function mHTML(val) {
    output.innerHTML = "";
    for (let x = 1; x < val.length; x++) {
        console.log(val[x].name);
        console.log(val[x].description);
        console.log(val[x].url);
        let div = document.createElement('div');
        div.innerHTML = `${val[x].name} <a href="${val[x].url}" target="_blank">${val[x].description}</a>`;
        output.appendChild(div);
    }
}
*/

// Section 12
/*
const url = 'https://www.reddit.com/r/test/top/.json?limit=5';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData() {
    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log(data.data.children);
        makeHTML(data.data.children);
    })
}

function makeHTML(val) {
    output.innerHTML = "";
    val.forEach(function (item) {
        console.log(item.data.title);
        console.log(item.data.url);
        let div = document.createElement('div');
        div.innerHTML = `${item.data.title} <a href="${item.data.url}" target="_blank">Link</a>`;
        output.appendChild(div);
    })
}
*/

// Section 11
/*
const url = 'https://randomuser.me/api/?results=10';
const btn = document.querySelector('button');
const output = document.querySelector('.output');
btn.addEventListener('click', getData);

function getData() {
  output.innerHTML = "";
  fetch(url).then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data.results);
    data.results.forEach(function (val) {
      console.log(val.name);
      console.log(val.picture.thumbnail);
      let div = document.createElement('div');
      div.textContent = `${val.name.title} ${val.name.first} ${val.name.last}`;
      let ima = document.createElement('img');
      ima.setAttribute('src', val.picture.thumbnail);
      ima.style.display = 'block';
      div.appendChild(ima);
      output.appendChild(div);
    })
  })
}
*/

// Section 10
/*
const url = "json.json";
//fetch(url).then(res => res.json()).then(json => console.log(json));
const output = document.querySelector('.output');
fetch(url).then(function (res) {
    return res.json()
}).then( (json) => {
    console.log(json)
})
fetch(url).then(res => res.json()).then(json => {
    console.log(json.books)
    json.books.forEach(val => {
        output.innerHTML += val.title + '<br>';
    })
})
*/
// Section 9
/*
const url = "json.json";
const output = document.querySelector('.output');
let xHR = new XMLHttpRequest();
xHR.open('GET', url);
xHR.responseType = 'json';
xHR.onload = function () {
    console.log(xHR.response);
    let data = xHR.response;
    data.books.forEach(function (val) {
        output.innerHTML += val.title + '<br>';
    })
}
xHR.send();
console.log(xHR);
*/
/*
fetch(url).then(function (res) {
    return res.json()
}).then(function (data) {
    console.log(data.books);
    data.books.forEach(function (val) {
        output.innerHTML += val.title + '<br>';
    })
}).catch(function (error) {
    console.log(error);
})
*/
// Section 8
/*
const url = "http://myjson.dit.upm.es/api/bins/xxb";
const output = document.querySelector('.output');
fetch(url).then(function (res) {
    return res.json()
}).then(function (data) {
    console.log(data.books);
    data.books.forEach(function (val) {
        output.innerHTML += val.title + '<br>';
    })
}).catch(function (error) {
    console.log(error);
})
*/

// Section 7
/*
// The URL below is blocked.
const url = "https://n161.tech/api/dummyapi/user?limit=5&page=1";
const output = document.querySelector('.output');
fetch(url).then(function (res) {
    console.log(res);
    return res.json()
}).then(function (data) {
    console.log(data.data);
    data.data.forEach(function (val) {
        output.innerHTML += val.firstName + ' ' + val.lastName + '<br>';
    });
}).catch(function (error) {
    console.log(error);
})
*/

// Section 6
/*
json.books.forEach( (val) => {
    console.log(val);
})
test.people.forEach( (value) => {
    console.log(value)
})
*/
/*
const json = {
    "books": [
        {
            "title": "Learn to Code"
            , "author": "John Smith"
            , "isbn": "324-23243"
        }
        , {
            "title": "The Adventures JSON"
            , "author": "Jason Jones"
            , "isbn": "3324-2-444"
        }
        , {
            "title": "New Objects"
            , "author": "Jane Doe"
            , "isbn": "2343-234-2433"
        }
    ]
};
console.log(json);
json.books.forEach(function (val) {
    console.log(val);
})
const test = {
    "people": [
        {
            "first": "Laurence"
            , "last": "Svekis"
        }
        , {
            "first": "Laurence"
            , "last": "Svekis"
        }
        , {
            "first": "Laurence"
            , "last": "Svekis"
        }
        , {
            "first": "Laurence"
            , "last": "Svekis"
        }
    ]
};
console.log(test);
*/

// Section 5
/*
const friend = {
    name: 'Laurence Svekis',
    age: 40,
    gender: 'male',
    location: {
        city: 'Toronto',
        country: 'Canada',
        address: '100 Main St.'
    }
}
const friend1 = { name: 'Laurence'};
const friend2 = { name: 'John' };
const friend3 = { name: 'Jane' };

const friends = [friend1, friend2, friend3];
console.log(JSON.stringify(friends));
const str = '[{"name":"Laurence"},{"name":"John"},{"name":"Jane"}]';
const friends2 = JSON.parse(str);

friends2.push({
    "name":"Mike"
})
let html = '';
friends2.forEach( (val) => {
    console.log(val.name);
    html += val.name + '<br />';
});
document.querySelector('.output').innerHTML = html;
*/

// Section 4
/*
const friend1 = { name: 'Laurence'};
const friend2 = { name: 'John' };
const friend3 = { name: 'Jane' };

const friend = {
    name: 'Laurence Svekis',
    age: 40,
    gender: 'male',
    location: {
        city: 'Toronto',
        country: 'Canada',
        address: '100 Main St.'
    }
}

const friends = [friend1, friend2, friend3];
console.log(friends);

for (const key in friend) {
    console.log(friend[key]);

}
console.log(Object.entries(friend));
for(const[key, value] of Object.entries(friends)) {
    console.log(key);
    console.log(value);
    console.log(value.name);
}

for(const[key, value] of Object.entries(friends)) {
    //friends[key].last = 'Smith';
    value.lastName = 'Smith';
}
console.log(friends);
*/

// Section 3
/*
const friend1 = { name: 'Laurence'};
const friend2 = { name: 'John' };
const friend3 = { name: 'Jane' };
const friends = [friend1, friend2];
friends.push(friend3);
console.log(friends);

for(let x=0; x < friends.length; x++) {
    console.log(friends[x]);
};

friends.forEach = (item, index, array) => {
    console.log(item.name);
};

for (friend in friends) {
    console.log(friends[friend].name);
}

const friendList = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
const newArray = [];

friendList.forEach( (item) => {

    let temp = {
        name: item
    }
    newArray.push(temp);
});
console.log(newArray);
*/

// Section 2
/*
const friends = ['Laurence', 'Steve', 'Linda', 'Jane'];
console.log(friends);
console.log(friends[2]);

const friend1 = {
    name: 'Laurence'
}

const friend2 = {
    name: 'John'
}

const friendList = [friend1, friend2];
friendList[10] = {
    name: 'Linda'
}
console.log(friendList);

document.querySelector('.output').textContent = friendList[1].name // OR friendList[1]['name'];
*/

// Section 1
/*
const friend = {
    name: 'Laurence Svekis',
    age: 40,
    gender: 'male',
    location: {
        city: 'Toronto',
        country: 'Canada',
        address: '100 Main St.'
    }
}

console.log(friend);
console.log(friend.name);
console.log(friend['name']);

document.querySelector('.output').textContent = friend.location.country;
*/