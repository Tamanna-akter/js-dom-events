function makeRed() {
    document.body.style.backgroundColor = 'red';
}
//function using id to set blue color
const blueButton = document.getElementById('make-blue-button');
//just set the function name
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
//handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
//anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle button using add listener event
const goldenButton = document.getElementById('make-Goldenrod');
goldenButton.addEventListener('click', makeGoldenRod)
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod'
}

//add event listener
const hotPinkButton = document.getElementById('make-Hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})
//direct shortcut

document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
