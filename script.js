const body = document.querySelector("body");
const btn = document.querySelector("button");

function renderEtch(cantidadCuadrados){

    removeAndCreateEtch();
    const container = document.querySelector(".container")
    for(i = 1; i<=cantidadCuadrados; i++){
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        rowContainer.setAttribute("id",`${i}`);
        container.appendChild(rowContainer);
        for(x = 1; x<=cantidadCuadrados ; x++){
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row-div");
            rowDiv.setAttribute("id",`${x}`);
            rowContainer.appendChild(rowDiv);
        }
    }

    const rowDivs = document.querySelectorAll(".row-div");
    rowDivs.forEach(div => {
        div.style.backgroundColor = getRandomColor();
        div.style.opacity = "0%";
        div.addEventListener("mouseover", () => {
            if(div.style.opacity != 1){
                console.log(div.style.opacity)
                div.style.opacity = parseFloat(div.style.opacity) + 0.1;
                console.log(div.style.opacity)
            }
        })
    })

}

function removeAndCreateEtch(){
    const container = document.querySelector(".container");
    if(container){
        body.removeChild(container);
    }
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    body.appendChild(newContainer);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener("click", () => {
    let cuadrados = prompt("Enter the number of squares you want:")
    while (cuadrados > 100){
        cuadrados = prompt("Max number is 100. \nEnter the number of squares you want:")
    }
    renderEtch(cuadrados)
})

renderEtch(16)