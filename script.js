const insidePixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i<5; i+=1) {
    const createDiv = document.createElement('div'); 
    createDiv.className = "linePixel"; 

    insidePixelBoard.appendChild(createDiv);

    for (let n = 0; n<5; n+=1) {
        const createPixel = document.createElement('div'); 
        createPixel.className = "pixel"; 

        createDiv.appendChild(createPixel);
    }
}

// montar uma função que seleciona a cor clicada - adiciona a classe SELECTED e a aplica ao pixel clicado posteriormente, removendo a classe selected
// criar outra função .onload que seleciona a cor preta 
// criar uma função que aplica a cor selecionada ao pixel 

// let blackSelect = document.querySelector('.selected'); 

// blackSelect.addEventListener("onload", selectColor);


// window.onload = function selectBlack () { 
//     let black = document.querySelector('#one');
//     black.className = 'color selected'; 


// }



// function selectColor() {
//     // adiciona selected a classe da cor selecionada 
//     // remove selected da classe da cor que estava selecionada anteriormente 

//     target
// }

// function changeColor() { 
//     // aplica a cor selecionada ao pixel clicado 
// }

// blackSelect.addEventListener("onload", selectColor);

