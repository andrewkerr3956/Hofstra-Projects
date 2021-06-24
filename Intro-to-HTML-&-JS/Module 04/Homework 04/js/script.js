var slideInterval = 3500;

function getFigures() {
    var figure = document.getElementById('carousel').getElementsByTagName('figure');
    return figure;
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for(var i = 0; i < figures.length; i++ ) {
        if(figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if(++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback() {
    setTimeout(moveForward, slideInterval);
}

startPlayback();