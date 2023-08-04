const numeroOne = document.getElementById("n1")
const numeroTwo = document.getElementById("n2")
const result = document.getElementById("result")

function calculo (params) {

switch (params) {
    case 'somar' :
        result.textContent = parseInt(numeroOne.value) + parseInt(numeroTwo.value);
        break;

    case 'subtrair' :
        result.textContent = parseInt(numeroOne.value) - parseInt(numeroTwo.value);
        break;

    case 'multiplicar' :
        result.textContent = parseInt(numeroOne.value) * parseInt(numeroTwo.value);
        break;

    case 'dividir' :
        result.textContent = parseInt(numeroOne.value) / parseInt(numeroTwo.value);
        break;              
}

}
   