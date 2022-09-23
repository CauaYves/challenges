function calcularDesconto() {

    let prodComprado = prompt('Qual é o produto que você está comprando?')
    let precoProd = Number(prompt(`Qual é o preço do ${prodComprado}?`))

    let desconto = (precoProd / 100) * 10
    let precoFinal = precoProd - desconto

    let container = window.document.getElementById('container')


    container.innerHTML = `<h2>Calculando desconto de 10% para ${prodComprado}</h2>\n <p>o preço original era R$${precoProd}.</p> \n <p>Você acaba de ganhar R$${desconto} de desconto (-10%).</p> \n <p>No fim, você vai pagar R$${precoFinal} no produto ${prodComprado}.</p>`


}