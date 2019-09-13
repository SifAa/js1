
// vælger inputfelt med querySelector
// globale
let txt1 = document.querySelector("#navn"); 
let txt2 = document.querySelector("#efternavn"); 

txt1.addEventListener("keyup", function(){
    // this er det samme som inputfeltet
    // this = inputfelt
         ValidateText(this);
    });
txt2.addEventListener("keyup", function(){
         ValidateText(this);
    });

function ValidateText(event){
    //if statement kontroller, at der skrevet flere end to tegn 
    // og færre end 30.... vælg selv noget der giver mening
     if(event.value.length >= 2 /* && event.value.length <= 30 */){
          // grøn baggrundsfarve for ok
         event.style.backgroundColor = "#D3FFB9";
            }else{ 
          // rød baggrundsfarve IKKE OK 
              event.style.backgroundColor = "#FFB3B8";}   			  
    } 

let btn = document.querySelector("#btn");
btn.addEventListener("click", udregn); //global

function udregn (){
    // lokale
    let navn = document.querySelector("#navn").value;
    let efternavn = document.querySelector("#efternavn").value;
    let region = document.querySelector("#region").value;
    let belob = parseInt(document.querySelector("#belob").value);


    skatteberegner(navn, efternavn, region, belob);
}

function skatteberegner(navn, efternavn, region, belob) {
    let procent = 0; //lokal

    //definere procenten med en switch
    switch (region) {
        case "Hovedstaden":
            procent = 45;
            break;
        case "Syddanmark":
            procent = 10;
            break;
        case "Nordjylland":
            procent = 20;
            break;
        case "Midtjylland":
            procent = 25;
            break;
        case "Sjælland":
            procent = 30;
            break;            
        default: "ukendt"
            break;
    }

    // regner skat og beløb efter skat defineret efter hvilken procent valgt med switch'en
    let skat = belob/100*procent;
    let rest = belob-skat;

    let elementResult = document.querySelector(".skat"); //definere stedet jeg vil indsætte tekst
    //indsætter tekst med alt informationen
    elementResult.innerHTML = navn.charAt(0).toUpperCase() + navn.slice(1).toLowerCase() + 
    " " + efternavn.charAt(0).toUpperCase() + efternavn.slice(1).toLowerCase() + 
    " bor i region " + region + 
    " og tjener " + belob + 
    " DKK <br> Deres skatteprocent er: " + procent + 
    "% <br> Skat at betale: " + skat + 
    " DKK <br> Løn efter skat: " + rest + " DKK";
    
    //resetter værdierne
    document.querySelector("#navn").value = "";
    document.querySelector("#efternavn").value = "";
    document.querySelector("#belob").value = "";
    document.querySelector("#region").value = "Hovedstaden";
}