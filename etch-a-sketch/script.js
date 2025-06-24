const gridContainer = document.getElementById('grid-container');
const generateBtn = document.getElementById('generateBtn');
const cellInput = document.getElementById('cellInput');

function generateGrid(size) {
    const containerSize = 400;
    const cellSize = Math.floor(containerSize / size);
    document.documentElement.style.setProperty("--cell-width", `${cellSize}px`);

    const cols = Math.floor(containerSize / cellSize);
    const rows = cols;
    const totalCells = cols * rows;

    gridContainer.replaceChildren();

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.id = "cell" + i;
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    }
    for (let i = 0; i < totalCells; i++) {
        const cell = document.getElementById('cell' + i);
        cell.addEventListener('mouseover', () => {
            cell.classList.toggle('black');
        });
    }
}

generateBtn.addEventListener('click', () => {
    generateGrid(parseInt(cellInput.value));
});

generateGrid(16);