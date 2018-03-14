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
            table.addEventListener("click", paintCell);
        }
    }
}

function paintCell() {
    if (table != null) {
        for (let i = 0; i < table.rows.length; i++) {
            for (let j = 0; j < table.rows[i].cells.length; j++)
                table.rows[i].cells[j].onclick = function () {
                    getVal(this);
                };
        }
    }
}

function getVal(cel) {
    cel.style.backgroundColor = canvas.value;
}