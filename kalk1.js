var vastus=document.getElementById("vastus");
var kogus=document.getElementById("kogus");
var vastus2=document.getElementById("vastus2");
var kogus2=document.getElementById("kogus2");
var pilt=document.getElementById("pilt");

const dollar=1.16;
const rub=84.20;
const sek=10.65;
const frank=1.077;

// korrutab (приумножает)
function calculate(val, currency){
    return (val* currency).toFixed(3);
    // toFixed(3) - 3 märki peale komat

}

function radioChange(event){
var inputValue=kogus.value;
    if(event.target.id === "dollar"){
        vastus.innerHTML=calculate(inputValue, dollar) + " $";
        pilt.src="img/dollar.png";
    } else if(event.target.id === "rub"){
        vastus.innerHTML=calculate(inputValue, rub) + " ₽";
        pilt.src="img/rub.png";
    } else if(event.target.id === "kroon"){
        vastus.innerHTML=calculate(inputValue, sek) + " SEK";
        pilt.src="img/sek.png";
    } else if(event.target.id === "frank"){
        vastus.innerHTML=calculate(inputValue, frank) + " CHF";
        pilt.src="img/chf.png";
    }
}
function selectOptionChange(event){
    var inputValue=kogus2.value;
    if(event.target.value === "dollar"){
        vastus2.innerHTML=calculate(inputValue, dollar) + " $";
        pilt.src="img/dollar.png";
    } else if(event.target.value === "rub"){
        vastus2.innerHTML=calculate(inputValue, rub) + " ₽";
        pilt.src="img/rub.png";
    } else if(event.target.value === "kroon"){
        vastus2.innerHTML=calculate(inputValue, sek) + " SEK";
        pilt.src="img/sek.png";
    } else if(event.target.value === "frank"){
        vastus2.innerHTML=calculate(inputValue, frank) + " CHF";
        pilt.src="img/chf.png";
    }
}

function validateForm(){
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Sisesta kogus!");
        return false;
    }
}

function inputCurrencyText() {
    var inputValue = document.getElementById("kogus3").value;
    var inputText = document.getElementById("valuutanimi").value;
    var vastus3 = document.getElementById("vastus3");
    if (inputText == "dollar") {
        vastus3.innerHTML = calculate(inputValue, dollar) + " $";
    } else if (inputText == "rouble") {
        vastus3.innerHTML = calculate(inputValue, rub) + " ₽";
    }else if (inputText == "kroon") {
        vastus3.innerHTML = calculate(inputValue, sek) + " SEK";
    }else if (inputText == "frank") {
        vastus3.innerHTML = calculate(inputValue, sek) + " CHF";
    }else{
        alert("Sisesta kogus!");
        return false;;
    }
}