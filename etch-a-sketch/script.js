const gridContainer = document.getElementById('grid-container');
const generateBtn = document.getElementById('generateBtn');
const cellInput = document.getElementById('cellInput');
let sideOfSquare = 16;

function generateGrid(size) {
    document.documentElement.style.setProperty("--cell-width", 400 / size + 'px');
    for (let i=0; i < size*size; i++) {
        cell = document.createElement('div');
        cell.id = "cell" + i;
        cell.classList.add('grid-cell')
        gridContainer.appendChild(cell)
    }
    for (let i=0; i < size*size; i++) {
        let cell = document.getElementById('cell'+i);
        cell.addEventListener('mouseover', () => {
            if (cell.classList.contains('black')) {
                // arr = cell.classList.splice(cell.classList.indexOf('black'));
                // cell.classList = arr;
                cell.classList.remove('black');
            }
            else {
                cell.classList.add('black');
            }
        });
    }
}

generateBtn.addEventListener('click', () => {
    gridContainer.replaceChildren(); // kill all children
    generateGrid(parseInt(cellInput.value));
});

generateGrid(16);