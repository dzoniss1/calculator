let currentInput = "";
const result = document.getElementById("result");

function display(value) {

    if (result.value === "0" || result.value === "") {
        result.value = "";
    }

    result.value += value;
    currentInput = result.value;
}

function calculate(event) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '%'];
    
    if (validKeys.includes(event.key)) {
        if (event.key === '%') {
            const result = document.getElementById("result");
            if (!result.value.endsWith('%')) {
                result.value += '/100';
            }
        } else {
            document.getElementById("result").value += event.key;
        }
    }
}

// WHEN = PRESSED
function sum() {
    const result = document.getElementById("result");
    const calculationDisplay = document.getElementById("calculation");

    try {
        let expression = result.value.replace('x', '*').replace(/%/g, '/100');
        result.value = eval(expression);

        if (calculationDisplay.classList.contains("hidden")) {
            calculationDisplay.classList.remove("hidden");
        }

        calculationDisplay.textContent = expression;

    } catch (error) {
        result.value = "Error";
    }
}
function clr() {
    document.getElementById("result").value = "0";
    document.getElementById("calculation").classList.add("hidden");
}

function del(){
    result.value = result.value.slice(0, -1);
    currentInput = result.value;
}


/* 
  DARK MODE LIGHT MODE 
                      */

  function DarkMode() {
    const elementsToToggle = [
        { selector: '.function', className: 'dark-mode-operators' },
        { selector: '.number', className: 'dark-mode-number' },
        { selector: '.toprow', className: 'dark-mode-toprow' },
        { element: document.getElementById('result'), className: 'dark-mode' },
        { element: document.getElementById('calculation'), className: 'dark-mode' },
        { element: document.querySelector('.iphone'), className: 'dark-mode' },
        { element: document.getElementById('buttons'), className: 'dark-mode' }
    ];

    elementsToToggle.forEach(item => {
        if (item.selector) {
            const buttons = document.querySelectorAll(item.selector);
            buttons.forEach(button => button.classList.toggle(item.className));
        } else if (item.element) {
            item.element.classList.toggle(item.className);
        }
    });
}
