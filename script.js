let storedNumber = 0;
let currentNumber = 0;
let operation;

let afterOperation = false;
let afterEqual = false;

const resultValue = 0;
let pointAdded = false;
const noButtons = document.querySelectorAll("button[data-type='number']");
const opButtons = document.querySelectorAll("button[data-type='operation']");

const input = document.querySelector(".calc__input");
const deleteLastButton = document.querySelector(".calc__button--del");
const memory = document.querySelector(".calc__memory");
const equalButton = document.querySelector("button[data-type='equal']");

// -------------------------------
// Click a Number Function
// -------------------------------
const clickNumber = (button) => {
    const value = button.dataset.value;
    if (value === "." && !pointAdded) {
        input.value += button.dataset.value;
        pointAdded = true;
    } else if (
        (value === "." && pointAdded) ||
        (value === "0" && input.value === "0")
    ) {
        return;
    } else if (input.value === "0" || afterOperation) {
        input.value = button.dataset.value;
        afterOperation = false;
    } else {
        input.value += button.dataset.value;
    }
};

noButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clickNumber(button);
    });
});

// -------------------------------
// Delete Last Number Function
// -------------------------------

const deleteLastNo = () => {
    if (input.value === "0") {
        return;
    } else if (input.value.length == 1) {
        input.value = 0;
    } else {
        input.value = input.value.slice(0, -1);
    }
};

deleteLastButton.addEventListener("click", () => {
    deleteLastNo();
});

// -------------------------------


// -------------------------------
// Operation Buttons Click Function
// -------------------------------

const clickOperation = (button) => {
    storedNumber = parseFloat(input.value);
    operation = button.dataset.value;

    addToMemory(storedNumber, operation)
    console.log(storedNumber)
    console.log(operation)

}

const addToMemory = (storedNumber, operation, currentNumber) => {
    memory.textContent = `${storedNumber} ${operation} ${currentNumber?`${currentNumber} =`:""}`
}

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clickOperation(button);
        afterOperation = true;
    })
})

// -------------------------------


// -------------------------------
// Equal Function
// -------------------------------

const getResult = () => {
    
    let result;
    if (operation === "+") {
        result = storedNumber + currentNumber
    } else if (operation === "-") {
        result = storedNumber - currentNumber
    } else if (operation === "*") {
        result = storedNumber * currentNumber
    } else if (operation === "/") {
        result = storedNumber / currentNumber
    } else if (operation === "%") {
        result = storedNumber % currentNumber
    }
    input.value = result 

    storedNumber = parseFloat(input.value);
    
}

equalButton.addEventListener("click", () => {
    if(!afterEqual) {
        currentNumber = parseFloat(input.value);
    }
    addToMemory(storedNumber, operation, currentNumber)
    getResult();
    afterEqual = true;
})