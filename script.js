const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Errore!"
    }
}



// function calcola(){
//     var a = parseInt(document.querySelector("#valore1").value);
//     var b = parseInt(document.querySelector("#valore2").value);

//     var op = document.querySelector("#operatore").value;
    
//     var calcolo;

//     if(op == "addizione"){
//         calcolo = a + b;
//     }else if(op == "sottrazione"){
//         calcolo = a - b;
//     }else if(op == "moltiplicazione"){
//         calcolo = a * b;
//     }else if(op == "divisione"){
//         calcolo = a / b;
//     }

//     document.querySelector("#risultato").innerHTML = calcolo;
// }
