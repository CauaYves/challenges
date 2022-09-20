function troco() {
    var produto = prompt('que produto voce está comprando?')
    var custo = prompt(`quanto custa ${produto}`)
    var valorpago = prompt(`Qual foi o valor que você deu para pagar ${produto}`)

    var dinheiro = (Number(valorpago))
    var valoproduto = (Number(custo))

    var valoproduto2 = valoproduto.toLocaleString('PT-BR', {style: 'currency', currency: 'brl'})
    var dinheiro2 = dinheiro.toLocaleString('PT-BR', {style: 'currency', currency: 'brl'})
    var troco = dinheiro - valoproduto

    var troco2 = troco.toLocaleString('PT-BR', {style: 'currency', currency: 'brl'} )
    alert(`Você comprou mouse gamer que custou ${valoproduto2} \n Deu ${dinheiro2} em dinheiro e vai receber ${troco2} de troco \n Volte Sempre!`)
}