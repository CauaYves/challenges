function converterTemperatura() {
    var temp = prompt('digite uma temperatura graus Celsius')
    var temperatura = parseFloat(temp)
    var kelvin = temperatura + 273.15
    var farenheit = temperatura * 1.8 + 32
    var container = document.getElementById(`container`)
    container.innerHTML = `<h2>A temperatura de ${temperatura}°C, corresponde a..</h2> \n <p>kelvin ${kelvin} (K)</p>  \n   <p>farenheit ${farenheit} (°F)</p>`

}


/*
    celsius - kelvin = 0 °C + 273,15 = 273,15 K
    celsius - farenheit = (0 °C × 9/5) + 32 = 32 °F 
*/