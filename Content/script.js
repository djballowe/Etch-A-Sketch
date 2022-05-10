const buttons = document.querySelectorAll('button');
const grid = document.querySelector('#theSketch');
const cell = document.createElement('div');



function theSketch(size) {

    if (size === 'small') {
        clearCanvas();
        grid.classList.add('theSketch');
        grid.classList.remove('theSketchLarge');
        grid.classList.remove('theSketchMedium')
        for(let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'draw';
            grid.appendChild(cell);
        }

    } else if (size === 'medium') {
        clearCanvasMedium()
        grid.classList.add('theSketchMedium');
        grid.classList.remove('theSketch');
        grid.classList.remove('theSketchLarge')
        for(let i = 0; i < 256; i++) {
            const cell = document.createElement('div');
            cell.className = 'draw';
            grid.appendChild(cell);
        }
        console.log(grid.classList);
        
    } else if (size === 'large') {
        clearCanvasLarge()
        grid.classList.add('theSketchLarge');
        grid.classList.remove('theSketch');
        grid.classList.remove('theSketchMedium')
        for(let i = 0; i < 400; i++) {
            const cell = document.createElement('div');
            cell.className = 'draw';
            grid.appendChild(cell);
        }
    }
}

function clearCanvas() {
    for (let i = 0; i < 100; i++) {
        let child = grid.lastElementChild;
        while (child) {
            grid.removeChild(child);
            child = grid.lastElementChild;
        }
    }
}

function clearCanvasMedium() {
    for (let i = 0; i < 256; i++) {
        let child = grid.lastElementChild;
        while (child) {
            grid.removeChild(child);
            child = grid.lastElementChild;
        }
    }
}

function clearCanvasLarge() {
    for (let i = 0; i < 400; i++) {
        let child = grid.lastElementChild;
        while (child) {
            grid.removeChild(child);
            child = grid.lastElementChild;
        }
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        theSketch(button.id);
        console.log(button.id);
    });
});
