function ConverterRealParaDolar() {
    var cotacao = Number(prompt('digite a cotação do dólar atualmente'))
    var real = Number(prompt('quanto dinheiro você tem em sua carteira?'))
    var conversao = real / cotacao

    var p = document.querySelector('p')
p.innerHTML = `<p>com a cotação de <strong>R$${cotacao}</strong> reais, os seus <strong>R$${real}</strong> reais, você compraria <strong>$${conversao}USD<strong></p>`
}