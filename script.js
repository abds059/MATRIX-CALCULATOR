//Inputs
let matrix1_inputs = document.querySelectorAll(".matrix1-input");
let matrix2_inputs = document.querySelectorAll(".matrix2-input");

//Output
let result_outputs = document.querySelectorAll(".result-input");

//Buttons
let add_btn = document.getElementById("add");
let subtract_btn = document.getElementById("subtract");
let multiply_btn = document.getElementById("multiply");

//Button Events
const addEventListeners = (element, eventHandler) => {
    element.addEventListener("click", eventHandler);
    element.addEventListener("touchstart", (e) => {
        e.preventDefault();
        eventHandler();
    }, { passive: true });
};

addEventListeners(add_btn, add_matrices);
addEventListeners(subtract_btn, subtract_matrices);
addEventListeners(multiply_btn, multiply_matrices);

//Addition Logic
function add_matrices(){
    for(let i = 0; i < matrix1_inputs.length; i++){
        let val1 = parseFloat(matrix1_inputs[i].value) || 0;
        let val2 = parseFloat(matrix2_inputs[i].value) || 0;
        result_outputs[i].value = val1 + val2;
    }
}

//Subtraction Logic
function subtract_matrices(){
    for(let i = 0; i < matrix1_inputs.length; i++){
        let val1 = parseFloat(matrix1_inputs[i].value) || 0;
        let val2 = parseFloat(matrix2_inputs[i].value) || 0;
        result_outputs[i].value = val1 - val2;
    }
}

//Multiplication Logic
function multiply_matrices(){
    let size = Math.sqrt(matrix1_inputs.length);

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let sum  = 0;
            for(let k = 0; k < size; k++){
                let val1 = parseFloat(matrix1_inputs[i * size + k].value) || 0;
                let val2 = parseFloat(matrix2_inputs[k * size + j].value || 0);
                sum += val1 * val2;
            }
            result_outputs[i * size + j].value = sum;
        }
    }
}

//Highlight the selected option
document.addEventListener("DOMContentLoaded", () => {
    let current_page = window.location.pathname.split("/").pop().split("?")[0];

    let links = document.querySelectorAll(".nav-link");

    links.forEach(link => link.classList.remove("active"));

    links.forEach(link => {
        if (current_page.endsWith(link.getAttribute("href").split("/").pop())) {
            link.classList.add("active");
            console.log("Active Link:", link.getAttribute("href"));
        }
    });
});

