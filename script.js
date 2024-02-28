const CALCULAR = document.getElementById('calcular')
const ERROR = document.getElementById('error')
const FLU = document.getElementById('flu')
const MAN = document.getElementById('man')

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
if (DATO > 0){
    ERROR.style.display = "none"
    let volumen   = calcularflujo (DATO)
    let mantenimiento = Math.round (volumen/24)
    let medio = mantenimiento * 1.5
    FLU.innerHTML = mantenimiento + ' cc/hr'
    MAN.innerHTML = 'm+m/2 ' + medio+ ' cc/hr'
    FLU.style.display = 'block'
    MAN.style.display = 'block'
} else {
    ERROR.style.display = 'block'
    FLU.style.display = 'none'
    MAN.style.display = 'none'
}
})
function calcularflujo(peso){
    let resto = peso
    let flujo = 0
    if (resto > 30 ){
        let este = (resto * 4) +7
        let esteotro = resto + 90
        let divid = este/esteotro
        flujo += divid + 1500
    }

    else if (resto <30 && resto > 20){
        let este = (resto - 20) * 20
        flujo += este + 1500
    }
    else if (resto < 20 && resto > 10){
        let este = (resto - 10) * 50
        flujo += este + 1000
    } 
    else {
        flujo += resto * 100
    }
    let volumen = flujo 
    return volumen 
}
