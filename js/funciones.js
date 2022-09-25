// Elementos de la funcion Iniciar Juego
const sectionSeleccionarAtaque = document.getElementById('Selecionar-ataque')
const botonSelecMascota = document.getElementById('buttom_selec_mascota')
const sectionSeleccionarreiniciar = document.getElementById('Reiniciar')
sectionSeleccionarreiniciar.style.display = 'none' 
// Elementos de la funcion seleccionar mascota Jugador
const BotonReinicio = document.getElementById('buttom_selec_reiniciar')
const sectionSeleccionarMascota = document.getElementById('Selecionar-Mascota')
const spanMascotaJugador = document.getElementById('Mascota_Jugador')
const ataquesDelJugador=document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo=document.getElementById('ataques-del-enemigo')
// Elementos de la funcion seleccionar mascota enemigo
const enemigo = random(1,3)
const spanMascotaEnemigo = document.getElementById('Mascota_Rival')

// Elementos de la funcion combate
const spanVidaJugador = document.getElementById('Vida-Juagdor')
const spanVidaEnemigo = document.getElementById('Vida-Enemigo')

// Elementos de la funcion crear Mensaje
const sectionresultado = document.getElementById('resultado')


// Elementos de la funcion Mensaje Batalla
// * Se eliminaron los elementos que estaban repetidos

// Elementos de la funcion crear mensaje

const ContenedorTarjetas = document.getElementById('ContenedorTarjetas')
const ContenedorAtaques = document.getElementById('ContenedorAtaques')

let mokepones = []
let botones = []
let ataquejugador2
let ataquejugador = []
let ataqueenemigo = []

let opcionmokepon
let InputHopodoge
let InputCapipepo
let InputRatigueya
let Atack_2
let AtackE

let BotonFuego
let BotonAgua 
let BotonTierra 

let BotonHielo
let BotonOla

let BotonMontaña
let BotonMeteoro

let BotonSol
let BotonExplosion

let vidasJugador = 0
let vidasEnemigo = 0
let ResultadoFinal
let Res_Combat

let indexAtaqueJugador
let indexAtaqueEnemigo  

let MascotaJugadorAtaque


class Mokepon{
    constructor(nombre,foto,vidas){
        this.name = nombre
        this.img = foto
        this.life = vidas
        this.ataque = []
    }
}

let hopodoge = new Mokepon('Hopodoge', '/imagenes/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', '/imagenes/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', '/imagenes/mokepons_mokepon_ratigueya_attack.png', 5)

hopodoge.ataque.push(
    {nombre: '🔥' , id: 'buttom_selec_fuego'},
    {nombre: '💧' , id: 'buttom_selec_agua'},
    {nombre: '❄️' , id: 'buttom_selec_hielo'},
    {nombre: '🌊' , id: 'buttom_selec_ola'},
    {nombre: '🌱' , id: 'buttom_selec_tierra'}
)

capipepo.ataque.push(
    {nombre: '🔥' , id: 'buttom_selec_fuego'},
    {nombre: '💧' , id: 'buttom_selec_agua'},
    {nombre: '☄️' , id: 'buttom_selec_meteoro'},
    {nombre: '🗻' , id: 'buttom_selec_montaña'},
    {nombre: '🌱' , id: 'buttom_selec_tierra'}
)

ratigueya.ataque.push(
    {nombre: '🔥' , id: 'buttom_selec_fuego'},
    {nombre: '💥' , id: 'buttom_selec_exp'},
    {nombre: '☀️' , id: 'buttom_selec_sol'},
    {nombre: '💧' , id: 'buttom_selec_agua'},
    {nombre: '🌱' , id: 'buttom_selec_tierra'}
)

mokepones.push(hopodoge,capipepo,ratigueya)



function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    mokepones.forEach((element)=> {
        opcionmokepon = `
        <input type ="radio" name="mascota" id= ${element.name} />
        <label class="targeta_diseño" for= ${element.name} >
            <p>${element.name}</p>
            <img src= ${element.img} alt=${element.name}>
        </label>
        `
        ContenedorTarjetas.innerHTML += opcionmokepon
        InputHopodoge=document.getElementById('Hopodoge')
        InputCapipepo=document.getElementById('Capipepo')
        InputRatigueya=document.getElementById('Ratigueya')
    })

    botonSelecMascota.addEventListener('click',seleccionarMascotaJugador)
    BotonReinicio.addEventListener('click',reiniciar)
}


