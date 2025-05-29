function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '−':
            return subtract(num1, num2);
        case '×':
            return multiply(num1, num2);
        case '÷':
            return (num2 == 0) ? 'Really?' : divide(num1, num2);
    }
}

function modifyNumber(num, modifier) {
    switch (modifier) {
        case '+/−':
            return -num;
        case '%':
            return num / 100;
    }
}

function removeTrailingZeros(num) {
    const lastZeroIndex = num.lastIndexOf('0');
    const decimalIndex = num.indexOf('.');

    if (lastZeroIndex != -1 && decimalIndex != -1) {
        let pastChar = num[lastZeroIndex];
        let currentChar;
        let zeros = 1;

        for (let i = lastZeroIndex - 1; i >= decimalIndex; i--) {
            currentChar = num[i];
            if (currentChar == '0' && pastChar == '0') {
                zeros++;
                pastChar = currentChar;
            }
            else {
                num = num.split('');
                (currentChar == '.') ? num.splice(i, zeros + 1) : num.splice(i + 1, zeros);
                num = num.join('');
                return num;
            }
        }
    }
    else {
        return num;
    }
}

function formatForDisplay(num) {
    let formattedNum = num;
    let length = MAX_LENGTH;

    while (formattedNum.toString().length > MAX_LENGTH) {
        formattedNum = Number(formattedNum).toPrecision(length);
        length--;

        if (formattedNum.toString().length == MAX_LENGTH) {
            formattedNum = removeTrailingZeros(formattedNum);
        }
    }

    return formattedNum;
}

function updateDisplay(newContent) {
    display.textContent = formatForDisplay(newContent);
}

function updateResult() {
    result = operate(Number(num1), Number(num2), operator);
    num1 = result.toString();
    num2 = '0';
    updateDisplay(result);
}

function updateNumber(newNum) {
    if (operator == null) {
        if (num1 == '0') {
            num1 = newNum;
        }
        else if (num1.length < MAX_LENGTH) {
            num1 = num1 + newNum;
        }
        updateDisplay(num1);
    }
    else {
        if (num2 == '0') {
            num2 = newNum;
        }
        else if (num2.length < MAX_LENGTH) {
            num2 = num2 + newNum;
        }
        updateDisplay(num2);
    }
}

function addDecimal() {
    if (operator == null && num1.length < MAX_LENGTH - 1 && !num1.includes('.')) {
        num1 = (num1 == '0') ? '0.' : num1 + '.';
        updateDisplay(num1);
    }
    else if (operator != null && num2.length < MAX_LENGTH - 1 && !num2.includes('.')) {
        num2 = (num2 == '0') ? '0.' : num2 + '.';
        updateDisplay(num2);
    }
}

function updateOperator(newOperator) {
    if (num1 != '0' && newOperator != '=') {
        operator = newOperator;
    }
}

function clearDisplay() {
    num1 = '0';
    num2 = '0';
    operator = null;
    result = null;
    updateDisplay('0');
}

function buttonClicked(event) {
    const button = event.target;
    const content = button.textContent;

    if (content == '.') {
        addDecimal();
    }
    else if (button.classList.contains('number')) {
        updateNumber(content);
    } 
    else if (content == '=') {
        if (num1 != '0' && num2 != '0') {
            updateResult();
            operator = null;
            num1 = '0';
        }
    }
    else if (button.classList.contains('operator')) {
        if (num1 != '0' && num2 != '0') {
            updateResult();
        }
        else if (num1 == '0' && result != null) {
            updateNumber(result.toString());
        }
        updateOperator(content);
    }
    else if (content == 'AC') {
        clearDisplay();
    }
    else if (button.classList.contains('modifier')) {
        if (num2 != '0') {
            num2 = modifyNumber(num2, content).toString();
            updateDisplay(num2);
        }
        else if (num1 != '0' && operator == null) {
            num1 = modifyNumber(num1, content).toString();
            updateDisplay(num1);
        }
        else if (result != null) {
            result = modifyNumber(result, content);
            updateDisplay(result);
        }
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const MAX_LENGTH = 9;

let num1 = '0';
let num2 = '0';
let operator = null;
let result = null;

buttons.forEach((button) => {
    button:addEventListener('click', buttonClicked);
});