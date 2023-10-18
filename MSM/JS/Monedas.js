const input = document.getElementById("MxnP");
const mensaje = document.getElementById("mensaje");
const resultadoUSD = document.getElementById("Resultado")

input.addEventListener("input", function(){
    const valor = input.value;
    const regex =/^\d*$/;

    if(!regex.test(valor)) {
        mensaje.textContent = "El valor no es un número, por lo tanto no es valido. Por favor, ingresa solo números.";
      } else {
        mensaje.textContent = "";
      }
})


function DolarValue() {
    const valorPeso = parseFloat(input.value);
    const resultadoElement = document.getElementById("Resultado"); 
  
    if (input.value === "") {
        input.focus(); 
        resultadoElement.textContent = "Por favor, ingresa un valor antes de convertir.";
      } else if (!isNaN(valorPeso)) {
        const resultado = valorPeso * 18.0186;
        resultadoElement.textContent = `Resultado: ${resultado.toFixed(2)}`;
      } else {
        resultadoElement.textContent = "Ingresa un número válido.";
      }
}


function EuroValue() {
    const valorDolar = parseFloat(input.value);
    const Resultado2 = document.getElementById("Resultado2");
    const tipodeCambio = 0.95;
  
    if (input.value === "") {
      input.focus();
      Resultado2.textContent = "Por favor, ingresa un valor antes de convertir.";
    } else if (!isNaN(valorDolar)) {
      const resultado = valorDolar * tipodeCambio;
      Resultado2.textContent = `Resultado: ${resultado.toFixed(2)} Euros`;
    } else {
      Resultado2.textContent = "Ingresa un número válido.";
    }
}

function LibraValue() {
    const valorUSD = parseFloat(input.value);
    const Resultado3 = document.getElementById("Resultado3");
    const cambio = 0.82;

    if(input.value === ""){
        input.focus();
        Resultado3.textContent = "Por favor, ingresa un valor antes de convertir.";
    } else if (!isNaN(valorUSD)){
        const resultado = valorUSD * cambio;
        Resultado3.textContent = `Resultado: ${resultado.toFixed(2)} Libras`;
    } else{
        Resultado3.textContent = "Ingresa un nùmero valido.";
    }

}  
  