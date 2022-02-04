const container = document.querySelector("#container");
const header = document.querySelector("#header");

function createDivs() {
    let size = 16;
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    //let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
    //let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
    const squaresDiv = document.createElement("div");
    for(i = 0; i < (size*size); i++) {
        const squaresDiv = document.createElement("div");
        squaresDiv.classList.add("squaresDiv");
        //squaresDiv.textContent = "A";
        squaresDiv.addEventListener("mouseenter", () => {
            squaresDiv.style.backgroundColor = "black";
        });
        container.appendChild(squaresDiv);
    }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);

    return squaresDiv;
}
createDivs();

function reset() {
    const button = document.createElement("button");
    button.textContent = "Clear";
    button.addEventListener("click", () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let size = prompt("Select a number, max 100, if the number is above 100, it will default to 16.");
    if(size <= 100) {
        for(i = 0; i < (size*size); i++) {
            const squaresDiv = document.createElement("div");
            squaresDiv.classList.add("squaresDiv");
            //squaresDiv.textContent = "A";
            squaresDiv.addEventListener("mouseenter", () => {
                squaresDiv.style.backgroundColor = "black";
            });
            container.appendChild(squaresDiv);
        }
    } else {
        size = 16;
        for(i = 0; i < (size*size); i++) {
            const squaresDiv = document.createElement("div");
            squaresDiv.classList.add("squaresDiv");
            //squaresDiv.textContent = "A";
            squaresDiv.addEventListener("mouseenter", () => {
                squaresDiv.style.backgroundColor = "black";
            });
            container.appendChild(squaresDiv);
        }
    }

    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
    });
    header.appendChild(button);
}
reset();