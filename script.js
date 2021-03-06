// cria o pixel board (+ req 10 )
let insidePixelBoard = document.querySelector('#pixel-board');

function createPixelBoard (inputNumber) {

    for (let i = 0; i < inputNumber; i += 1) {
        const createDiv = document.createElement('div'); 
        createDiv.className = "linePixel"; 

        insidePixelBoard.appendChild(createDiv);

        for (let n = 0; n < inputNumber; n += 1) {
            const createPixel = document.createElement('div'); 
            createPixel.className = "pixel"; 

            createDiv.appendChild(createPixel);
        }
    }
}

// armazenam futuros valores; 
let clickedColor = undefined;
let clickedPixel = undefined; 
let color = undefined;

// onload -  
window.onload = function() {
    black.style.backgroundColor = '#000000'
    black.classList.add('selected');
    clickedColor = black.style.backgroundColor; 
    // console.log(clickedColor)
    color = clickedColor;
    createPixelBoard(5); 
    newColors();
}

// declara onde estão os elementos no DOM 
const black = document.querySelector('.zero');
const blue1 = document.querySelector('.one'); 
const blue2 = document.querySelector('.two');
const blue3 = document.querySelector('.three'); 
const colorPalette = document.querySelector('#color-palette');
const colorPalleteList = document.querySelectorAll('#color-palette');

// change colors 

function randomColor () { 
    var digits = '0123456789ABCDEF'; 
    var color = '#'; 
    for (var i = 0; i < 6; i +=1 ) { 
        color += digits[Math.floor(Math.random() * 16)];
    }
    return color 
} // encontrei essa solução para gerar cor aleatória no Stack Overflow, entendi o que tava acontecendo e adicionei aqui :) 

function newColors () { 
    blue1.style.backgroundColor = randomColor(); 
    blue2.style.backgroundColor = randomColor(); 
    blue3.style.backgroundColor = randomColor(); 
}

const btnColors = document.getElementById('new-colors'); 
btnColors.addEventListener('click', newColors); 
// 


// remove a classe selected de todas as cores da paleta 
function removeSelected () { 
    if (black.classList.contains('selected')) {
        black.classList.remove('selected'); 
    } else if (blue1.classList.contains('selected')) {
        blue1.classList.remove('selected'); 
    } else if (blue2.classList.contains('selected')) {
        blue2.classList.remove('selected'); 
    } else if (blue3.classList.contains('selected')) {
        blue3.classList.remove('selected'); 
    } else if (colorPalette.classList.contains('selected')) {
        colorPalette.classList.remove('selected'); 
    }
}

// seleciona a cor 
function classSelected () { 
    if (clickedColor.classList.contains('selected')) {
        color = clickedColor.style.backgroundColor;
        // console.log(color) 
    } else { 
        removeSelected();
        color = clickedColor.style.backgroundColor; 
        clickedColor.classList.add('selected'); 
        // console.log(color)
    }
}

function selectColor (event) {
    clickedColor = event.target;  // o valor é indefinido pois aguarda o click 
    color = clickedColor.style.backgroundColor; 

    // console.log(color) 
    // mudar a forma de pintar = style.bgcolor 
    classSelected();
}

// seleciona a cor com o click 
black.addEventListener('click', selectColor); 
blue1.addEventListener('click', selectColor); 
blue2.addEventListener('click', selectColor); 
blue3.addEventListener('click', selectColor); 

function paint (event) {
    clickedPixel = event.target; 
    // if (clickedPixel.classList.length >= 1) { 
    //     clickedPixel.classList.remove(clickedPixel.classList[1]);
    //     clickedPixel.classList.add(color); 
    // } else { 
    //     clickedPixel.classList.add(color); 
    // }

    clickedPixel.style.backgroundColor = color;
}

// pinta os pixels 
insidePixelBoard.addEventListener('click', paint);

// clear board 
let pixelKid = document.getElementsByClassName('pixel'); 

function clear () {
    for ( let i = 0; i < pixelKid.length; i += 1) {
        pixelKid[i].classList.remove(pixelKid[i].classList[1]); 
        pixelKid[i].style.backgroundColor = '#FFFFFF';
    }
}

const clearbtn = document.querySelector('#clear-board');
clearbtn.addEventListener('click', clear);

// pixels dinamicos requisito 10 
const inputN = document.getElementById('board-size');
const btnCreateBoard = document.querySelector('#generate-board'); 
const sectionBoard = document.querySelector('#secPixelBoard');

function removeBoard() { 
    let lines = document.querySelectorAll('.linePixel');

    for (let i = 0; i < lines.length; i += 1) {
        lines[i].remove();
    }
}

function generateNewBoard () { 
    let size = inputN.value;

    if (size < 5) { 
        size = 5;
    } else if ( size > 50) {
        size = 50;
    } else { 
        size = size
    }

    if (inputN.value === "") { // travando aqui 
        window.alert('Board inválido!'); 
    } else {
        removeBoard(); 
        createPixelBoard(size); 
    }

    inputN.value = null; 
}

btnCreateBoard.addEventListener('click', generateNewBoard);


