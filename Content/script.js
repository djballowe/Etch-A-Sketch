const buttons = document.querySelectorAll('button');
const grid = document.querySelector('#theSketch');
const cell = document.createElement('div');

function onStart() {
    grid.classList.add('theSketch');
    for(let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'draw';
        grid.appendChild(cell);
    }
    hover()
}


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
        clearCanvas()
        grid.classList.add('theSketchMedium');
        grid.classList.remove('theSketch');
        grid.classList.remove('theSketchLarge')
        for(let i = 0; i < 256; i++) {
            const cell = document.createElement('div');
            cell.className = 'draw';
            grid.appendChild(cell);
        }
        
    } else if (size === 'large') {
        clearCanvas()
        grid.classList.add('theSketchLarge');
        grid.classList.remove('theSketch');
        grid.classList.remove('theSketchMedium')
        for(let i = 0; i < 400; i++) {
            const cell = document.createElement('div');
            cell.className = 'draw';
            grid.appendChild(cell);
        }
        
    }
    hover()
}

function clearCanvas() {
    let num = document.getElementById('theSketch').childElementCount;
    for (let i = 0; i < num; i++) {
        let child = grid.lastElementChild;
        while (child) {
            grid.removeChild(child);
            child = grid.lastElementChild;
        }
    }
}

function ButtonFunction() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            theSketch(button.id);
        });
    });
}

function hover() {
    document.querySelectorAll('.draw').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'grey';
            console.log('this is retarded');
        })
    })
}

onStart();



