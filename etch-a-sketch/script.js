const gridContainer = document.getElementById('grid-container');

sideOfSquare = 16;
for (let i=0; i < sideOfSquare*sideOfSquare; i++) {
    cell = document.createElement('div');
    cell.id = "cell" + i;
    cell.classList.add('grid-cell')
    gridContainer.appendChild(cell)
}
for (let i=0; i < sideOfSquare*sideOfSquare; i++) {
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