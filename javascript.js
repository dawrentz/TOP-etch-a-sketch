// Declarations
const submitBtn = document.querySelector("#submitBtn");

//Run gridCreation with button click
submitBtn.addEventListener("click", function() {
    //erase and recreate gridContainer
    document.querySelector("body").removeChild(document.querySelector("#gridContainer"));
    const gridContainer = document.createElement("div");
    gridContainer.id = "gridContainer";
    document.querySelector("body").appendChild(gridContainer);




    // Declare user inputs
    const rowsInput = +document.querySelector("#rowsInput").value;
    const columnsInput = +document.querySelector("#columnsInput").value;

    if ((rowsInput < 1) || (rowsInput > 100) || (columnsInput < 1) || 
        (columnsInput > 100) || !rowsInput || !columnsInput) {
            alert("Only enter numbers between 1 and 100");
    } else {
    createRow(rowsInput, columnsInput);

    addSketchEffect();
    }




});







// Create a row
function createRow(rows, columns) {
    for(j = 0; j < rows; j++) {    
        const row = document.createElement("div");
        createSquares(row, columns);
        gridContainer.appendChild(row);

        row.style.display = "flex";
        // row.style.marginBottom = "1px";
        row.style.justifyContent = "center";
        row.style.flexGrow = "1";

    }
}

// Create 16 squares
function createSquares(rowDiv, userColumnsInput) {
    for(i = 0; i < userColumnsInput; i++) {
        const square = document.createElement("div");
        // square.style.height = "20px"; //remove with set size?
        // square.style.width = "20px";
        square.className = "square";
        square.style.flexGrow = "1";

        rowDiv.appendChild(square);
  
    }
}

// loop for 16x16 grid
// for(j = 0; j < 16; j++) {
//     createRow();
// }


function addSketchEffect() {
    const allSquares = document.querySelectorAll(".square");
    // Change square color when enter. Could also assign a class and add style to that class in css
    allSquares.forEach((eachSquare) => {
        eachSquare.addEventListener("mouseenter", function() {
            eachSquare.style.backgroundColor = "darkslategray";

        });

    });
}








// const btnTest = document.createElement("button");
// btnTest.style.height = "15px";
// btnTest.style.backgroundColor = "blue";
// document.querySelector("body").appendChild(btnTest);
// btnTest.addEventListener("click", createRow);


// for(i = 0; i < 5; i++) {
//     console.log(777);
// }

console.log("end");