const container = document.querySelector("#container");

function createDivs() {
    const squaresDiv = document.createElement("div");
    for(i = 0; i < 256; i++) {
        const squaresDiv = document.createElement("div");
        squaresDiv.classList.add("squaresDiv");
        //squaresDiv.textContent = "A";
        container.appendChild(squaresDiv);
    }
    return squaresDiv;
}
createDivs();
