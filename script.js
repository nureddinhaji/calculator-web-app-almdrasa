const storedValue = 0;
const currentValue = 0;
const resultValue = 0;
let pointAdded = false;
const noButtons = document.querySelectorAll("button[data-type='number']");
const input = document.querySelector(".calc__input")

const clickNumber = (button) => {
    const value = button.dataset.value;
    if(value === "." && !pointAdded) {
        input.value += button.dataset.value;
        pointAdded = true;
    } else if ((value === "." && pointAdded) || (value === "0" && input.value === "0")) {
        return
    } else if (input.value === "0") {
        input.value = button.dataset.value;
    } else {
        input.value += button.dataset.value;
    }
}

noButtons.forEach(button => {
    button.addEventListener("click", () => {
        clickNumber(button)
    })
})