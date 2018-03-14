let table = document.getElementById("pixelCanvas");
let canvas = document.getElementById("colorPicker");

document.querySelector("#submitButton").addEventListener("click", function (e) {
    e.preventDefault();
    makeGrid();
});

function makeGrid() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    let gridWidth = document.getElementById("inputWeight").value;
    let gridHeight = document.getElementById("inputHeight").value;

    for (let i = 0; i < gridWidth; i++) {
        const newtr = document.createElement("tr");
        table.appendChild(newtr);
        for (let j = 0; j < gridHeight; j++) {
            const newtd = document.createElement("td");
            newtr.appendChild(newtd);
        }
    }
    addClickEventToCells();
}

function addClickEventToCells() {
    let cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click",  function(event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = canvas.value;
        });
    }
}