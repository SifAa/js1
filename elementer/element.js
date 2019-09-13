
let btn = document.querySelector("#btn");

btn.addEventListener("click", createInput);

function createInput() {

let selected = parseInt(document.querySelector("#select").value);
let output = document.querySelector("#output"); //laver en variabel output, så jeg kan indsætte alt specifikt i body'en

    for(let i=0; i < selected; i++){
        let divRow = document.createElement("div");
        divRow.id = "row" + i;
        divRow.className = "form-group row";
        output.appendChild(divRow);
        let labelName = document.createElement("label"); 
        labelName.innerHTML = "Navn:"; 
        labelName.className = "col-sm-1 mt-4 mr-2"; // class = "" til styling
        divRow.appendChild(labelName); //indsætter specifikt i divRow der er sat ind i output
        let inputName = document.createElement("input");
        inputName.className = "col-sm-3 form-control mt-4" 
        divRow.appendChild(inputName);
        let labelEfter = document.createElement("label"); 
        labelEfter.innerHTML = "Efternavn:"; 
        labelEfter.className = "col-sm-2 mt-4";
        divRow.appendChild(labelEfter);
        let inputEfter = document.createElement("input");
        inputEfter.className = "col-sm-3 form-control mt-4 mr-4"; 
        divRow.appendChild(inputEfter);
        let buttonSlet = document.createElement("button");
        buttonSlet.innerHTML = "Slet";
        buttonSlet.className = "col-sm-1 btn btn-danger mt-4";
        buttonSlet.addEventListener("click", function(){
            eraseInput(i); //funktion så når man klikker på knappen sletter man rækken
        })
        divRow.appendChild(buttonSlet);
    }
}

// sletter rækken knappen er inden i
function eraseInput(i) {
    let inputRow =  document.querySelector("#row" + i);
    inputRow.remove();
}
