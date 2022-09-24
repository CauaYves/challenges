function reajustarSalario() {
    let nomeDoFuncionario = prompt('Qual é o nome do funcionário')
    let salarioDoFuncionario = Number(prompt (`Qual e o salario de ${nomeDoFuncionario}?`))
    let porcentagemDeReajuste = Number(prompt(`O salario de ${nomeDoFuncionario} vai ser reajustado em qual porcentagem?`))

    let aumentoDeSalario = ((salarioDoFuncionario / 100) * porcentagemDeReajuste)
    let salarioReajustado = aumentoDeSalario + salarioDoFuncionario

    let container = document.getElementById('container')
    container.innerHTML = `<h2>${nomeDoFuncionario} recebeu um aumento salarial!</h2> \n <p>O salario atual era R$${salarioDoFuncionario}.</p> \n <p>Com um aumento de ${porcentagemDeReajuste}%, o salario vai aumentar R$${aumentoDeSalario}, no proximo mes.</p> \n <p>E a partir dai, ${nomeDoFuncionario} vai passar a ganhar R$${salarioReajustado}</p>`
}