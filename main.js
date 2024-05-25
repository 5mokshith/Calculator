const AC = document.getElementById('btn1');
const modulo = document.getElementById('btn2');
const backSpaceBtn = document.getElementById('btn3');
const divide = document.getElementById('btn4');
const multiply = document.getElementById('btn8');
const minus = document.getElementById('btn12');
const plus = document.getElementById('btn16');
const equal = document.getElementById('btn20');
const calculatorButtons = document.querySelectorAll('.calc-btn');

const mainDisplay = document.querySelector('.user-input');
const runningDisplay = document.querySelector('.running-output');



calculatorButtons.forEach((button) => {
    button.addEventListener('click',addToScreen);
});

function addToScreen(event){
    
    let currentButton = document.getElementById(event.target.id);
    let inputSymbol = event.target.textContent;
    switch (currentButton) {
        case backSpaceBtn:
            backSpace();
            break;
        
        case AC:
            clearScreen();
            break;
        
        case equal:
            calculate();
            break;
        
        default:
            runCalculate(inputSymbol);
            break;
    }
}

function runCalculate(inputSymbol){
    mainDisplay.classList.remove('error');
    mainDisplay.textContent = mainDisplay.textContent === "Enter correct expression" ? '' + inputSymbol : mainDisplay.textContent+= inputSymbol; 
    mainDisplay.classList.remove('output');
    mainDisplay.classList.add('input');
    runningDisplay.textContent = (mainDisplay.textContent === '')? 'none' : eval(mainDisplay.textContent);
}

function backSpace(){
    let words = mainDisplay.textContent;
    let lastLetter = words[words.length-1];
    if(mainDisplay.textContent.length >= 1){
        mainDisplay.textContent = words.slice(0,-1);
        mainDisplay.classList.remove('error');
    }
    else{
        return;
    }
    if(mainDisplay.textContent.length === 0){
        runningDisplay.textContent = '';
    }
}

function clearScreen(){
    if(mainDisplay.textContent.length >= 1){
        mainDisplay.textContent = '';
        runningDisplay.textContent = '';
        mainDisplay.classList.remove('error');
    }
    else{
        runningDisplay.textContent = '';
        mainDisplay.classList.remove('error');
    }
}

function calculate(){
    try {
        mainDisplay.textContent = eval(mainDisplay.textContent);
        mainDisplay.classList.add('output');
        mainDisplay.classList.remove('input');
        runningDisplay.textContent = '';
        mainDisplay.classList.remove('error');
    } catch (error) {
        mainDisplay.textContent = "invaild expression!";
        runningDisplay.textContent = '';
        mainDisplay.classList.add('error');
    }
}