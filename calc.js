console.log("Calculator Script loaded...");
var operator = null;

/* 

Working functions:
- Clear
- Add number

*/

function press_c() { //Clear Calculator
    console.log('Logging  C precced');

    scherm = document.getElementById("scherm");
    scherm.value = "";
    return;
}
function press_num(nummer) { //Add number to display
    //console.log('Logging nummer pressed ' + nummer);

    scherm = document.getElementById("scherm");
    scherm.value = scherm.value + nummer;
    return;
}

function press_operator(bewerking) {
    //console.log('Logging operator' + bewerking + ' pressed ');
    var geheugen = document.getElementById("previousval");
    var invoer = document.getElementById("scherm");


    if (operator === null) {
        console.log('Previous Operator was NULL');

        geheugen.innerHTML = invoer.value;
        invoer.value = '';

    }
    else {
        switch (operator) {
            case "+":
                //console.log('OPERATOR + Triggered');
                var x = parseFloat(geheugen.innerHTML);
                var y = parseFloat(invoer.value);
                //console.log('Operator + clicked with values' + x + ' ' + y);
                var resultaat = x + y;
                geheugen.innerHTML = resultaat;
                console.log('Requested PLUS with values '+ x + operator + y + '=' + resultaat);
                invoer.value = "";
                break;
            case "-":
                //console.log('OPERATOR - Triggered');
                var x = parseFloat(geheugen.innerHTML);
                var y = parseFloat(invoer.value);
                //console.log('Operator - clicked with values' + x + ' ' + y);
                var resultaat = x - y;
                console.log('Requested MINUS with values ' + x + operator + y + '=' + resultaat);
                geheugen.innerHTML = resultaat;
                invoer.value = "";
                break;



            default:
                break;
        }

    }
    console.log('Logging SET operator ' + bewerking);
    operator = bewerking;
    return;
}

function result() {
    //console.log('Equal triggered');
    var geheugen = document.getElementById("previousval");
    var invoer = document.getElementById("scherm");

    switch (operator) {
        case "+":
            //console.log('Logging Case + triggered');
            var x = parseFloat(geheugen.innerHTML);
            var y = parseFloat(invoer.value);
            //console.log('Operator + clicked with values' + x + ' ' + y);
            var resultaat = x + y;
            geheugen.innerHTML = 0;
            console.log('Requested EQUALS with values ' + x + operator + y + '=' + resultaat);
            invoer.value = resultaat;
            break;
        case "-":
            var x = parseFloat(geheugen.innerHTML);
            var y = parseFloat(invoer.value);
            
            var resultaat = x - y;
            console.log('Requested EQUALS with values ' + x + operator + y + '=' + resultaat);
            geheugen.innerHTML = 0;
            invoer.value = resultaat;
            break;



        default:
            geheugen.innerHTML = 0;
            invoer.value = 0;
            break;


    }
    console.log('Reset OPERATOR');
    operator = null;
    return;
}