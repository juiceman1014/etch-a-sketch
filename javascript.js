//Create a webpage with a 16x16 grid of square divs
//Create a container using html  
    //fill this container with square divs using javascript

//Step 1: Make a container and fill it with 16 square divs
const gridContainer = document.getElementById("gridContainer");
const sideDivs = 16;

function createGrid(containerElement, sideDivs){

    while(sideDivs % 1 != 0 || isNaN(sideDivs) || sideDivs < 1  || sideDivs > 100){
        sideDivs = prompt("Please enter a number between 1 and 100");
    }
    
    for(let i = 0; i < Math.pow(sideDivs, 2); i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        containerElement.appendChild(gridSquare)
        gridSquare.addEventListener("mouseover", function (e){
            e.target.style.background = "black";
        });
    }
    

    let numberRows = sideDivs;
    let numberColumns = sideDivs;

    gridContainer.style.gridTemplateRows = `repeat(${numberRows}, 1fr`;
    gridContainer.style.gridTemplateColumns = `repeat(${numberColumns}, 1fr`;


}

createGrid(gridContainer, sideDivs);

//Step 2: add a button to the top of the screen that will send the user a popup
//asking for then number of squares per side for the new grid. Once entered
//the existing grid should be removed and a new grid should be generated in the 
//same total space as before so that you've got a new sketch pad. Tip: set the
//limit to the user input to a maximum of 100. A larger number of sqaures results
//in more computer resources being used, potentially causing delays, freezing, 
//crashing that we want to prevent

const newGridContainer = document.querySelector(".newGridContainer");

const newGridButton = document.createElement("button");
newGridButton.classList.add("newGridButton");
newGridButton.textContent = "Try a different dimension!";
newGridContainer.appendChild(newGridButton);

function promptInput(){
    let userSides = prompt("How many squares per side would you like? (1-100)");
    return userSides;
}

function deleteGrid(){
    document.querySelectorAll(".gridSquare").forEach(e => e.remove());
}

newGridButton.addEventListener("click", function(){
    deleteGrid();
    let userSides = promptInput();
    createGrid(gridContainer, userSides);
});

