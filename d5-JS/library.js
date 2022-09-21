function conversorDeMedidas() {
    var valorRecebido = prompt('Digite uma distância em metros (m)')
    var metro = parseFloat(valorRecebido) 

    var km = metro / 1000
    var hm = metro / 100
    var dam = metro / 10
    var dm = metro * 10
    var cm = metro / 100
    var mm = metro / 1000

    var p = document.getElementById('text')
    p.innerHTML = `<p><strong>A distância em Metros de ${metro} metros, corresponde a:</strong></p>`;

    var distancias = document.getElementById('container-medidas')
    distancias.innerHTML = `<p>${km} quilômetros (km)</p> \n<p>${hm} hectômetro (Hm)</p> \n<p>${dam} decâmetros (Dam)</p> \n<p>${dm} decímetros (dm)</p> \n<p>${cm} centímetros (cm)</p>\n<p>${mm} milímetros (mm)</p>`
}