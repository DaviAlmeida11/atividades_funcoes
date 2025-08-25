
function calcular() {
    let v1 = Number(document.getElementById('n1').value)
    let v2 = Number(document.getElementById('n2').value)
    let total = v1 + v2
    document.getElementById('resultado').innerHTML = total

    let mais = (v1 + v2)
    document.getElementById('adicao').innerHTML = mais.toFixed(2)



    let multiplicacao = (v1 * v2)
    document.getElementById('multiplicacao').innerHTML = multiplicados.toFixed(2)



    let divisao = (v1 / v2)
    document.getElementById('divisao').innerHTML = divisao.toFixed(2)



    let subtracao = (v1 - v2)
    document.getElementById('subtracao').innerHTML = subtracao.toFixed(2)


}
calcular()
