// Variables
let display = document.getElementById('display');
let operator = document.querySelectorAll('.operators div');
let number = document.querySelectorAll('.row div');
let result = document.getElementById('equal');
let reset = document.getElementById('clear');
let flag = false;

// Number Function
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(e) {
        // console.log(e.target.innerHTML);
        let currentInput = display.innerHTML;
        let lastInput = currentInput[currentInput.length-1];
        console.log(flag);
        if(flag === false){
            display.innerHTML += e.target.innerHTML
        } else if(flag === true && lastInput === "+" || lastInput === "-" || lastInput === "×" || lastInput === "÷"){
            flag = false;
            display.innerHTML += e.target.innerHTML;
        } else {
            flag = false;
            display.innerHTML = "";
            display.innerHTML += e.target.innerHTML;
        }
    })
}

// Operator Function
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(e) {
        let currentInput = display.innerHTML;
        let lastInput = currentInput[currentInput.length-1];
        // console.log(e.target.innerHTML);
        // console.log(currentInput.length);
        if(currentInput.length == 0){
            console.log("need number");
        } else if(lastInput === "+" || lastInput === "-" || lastInput === "×" || lastInput === "÷"){
            var replacementInput = currentInput.substring(0, currentInput.length - 1) + e.target.innerHTML;
            currentInput = replacementInput;
        } else {
            display.innerHTML += e.target.innerHTML;
        }
    })
}

//Calculate Function
result.addEventListener('click', function() {
    // console.log(eval(display.innerHTML));
    // console.log(display.innerHTML);
    let currentInput = display.innerHTML;
    let Obj = {
        "×": "*",
        "÷": "/",
    };
    display.innerHTML = currentInput.replace(/×|÷/gi, function(matched) {
        return Obj[matched];
    });
    // console.log(display.innerHTML);
    let showResult = eval(display.innerHTML);
    // console.log(showResult);
    display.innerHTML = showResult;
    flag = true;
})

// Reset Function
reset.addEventListener('click', function() {
    display.innerHTML = " ";
})
