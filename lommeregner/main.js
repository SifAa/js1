
let button = document.querySelector("#btn");

button.addEventListener("click", buttonClicked);
// anonym function er en der ikke hedder noget men som bare gøre noget

function buttonClicked(){ // definere først tallene efter vi trykket på knappen
    let tal1 = parseInt(document.querySelector(".tal1").value); // query.Selector vælger hele elementet med class (eller #id)
    let tal2 = parseInt(document.querySelector("#tal2").value); // .value giver værdien inputtet i feltet
    // parseInt() laver værdien om til et tal
    let operator = document.querySelector("#operator").value;

    udregn(tal1, tal2, operator);
}

function udregn(tal1, tal2, operator){

    let result;

    if(operator == "plus"){
        result = tal1+tal2;
    }else if(operator == "minus"){
        result = tal1-tal2;
    }else if(operator == "gange"){
        result = tal1*tal2;
    }else{
        result = tal1/tal2;
    }

    let elementResult = document.querySelector(".result");

    elementResult.innerHTML = result;
}



