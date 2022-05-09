const buttons = document.querySelectorAll('button');
const grid = document.querySelector('.theSketch');



function theSketch(size) {

    if (size === 'small') {
        for(let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'draw';
            grid.appendChild(cell);
        }

    } else if (size === 'medium') {
        grid.classList.add('.theSketchMedium');
        for(let i = 0; i < 256; i++) {
            const cell = document.createElement('div');
            cell.className = 'draw';
            grid.appendChild(cell);
        }
    } else if (size === 'large') {
        grid.classList.add('theSketchLarge');
        console.log('large');
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        theSketch(button.id);
        console.log(button.id);
    });
});