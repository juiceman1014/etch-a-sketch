//Create a webpage with a 16x16 grid of square divs
//Create a container using html  
    //fill this container with square divs using javascript

//Step 1: Make a container and fill it with 16 square divs
const container = document.getElementById("container");
const numberOfDivs = 256;

function createSquares(containerElement, numberOfDivs){
    for(let i = 0; i < numberOfDivs; i++){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        containerElement.appendChild(squareDiv)
        squareDiv.addEventListener("mouseover", function (e){
            e.target.style.background = "black";
        });
    }
}

createSquares(container, numberOfDivs);

