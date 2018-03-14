let table = document.getElementById("pixelCanvas");
let canvas = document.getElementById("colorPicker");

document.querySelector("#submitButton").addEventListener("click", function (e) {
    e.preventDefault();
    makeGrid();
});

function makeGrid() {

    let gridWidth = document.getElementById("inputWeight").value;
    let gridHeight = document.getElementById("inputHeight").value;

    for (let i = 0; i < gridWidth; i++) {
        const newtr = document.createElement("tr");
        table.appendChild(newtr);
        for (let j = 0; j < gridHeight; j++) {
            const newtd = document.createElement("td");
            newtr.appendChild(newtd);
            table.addEventListener("click", function () {
                if (event.target.matches("td")){
                    table.style.backgroundColor = canvas.value;
                }
            });
        }
    }
}