//Create a webpage with a 16x16 grid of square divs
//Create a container using html  
    //fill this container with square divs using javascript

//Step 1: Make a container and fill it with 16 square divs
const gridContainer = document.getElementById("gridContainer");
const numberOfDivs = 256;

function createGrid(containerElement, numberOfDivs){
    for(let i = 0; i < numberOfDivs; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        containerElement.appendChild(gridSquare)
        gridSquare.addEventListener("mouseover", function (e){
            e.target.style.background = "black";
        });
    }

    let numberRows = Math.sqrt(numberOfDivs)
    let numberColumns = Math.sqrt(numberOfDivs)

    gridContainer.style.gridTemplateRows = `repeat(${numberRows}, 1fr`
    gridContainer.style.gridTemplateColumns = `repeat(${numberColumns}, 1fr`


}

createGrid(gridContainer, numberOfDivs);

//Step 2: add a button to the top of the screen that will send the user a popup
//asking for then number of squares per side for the new grid. Once entered
//the existing grid should be removed and a new grid should be generated in the 
//same total space as before so that you've got a new sketch pad. Tip: set the
//limit to the user input to a maximum of 100. A larger number of sqaures results
//in more computer resources being used, potentially causing delays, freezing, 
//crashing that we want to prevent

// const newGridContainer = document.querySelector(".newGridContainer");

// const newGridButton = document.createElement("button");
// newGridButton.classList.add("newGridButton");
// newGridButton.textContent = "Try a different dimension!";
// newGridContainer.appendChild(newGridButton);

// function promptInput(){
//     prompt("How many squares per side would you like?")
// }

// newGridButton.addEventListener("click", function(){
//     promptInput();
// });
