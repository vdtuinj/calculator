console.log("Calculator Script loaded...");
var operator = null;

/* 

Working functions:
- Clear
- Add number

*/

function press_c(){ //Clear Calculator
    
    scherm = document.getElementById("scherm");
    scherm.value = "";
    return;
}
function press_num(nummer){ //Add number to display
    
    scherm = document.getElementById("scherm");
    scherm.value = scherm.value + nummer;
    return;
}

// Functions to be improved:
/* Legacy add function
function press_add(){
    
    geheugen = document.getElementById("previousval");
    invoer = document.getElementById("scherm");

    x = parseFloat(geheugen.innerHTML);
    y = parseFloat(invoer.value);

    if(isNaN(y)){
        return y = 0;
    }
    resultaat = x + y;
    console.log(resultaat);
    
    geheugen.innerHTML = resultaat;
    invoer.value = resultaat;
    return;
}

*/

function press_operator(bewerking){
    var geheugen = document.getElementById("previousval");
    var invoer = document.getElementById("scherm");
    
    if (operator == null){
        geheugen.innerHTML = invoer.value;
        invoer.value = '';
    }
    else{
        switch (bewerking) {
            case "+":
                //Do Something
                //add();
                
                break;

            default:
                break;
        }
    }

    return;
}

function add(){
    if (operator == null){
        //alert(' no operator')
        operator = '+'
    }
else{
    //alert(operator)

}
}