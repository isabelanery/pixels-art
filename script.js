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

// onload - funçao adiciona selected à cor black 

const black = document.querySelector('#one');

window.onload = function() {
    black.classList.add('selected');
}