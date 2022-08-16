console.log('this is separate file');



/// option 1

function Yellow() {
    document.body.style.backgroundColor = 'yellow';
}

/// option 2

const white1 = document.getElementById('white');
white1.onclick = white2;

function white2() {
    document.body.style.backgroundColor = 'aqua';
}