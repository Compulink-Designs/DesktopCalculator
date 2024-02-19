const display = document.getElementById('display');
const powerInfo = document.getElementById('powerInfo');
let power = false;
let tempValue;
let recallValue;

function powerOn() {
    power = true;
    powerInfo.textContent = 'Power ON';
}

function powerOff() {
    power = false;
    powerInfo.textContent = 'Power OFF';
    display.value = '';
    tempValue = '';
    recallValue = '';
}

function addToDisplay(input) {
    if (power) {
        display.value += input;
    } else {
        powerOnStatement();
    }
}

function evalDisplay() {
    if (power) {
        try {
            display.value = eval(display.value);
            tempValue = display.value;
        }
        catch {
            display.value = 'ERROR';
        }    
    } else {
        powerOnStatement();
    }
}

function allClear() {
    if (power) {
        display.value = '';
    } else {
        powerOnStatement();
    }
}

function clearEvent() {
    if (power) {
        display.value = '';
    } else {
        powerOnStatement();
    }
}

function memAdd() {
    if (power) {
        recallValue = tempValue;
    } else {
        powerOnStatement();
    }
}

function memClear() {
    if (power) {
        recallValue = '';
    } else {
        powerOnStatement();
    }
}

function memRecall() {
    if (power) {
        display.value += recallValue;
    } else {
        powerOnStatement();
    }
}

function memMinus() {
    if (power) {
        recallValue = '';
    } else {
        powerOnStatement();
    }
}

function percentage() {
    if (power) {
        let perDisplay = eval(display.value);
        display.value = perDisplay * .01;
    } else {
        powerOnStatement();
    }
}

function powerOnStatement() {
    powerInfo.textContent = 'You need to power ON first 🤣';
}