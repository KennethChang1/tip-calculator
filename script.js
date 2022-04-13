let input = document.querySelector("#bill");
const number = document.querySelector(".card__number");
const button = document.querySelectorAll(".btn--green");
const numberOfPeople = document.querySelector("#nop");
const error = document.querySelector(".error");
const total = document.getElementById("total");
const custom = document.getElementById("custom");
const reset = document.querySelector(".reset");
const test = document.querySelector(".card__header");
let price = 0;
let nop = 0;
let tip = 0;
let customValue = 0;
let clicked = false;

input.addEventListener('input', getPrice);
numberOfPeople.addEventListener('input', getPeople);
custom.addEventListener('input', getCustom);
reset.addEventListener('click', resetValue);

button.forEach((e) => {
    e.addEventListener('click', () => {
        clicked = true;
        tip = e.id;
        calculate();
    });
});

function getPrice() {
    price = +input.value;
    calculate();
}

function getPeople() {
    nop = +numberOfPeople.value;
    calculate();
}

function getCustom() {
    customValue = +custom.value;
    clicked = false;
    calculate();
}

function resetValue(){
    let reset = 0
    input.value = "";
    numberOfPeople.value = "";
    number.textContent = reset;
    total.textContent = reset;
}

function calculateResult() {
    error.classList.add('hidden');
    if(clicked == true){
        let tipAmount = price / nop * tip / 100;
        number.textContent = tipAmount.toFixed(2);
        let totalAmount = price / nop + tipAmount;
        total.textContent = totalAmount.toFixed(2);
    } else {
        let tipAmount = price / nop * customValue / 100;
        number.textContent = tipAmount.toFixed(2);
        let totalAmount = price / nop + tipAmount;
        total.textContent = totalAmount.toFixed(2);
    }
}

function calculate() {
    if (nop == 0) {
        error.classList.remove('hidden');
    } else {
        calculateResult();
    }
}
