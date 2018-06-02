const colorSelected = document.querySelector("#colorPicker");

function makeGrid() {
    let inputHeight = document.getElementById('input_height').value;
    let inputWidth = document.getElementById('input_width').value;
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
        tableRow.addEventListener('click', clickCell);
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableBody); 
}

function clickCell(event) {
  const color = colorSelected.value;
  event.target.style.backgroundColor = color;
}
