//declarations
const submitBtn = document.querySelector("#submitBtn");

//create default grid
createRows(50, 50);
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
    //change square style when enter
    allSquares.forEach((eachSquare) => {
        eachSquare.addEventListener("mouseenter", function() {
            //random color
            eachSquare.style.backgroundColor = `rgb(${randColorNum()} ${randColorNum()} ${randColorNum()})`;
            //dark grey only
            // eachSquare.style.backgroundColor = "darkslategray";
            
            //opacity bonus
            const computedStyleSquare = window.getComputedStyle(eachSquare);
            const currentOpacity = computedStyleSquare.opacity;
            const newOpacity = currentOpacity - 0.1;
            eachSquare.style.opacity = newOpacity;
        });
    });
}

function randColorNum() {
    return (Math.floor(Math.random() * 256));
}
