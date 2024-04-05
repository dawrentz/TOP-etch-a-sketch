//declarations
const submitBtn = document.querySelector("#submitBtn");

//create default grid
createRows(100, 100);
addSketchEffect();

//run new iteration on button click
submitBtn.addEventListener("click", function() {
    //erase and recreate gridContainer
    document.querySelector("body").removeChild(document.querySelector("#gridContainer"));
    const gridContainer = document.createElement("div");
    gridContainer.id = "gridContainer";
    document.querySelector("body").appendChild(gridContainer);

    //declare user inputs
    const rowsInput = +document.querySelector("#rowsInput").value;
    const columnsInput = +document.querySelector("#columnsInput").value;

    //check for user error and run grid creation
    if ((rowsInput < 1) || (rowsInput > 100) || (columnsInput < 1) || 
        (columnsInput > 100) || !rowsInput || !columnsInput) {
            alert("Only enter numbers between 1 and 100");
    } else {
    createRows(rowsInput, columnsInput);
    addSketchEffect();
    }
});

//create rows
function createRows(rows, columns) {
    for(j = 0; j < rows; j++) {    
        const row = document.createElement("div");
        createSquares(row, columns);
        gridContainer.appendChild(row);

        row.style.display = "flex";
        row.style.justifyContent = "center";
        row.style.flexGrow = "1";
    }
}

//create squares in row
function createSquares(rowDiv, userColumnsInput) {
    for(i = 0; i < userColumnsInput; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.flexGrow = "1";

        rowDiv.appendChild(square);
      }
}

//add sketching illusion 
function addSketchEffect() {
    const allSquares = document.querySelectorAll(".square");
    //change square color when enter
    allSquares.forEach((eachSquare) => {
        eachSquare.addEventListener("mouseenter", function() {
            eachSquare.style.backgroundColor = "darkslategray";
        });
    });
}