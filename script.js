const container = document.querySelector("#container");

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
        container.appendChild(squaresDiv);
    }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
    return squaresDiv;
}
createDivs();
