function qualONome(){
    let nome = window.prompt('Qual o seu nome?')
    let idade = window.prompt('Olá, ' + nome + '!  Quantos anos você tem?')
    window.alert('Acabei de conhecer ' + nome + ', que tem ' + idade + ' anos de idade!')
   }
   function antesEDepois() {

    let n = prompt('Digite um numero inteiro qualquer')

    let number = Number(n)
    let numbermen = number - 1
    let numbermai = number + 1

    alert(`antes de ${number}, temos o número ${numbermen}. \n Depois de ${number}, temos o número ${numbermai}`)
    
}
function troco() {
    let produto = prompt('que produto voce está comprando?')
    let custo = prompt(`quanto custa ${produto}`)
    let valorpago = prompt(`Qual foi o valor que você deu para pagar ${produto}`)

    let dinheiro = (Number(valorpago))
    let valoproduto = (Number(custo))

    let valoproduto2 = valoproduto.toLocaleString('PT-BR', {style: 'currency', currency: 'brl'})
    let dinheiro2 = dinheiro.toLocaleString('PT-BR', {style: 'currency', currency: 'brl'})
    let troco = dinheiro - valoproduto

    let troco2 = troco.toLocaleString('PT-BR', {style: 'currency', currency: 'brl'} )
    alert(`Você comprou ${produto} que custou ${valoproduto2} \n Deu ${dinheiro2} em dinheiro e vai receber ${troco2} de troco \n Volte Sempre!`)
}
function conversorDeMedidas() {
    let valorRecebido = prompt('Digite uma distância em metros (m)')
    let metro = parseFloat(valorRecebido) 

    let km = metro / 1000
    let hm = metro / 100
    let dam = metro / 10
    let dm = metro * 10
    let cm = metro / 100
    let mm = metro / 1000

    let p = document.getElementById('text')
    p.innerHTML = `<p><strong>A distância em Metros de ${metro} metros, corresponde a:</strong></p>`;

    let distancias = document.getElementById('container-medidas')
    distancias.innerHTML = `<p>${km} quilômetros (km)</p> \n<p>${hm} hectômetro (Hm)</p> \n<p>${dam} decâmetros (Dam)</p> \n<p>${dm} decímetros (dm)</p> \n<p>${cm} centímetros (cm)</p>\n<p>${mm} milímetros (mm)</p>`
}
function converterTemperatura() {
    let temp = prompt('digite uma temperatura graus Celsius')
    let temperatura = parseFloat(temp)
    let kelvin = temperatura + 273.15
    let farenheit = temperatura * 1.8 + 32
    let containertemp = document.getElementById(`containertemp`)
    containertemp.innerHTML = `<h2>A temperatura de ${temperatura}°C, corresponde a..</h2> \n <p>kelvin ${kelvin} (K)</p>  \n   <p>farenheit ${farenheit} (°F)</p>`

}
function ConverterRealParaDolar() {
    let cotacao = Number(prompt('digite a cotação do dólar atualmente'))
    let real = Number(prompt('quanto dinheiro você tem em sua carteira?'))
    let conversao = (real / cotacao).toFixed(2)

    let p = document.querySelector('p')
p.innerHTML = `<p>com a cotação de <strong>R$${cotacao}</strong> reais, os seus <strong>R$${real}</strong> reais, você compraria <strong>$${conversao}USD<strong></p>`
}
function calcularDesconto() {

    let prodComprado = prompt('Qual é o produto que você está comprando?')
    let precoProd = Number(prompt(`Qual é o preço do ${prodComprado}?`))

    let desconto = (precoProd / 100) * 10
    let precoFinal = precoProd - desconto

    let container = window.document.getElementById('containerDesconto')

    containerDesconto.innerHTML = `<h2>Calculando desconto de 10% para ${prodComprado}</h2>\n <p>o preço original era R$${precoProd}.</p> \n <p>Você acaba de ganhar R$${desconto} de desconto (-10%).</p> \n <p>No fim, você vai pagar R$${precoFinal} no produto ${prodComprado}.</p>`
}
function reajustarSalario() {
    let nomeDoFuncionario = prompt('Qual é o nome do funcionário')
    let salarioDoFuncionario = Number(prompt (`Qual e o salario de ${nomeDoFuncionario}?`))
    let porcentagemDeReajuste = Number(prompt(`O salario de ${nomeDoFuncionario} vai ser reajustado em qual porcentagem?`))

    let aumentoDeSalario = ((salarioDoFuncionario / 100) * porcentagemDeReajuste)
    let salarioReajustado = aumentoDeSalario + salarioDoFuncionario

    let containerSalario = document.getElementById('containerSalario')
    containerSalario.innerHTML = `<h2>${nomeDoFuncionario} recebeu um aumento salarial!</h2> \n <p>O salario atual era R$${salarioDoFuncionario}.</p> \n <p>Com um aumento de ${porcentagemDeReajuste}%, o salario vai aumentar R$${aumentoDeSalario}, no proximo mes.</p> \n <p>E a partir dai, ${nomeDoFuncionario} vai passar a ganhar R$${salarioReajustado}</p>`
}
function bhaskara () {
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))

    let equacao = `${a}x² + ${b}x + ${c} = 0`

    let calculo = `Δ = ${b}² - 4 . ${a} . ${c}`

    let valorCalculado = (b*b) - (4 * a) * c

    let containerBhasakara = document.getElementById('containerBhasakara')
    containerBhasakara.innerHTML = `<p>A equação atual é: <strong>${equacao}</strong> </p>\n
    <p>O cálculo realizado será: <strong>${calculo}</strong> <p>\n
      O valor calculado foi: <strong> Δ = ${valorCalculado}</strong></p>`
}
function verificarAnoBissexto () {
    let anoInserido = parseInt(prompt(`Qual é o ano quer você precisa verificar?`))
    let verificacao = anoInserido / 4
    if (verificacao )
}