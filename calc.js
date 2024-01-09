console.log("Calculator Script loaded...")

function press_one(){
    
    scherm = document.getElementById("scherm");
    scherm.value = scherm.value + "1";
    return;
}

function press_c(){
    
    scherm = document.getElementById("scherm");
    scherm.value = "";
    return;
}
function press_add(){
    
    vorige = parseFloat(document.getElementById("previousval").innerText);
    inputval = parseFloat(document.getElementById("scherm").value);
    if(inputval = !typeof(Number)){
        inputval = parseFloat(0);
    }
    resultaat = vorige + inputval;
    console.log(resultaat);
    alert(resultaat);
    scherm.value = "";
    return;
}

function press_num(nummer){
    
    scherm = document.getElementById("scherm");
    scherm.value = scherm.value + nummer;
    return;
}