// Funcion para generar numeros aleatorios dentro de un rango
function random (min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

// Funcion para asignar un emoji a la eleccion de cada jugador
function eleccion (numero){
    let res =""
    if (numero == 1){
        res = "🪨"
    } else if (numero == 2) {
        res = "📄"
    } else if (numero == 3){
        res = "✂️"
    }else {
        res ="Error"
    }
    return res
}

// Funcion para las condiciones de combate
function combate(jugador,PC){
    if (PC == jugador){
        alert("Empate")
    }else 
    if ((jugador==1 && PC == 3)||(jugador ==2 && PC == 1)||jugador ==3 && PC == 2){
        alert("Gana Jugador")
        victorias_jugador = victorias_jugador + 1 
    }else{
        victorias_PC = victorias_PC + 1 
        alert ("Gana PC")
    } 
    return victorias_jugador, victorias_jugador
}

// Ciclo para jugar hasta que alguien gane 3 veces
let eleccion_jugador = 0  
let eleccion_PC = 0
let victorias_jugador = 0
let victorias_PC = 0

while (victorias_jugador <3 && victorias_PC < 3){
    eleccion_PC = random(1,3)
    eleccion_jugador = prompt("Que eligies 1.🪨, 2.📄, 3.✂️?") 
    alert("El jugador elige:" + eleccion(eleccion_jugador))
    alert("El PC elije"+ eleccion (eleccion_PC))
    combate(eleccion_jugador, eleccion_PC)
}
if (victorias_PC > victorias_jugador){
    alert("GANO LA PC!!!!!")
}else 
if (victorias_PC < victorias_jugador){
    alert("GANO EL JUGADOR!!!!")
}
alert("Ganaste " + victorias_jugador + " veces y perdiste "+ victorias_PC +" veces.")