function seleccionarMascotaJugador(){
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'
    if (InputHopodoge.checked){
        spanMascotaJugador.innerHTML = InputHopodoge.id
        MascotaJugadorAtaque =  InputHopodoge.id
    }
    else if (InputCapipepo.checked){
        spanMascotaJugador.innerHTML = InputCapipepo.id
        MascotaJugadorAtaque =  InputCapipepo.id
    }
    else if (InputRatigueya.checked){
        spanMascotaJugador.innerHTML = InputRatigueya.id
        MascotaJugadorAtaque =  InputRatigueya.id
    }
    else{
        alert('Debe seleccionar una mascota')
        location.reload()
    }
    ExtraerAtaque(MascotaJugadorAtaque)
    mascotaEnemiga()
}

function ExtraerAtaque(MascotaJugadorAtaque){
    let Atack 
    for (let i = 0; i < mokepones.length; i++) {
        if(MascotaJugadorAtaque == mokepones[i].name){
            Atack = mokepones[i].ataque
        }
    }
    
    mostrarAtaques(Atack)
}

function mostrarAtaques(Atack){
    Atack.forEach((ataque)=>{
        Atack_2 = `
        <button id = ${ataque.id} class="EstiloBoton ButAtaque">${ataque.nombre}
        </button>`
        ContenedorAtaques.innerHTML += Atack_2
    })

    BotonFuego = document.getElementById('buttom_selec_fuego')
    BotonExplosion = document.getElementById('buttom_selec_exp')
    BotonSol = document.getElementById('buttom_selec_sol')

    BotonAgua = document.getElementById('buttom_selec_agua')
    BotonHielo = document.getElementById('buttom_selec_hielo')
    BotonOla = document.getElementById('buttom_selec_ola')

    BotonTierra = document.getElementById('buttom_selec_tierra')
    BotonMeteoro = document.getElementById('buttom_selec_meteoro')
    BotonMontaña = document.getElementById('buttom_selec_montaña')


    botones = document.querySelectorAll('.ButAtaque')
}



function secuenciaAtaque(){
    botones.forEach((boton)=> {
        boton.addEventListener('click', (e) =>{
            // console.log(e)
            if (e.target.textContent === '🔥\n        '){
                ataquejugador.push('🔥')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '☀️\n        '){
                ataquejugador.push('☀️')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '💥\n        '){
                ataquejugador.push('💥')
                console.log(ataquejugador)
                boton.style.background = '#112f58'


            } else if (e.target.textContent === '💧\n        ') {
                ataquejugador.push('💧')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '🌊\n        ') {
                ataquejugador.push('🌊')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '❄️\n        ') {
                ataquejugador.push('❄️')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
           

            } else if (e.target.textContent === '🌱\n        '){
                ataquejugador.push('🌱')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '☄️\n        '){
                ataquejugador.push('☄️')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '🗻\n        '){
                ataquejugador.push('🗻')
                console.log(ataquejugador)
                boton.style.background = '#112f58'
            }
            ataqueEnemigo()

        })
    })
    
}


function mascotaEnemiga(){
    let enemigo=random(0,(mokepones.length-1))
    spanMascotaEnemigo.innerHTML = mokepones[enemigo].name
    AtackE = mokepones[enemigo].ataque
    secuenciaAtaque()    
}




function ataqueEnemigo(){
    let enemigo_atk = random(0,(AtackE.length-1))
    // console.table(AtackE.length)
    if (enemigo_atk == 0 || enemigo_atk == 1){
        ataqueenemigo.push('🔥')  
    }
    else if (enemigo_atk == 2 || enemigo_atk == 3){
        ataqueenemigo.push('💧')
    }
    else if (enemigo_atk == 4 || enemigo_atk == 5){
        ataqueenemigo.push('🌱')
    }
    console.log(ataqueenemigo)
    inicializarPelea()
}

function inicializarPelea(){
    if (ataquejugador.length == 5){
        combate()      
    }
}

function indextovar(JugadorInd,EnemigoInd){
    indexAtaqueJugador = ataquejugador[JugadorInd]
    indexAtaqueEnemigo = ataqueenemigo[EnemigoInd]
}



