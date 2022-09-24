function bhaskara () {
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))

    let equacao = `${a}x² + ${b}x + ${c} = 0`

    let calculo = `Δ = ${b}² - 4 . ${a} . ${c}`

    let valorCalculado = (b*b) - (4 * a) * c

    let container = document.getElementById('container')
    container.innerHTML = `<p>A equação atual é: <strong>${equacao}</strong> </p>\n
    <p>O cálculo realizado será: <strong>${calculo}</strong> <p>\n
      O valor calculado foi: <strong> Δ = ${valorCalculado}</strong></p>`
}
