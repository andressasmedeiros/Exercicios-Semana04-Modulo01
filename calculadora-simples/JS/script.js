console.log ("Script funcionando")


function calculadoraSimples (inputNumero1, inputNumero2) {
    var somaCalculadora = inputNumero1 + inputNumero2
    return somaCalculadora
}

function gerarResultado(event){

    event.preventDefault()

    var inputNumero1 = parseFloat(document.getElementById('inputNumero1').value)
    var inputNumero2 = parseFloat(document.getElementById('inputNumero2').value)
 

    var resultado = parseFloat(calculadoraSimples(inputNumero1, inputNumero2).toFixed(2))
    document.getElementById('txt-resultado').innerText = resultado

}



document.getElementById('calculadora')
.addEventListener('submit', gerarResultado)
