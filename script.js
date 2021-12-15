// cria o pixel board
const insidePixelBoard = document.querySelector('#pixel-board');

let inputNumber = 5;

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

// declara onde estão os elementos no DOM 
const black = document.querySelector('#zero');
const blue1 = document.querySelector('#one'); 
const blue2 = document.querySelector('#two');
const blue3 = document.querySelector('#three'); 
const colorPalette = document.querySelector('#color-palette');
const colorPalleteList = document.querySelectorAll('#color-palette');
let clearbtn = document.querySelector('#clear-board'); 

// armazenam futuros valores; 
let clickedColor = undefined;
let clickedPixel = undefined; 
let color = undefined;

// onload - funçao adiciona selected à cor black 
window.onload = function() {
    black.classList.add('selected');
    clickedColor = black.id;
    color = black.id;
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
//     // console.log(color);
// } )

function paint (event) {
    clickedPixel = event.target; 
    if (clickedPixel.id) { 
        clickedPixel.remove.id;
        clickedPixel.id = color; 
    } else { 
        clickedPixel.id = color; 
    }
}

insidePixelBoard.addEventListener('click', paint);
 
// verifica qual o pixel clicado 
insidePixelBoard.addEventListener('click', event => { 
    clickedPixel = event.target; // aguarda o click

    // if else paint (); 
    // >>> falta remover a cor 
    // console.log(clickedPixel);
})




// // funçao que reseta o pixel board 
// function clearBoard () { 
//     for(let index = 0; index < insidePixelBoard.length; index += 1) {
//         let px = insidePixelBoard[index]; 
//         px.style.backgroundColor = white;
//     }
// }

// clearbtn.addEventListener('click', clearBoard());