// Declare grid
const gridContainer = document.querySelector("#gridContainer");

// Create a row
function createRow() {
    const row = document.createElement("div");
    createSquares(row);
    gridContainer.appendChild(row);

    row.style.display = "flex";
    row.style.marginBottom = "1px";
    row.style.justifyContent = "center";
}

// Create 16 squares
function createSquares(rowDiv) {
    for(i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.style.height = "20px";
        square.style.width = "20px";
        square.className = "square";
        rowDiv.appendChild(square);
    }
}

// loop for 16x16 grid
for(j = 0; j < 16; j++) {
    createRow();
}

const allSquares = document.querySelectorAll(".square");
// Change square color when enter. Could also assign a class and add style to that class in css
allSquares.forEach((eachSquare) => {
    eachSquare.addEventListener("mouseenter", function() {
        eachSquare.style.backgroundColor = "darkslategray";

    });

});









// const btnTest = document.createElement("button");
// btnTest.style.height = "15px";
// btnTest.style.backgroundColor = "blue";
// document.querySelector("body").appendChild(btnTest);
// btnTest.addEventListener("click", createRow);


// for(i = 0; i < 5; i++) {
//     console.log(777);
// }

console.log("end");

