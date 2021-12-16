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

// declara onde estão os elementos no DOM 
const black = document.querySelector('#zero');
const blue1 = document.querySelector('#one'); 
const blue2 = document.querySelector('#two');
const blue3 = document.querySelector('#three'); 
const colorPalette = document.querySelector('#color-palette');
const colorPalleteList = document.querySelectorAll('#color-palette');
 

// armazenam futuros valores; 
let clickedColor = undefined;
let clickedPixel = undefined; 
let color = undefined;

// onload - funçao adiciona selected à cor black 
window.onload = function() {
    black.classList.add('selected');
    clickedColor = black.id;
    color = black.id;
    createPixelBoard(5); 
    // console.log(clickedColor) 
}


// remove e classe selected de todas as cores da paleta 
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
        color = clickedColor.id; 
    } else { 
        removeSelected();
        clickedColor.classList.add('selected'); 
        color = clickedColor.id; 
    }
}

function selectColor (event) {
    clickedColor = event.target;  // o valor é indefinido pois aguarda o click 
    color = clickedColor.id; 
    classSelected();
}

// seleciona a cor com o click 
black.addEventListener('click', selectColor); 
blue1.addEventListener('click', selectColor); 
blue2.addEventListener('click', selectColor); 
blue3.addEventListener('click', selectColor); 

// // verifica qual a cor clicada 
// // armazena a cor em clicked color 
// colorPalette.addEventListener('click', event => { // encontrei esse método no canal do Roger Melo, experimentei e resolvia o que eu queria, dai fui pesquisar mais sobre arrow functions e bubbling effect pra entender melhor o que está acontecendo aqui :) >> pedi ajuda pro meu amigo Du Pedroso e entendi que não tinha necessidade de usar arrow functions nesse caso e reescrevi com uma função normal agora que entendo melhor os event listeners 
//     clickedColor = event.target;  // o valor é indefinido pois aguarda o click 
//     color = clickedColor.id; 
//     selectColor();
// console.log(color);

function paint (event) {
    clickedPixel = event.target; 
    if (clickedPixel.id) { 
        clickedPixel.remove.id;
        clickedPixel.id = color; 
    } else { 
        clickedPixel.id = color; 
    }
}

// pinta os pixels 

insidePixelBoard.addEventListener('click', paint);

// clear board 
let pixelKid = document.querySelectorAll('.pixel'); 

function clear () {
    for ( let i = 0; i < pixelKid.length; i += 1) {
        pixelKid[i].id = ""; 
    }
}

const clearbtn = document.querySelector('#clear-board');

clearbtn.addEventListener('click', clear);

// pixels dinamicos requisito 10 
const inputN = document.querySelector('#board-size');
const btnCreateBoard = document.querySelector('#generate-board'); 
const sectionBoard = document.querySelector('#secPixelBoard');

function generateNewBoard () { 
    let size = inputN.value;

    if (size < 5) { 
        size = 5;
    } else if ( size > 50) {
        size = 50;
    } else { 
        size = size
    }
    
    inputN.value = null; 

    let lines = document.querySelectorAll('.linePixel');

    for (let i = 0; i < lines.length; i += 1) {
        lines[i].remove();
    }
 createPixelBoard(size);
}

btnCreateBoard.addEventListener('click', generateNewBoard);
