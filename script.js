let valorA,valorB,valorC,delta,x1,x2

function extraiValores(){
    let valores = document.querySelectorAll('.valor')

    valorA = valores[0].value
    valorB = valores[1].value
    valorC = valores[2].value
}

function calculaDelta(){
    delta = Math.pow(valorB, 2) - 4 * valorA * valorC
}

function calculaRaizes(){
    if(delta >= 0 && valorA != 0){
        x1 = (-1 * valorB - Math.sqrt(delta)) / (2 * valorA)
        x2 = (-1 * valorB + Math.sqrt(delta)) / (2 * valorA)

        x1 = x1.toFixed(2)
        x2 = x2.toFixed(2)
    }   
    else{
        x1 = x2 = "O valor não é um número real!"
    }
}

function escreveValores(){
    const outputs = document.querySelectorAll('.output')

    outputs[0].innerHTML = delta
    outputs[1].innerHTML = x1
    outputs[2].innerHTML = x2
}

function limpar(){
    const outputs = document.querySelectorAll('.output')

    outputs[0].innerHTML = ''
    outputs[1].innerHTML = ''
    outputs[2].innerHTML = ''
}

function calcular(){
    limpar()
    extraiValores()
    calculaDelta()
    calculaRaizes()
    escreveValores()
}