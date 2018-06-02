//Access height, width and color of grid
const colorSelected = document.querySelector("#colorPicker");
const Height = document.getElementById('input_height');
const Width = document.getElementById('input_width');

// grid generation based on user input
function makeGrid() {
    let inputHeight = Height.value;
    let inputWidth = Width.value;
    let table = document.getElementById('pixel_canvas');

    table.innerHTML = '';

    let tableBody = document.createElement('tbody');
    
    for (let i = 0; i < inputHeight; i++) {
        let tableRow = document.createElement('tr');
        for (let j = 0; j < inputWidth; j++) {
            let tableData = document.createElement('td');
            tableData.appendChild(document.createTextNode(''));
            tableRow.appendChild(tableData);
        }
        tableData.addEventListener('click', clickCell);
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableBody); 
}
//An event listener that comes into action when a cell is clicked.
function clickCell(event) {
  const color = colorSelected.value;
  event.target.style.backgroundColor = color;
}