function combate(){

    for (let i = 0; i < ataquejugador.length; i++) {
        if(ataquejugador[i] == ataqueenemigo[i]){
            indextovar(i, i)
            crearMensaje ( "Empate 😑")
                 
        // Condiciones de victoria del jugador    
        }else if((ataquejugador[i] == '🔥' || ataquejugador[i] == '💥' || ataquejugador[i] == '☀️') && ataqueenemigo[i] == '🌱'){
            indextovar(i, i)
            crearMensaje ( "Ganaste 🎉")
            vidasJugador ++
        }else if((ataquejugador[i] == '💧' || ataquejugador[i] == '❄️' || ataquejugador[i] == '🌊') && ataqueenemigo[i] == '🔥'){
            indextovar(i, i)
            crearMensaje ( "Ganaste 🎉")
            vidasJugador ++
        }else if((ataquejugador[i] == '🌱'|| ataquejugador[i] == '🗻' || ataquejugador[i] == '☄️') && ataqueenemigo[i] == '💧'){
            indextovar(i, i)
            crearMensaje ( "Ganaste 🎉")
            vidasJugador ++

        // Condiciones de victoria de la maquina
        }else if((ataquejugador[i] == '🌱'|| ataquejugador[i] == '🗻' || ataquejugador[i] == '☄️') &&  ataqueenemigo[i] == '🔥'){
            indextovar(i, i)
            crearMensaje ("Perdiste 😞")
            vidasEnemigo ++

        }else if((ataquejugador[i] == '💧' || ataquejugador[i] == '❄️' || ataquejugador[i] == '🌊') &&  ataqueenemigo[i] == '🌱'){
        indextovar(i, i)
        crearMensaje ("Perdiste 😞")
        vidasEnemigo ++
        
        }else if((ataquejugador[i] == '🔥' || ataquejugador[i] == '💥' || ataquejugador[i] == '☀️') &&  ataqueenemigo[i] == '💧'){
            indextovar(i, i)
            crearMensaje ("Perdiste 😞")
            vidasEnemigo ++



        // Condiciones de Empate
        }else if((ataquejugador[i] == '🌱'|| ataquejugador[i] == '🗻' || ataquejugador[i] == '☄️') &&  ataqueenemigo[i] == '🌱'){
            indextovar(i, i)
            crearMensaje ( "Empate 😑")

        }else if((ataquejugador[i] == '💧' || ataquejugador[i] == '❄️' || ataquejugador[i] == '🌊') &&  ataqueenemigo[i] == '💧'){
        indextovar(i, i)
        crearMensaje ( "Empate 😑")
        
        }else if((ataquejugador[i] == '🔥' || ataquejugador[i] == '💥' || ataquejugador[i] == '☀️') &&  ataqueenemigo[i] == '🔥'){
            indextovar(i, i)
            crearMensaje ( "Empate 😑")


        }else {
            crearMensaje ("Perdiste 😞")
            vidasEnemigo ++
        }
    }
    revisarVidas()
}





function crearMensaje(resultado){

    let nuevoAatqueJugador = document.createElement('p')
    let nuevoAatqueEnemigo = document.createElement('p')

    sectionresultado.innerHTML = resultado
    nuevoAatqueJugador.innerHTML = indexAtaqueJugador
    nuevoAatqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAatqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAatqueEnemigo)

}






function MensajeBatalla(ResultadoFinal){
    sectionresultado.innerHTML = ResultadoFinal 
// En esta seccion se desabilitan los botones cuando despues de 
// que se cumpla la condicion de que gane o perdi
// los botones quedan desabilitados
    BotonFuego.disabled = true
    // BotonSol.disabled = true
    // BotonExplosion.disabled = true

    BotonAgua.disabled = true
    // BotonHielo.disabled = true
    // BotonOla.disabled = true

    BotonTierra.disabled = true
    // BotonMontaña.disabled = true
    // BotonMeteoro.disabled = true


    sectionSeleccionarreiniciar.style.display = 'block'

}


function revisarVidas(){
    if (vidasJugador > vidasEnemigo ){
        MensajeBatalla ('GANASTE EL COMBATE 🎉🎉🎉')
    }else if (vidasEnemigo > vidasJugador){
        MensajeBatalla ('PERDISTE EL COMBATE 💀💀💀')
    } else {
        MensajeBatalla('EMPATE ⏺️')
    }
    spanVidaJugador.innerHTML = vidasJugador
    spanVidaEnemigo.innerHTML = vidasEnemigo

}


function reiniciar(){
    location.reload()
}

function random (min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

window.addEventListener('load',iniciarJuego)



    
