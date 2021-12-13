// cria o pixel board
const insidePixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i<5; i+=1) {
    const createLi = document.createElement('li'); 
    createLi.className = "linePixel"; 

    insidePixelBoard.appendChild(createLi);

    for (let n = 0; n<5; n+=1) {
        const createPixel = document.createElement('div'); 
        createPixel.className = "pixel"; 

        createLi.appendChild(createPixel);
    }
}

// declara onde estão os elementos
const black = document.querySelector('#zero');
const blue1 = document.querySelector('#one'); 
const blue2 = document.querySelector('#two');
const blue3 = document.querySelector('#three'); 
const colorPalette = document.querySelector('#color-palette');
const colorPalleteList = document.querySelectorAll('#color-palette'); 
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
    }
}


function selectColor () { 
    if (clickedColor.classList.contains('selected')) {
        color = clickedColor.id; 
    } else { 
        removeSelected();
        clickedColor.classList.add('selected'); 
        color = clickedColor.id; 
    }
}

function paint () {
    clickedPixel.id = color; 
}

// verifica qual a cor clicada 
// armazena a cor em clicked color 
colorPalette.addEventListener('click', event => { // encontrei esse método no canal do Roger Melo, experimentei e resolvia o que eu queria, dai fui pesquisar mais sobre arrow functions e bubbling effect pra entender melhor o que está acontecendo aqui :) 
    clickedColor = event.target;  // o valor é indefinido pois aguarda o click 
    color = clickedColor.id; 
    selectColor();
    // console.log(color);
} )

// verifica qual o pixel clicado 
insidePixelBoard.addEventListener('click', event => { 
    clickedPixel = event.target; // aguarda o click
    paint()
    // console.log(clickedPixel);
})



// aplicar selected color ao selecte pixel 



// black.addEventListener('click', verifySelected);
// blue1.addEventListener('click', verifySelected);
// blue2.addEventListener('click', verifySelected);
// blue3.addEventListener('click', verifySelected);

// funçao adiciona selected à cor clicada 



// a ser atualizada conforme clica 


// funçao remove selected da cor anterior