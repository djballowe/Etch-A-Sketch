const buttons = document.querySelectorAll('button');
const grid = document.querySelector('.theSketch');

function theSketch(size) {
    if (size === 'small') {
        grid.classList.add('.theSketch');
    } else if (size === 'medium') {
        grid.classList.add('.theSketchMedium');
        console.log('medium')
    } else if (size === 'large') {
        grid.classList.add('theSketchLarge');
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        theSketch(button.id);
        console.log(button.id);
    });
});