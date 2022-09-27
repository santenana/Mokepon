const sectionSeleccionarAtaque = document.getElementById('Selecionar-ataque')
const botonSelecMascota = document.getElementById('buttom_selec_mascota')
const sectionSeleccionarreiniciar = document.getElementById('Reiniciar')
sectionSeleccionarreiniciar.style.display = 'none' 
const BotonReinicio = document.getElementById('buttom_selec_reiniciar')
const sectionSeleccionarMascota = document.getElementById('Selecionar-Mascota')
const spanMascotaJugador = document.getElementById('Mascota_Jugador')
const ataquesDelJugador=document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo=document.getElementById('ataques-del-enemigo')
const enemigo = random(1,3)
const spanMascotaEnemigo = document.getElementById('Mascota_Rival')
const spanVidaJugador = document.getElementById('Vida-Juagdor')
const spanVidaEnemigo = document.getElementById('Vida-Enemigo')
const sectionresultado = document.getElementById('resultado')
const ContenedorTarjetas = document.getElementById('ContenedorTarjetas')
const ContenedorAtaques = document.getElementById('ContenedorAtaques')

const SectionVerMapa =document.getElementById('Ver-mapa')
const mapa = document.getElementById('Mapa')


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
// let Monstruo 

let lienzo = mapa.getContext("2d")
let intervalo

class Mokepon{
    constructor(nombre,foto,vidas){
        this.name = nombre
        this.img = foto
        this.life = vidas
        this.ataque = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.MapaFoto = new Image()
        this.MapaFoto.src = foto
        this.VelocidadX = 0
        this.VelocidadY = 0
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
    SectionVerMapa.style.display = 'none'

    mokepones.forEach((element)=> {
        opcionmokepon = `
        <input type ="radio" name="mascota" id= ${element.name} />
        <label class="targeta_diseño" for= ${element.name} >
            <p id = "P-Mascota">${element.name}</p>
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
    //sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'
    SectionVerMapa.style.display = 'flex'

    iniciarmapa()

    if (InputHopodoge.checked){
        spanMascotaJugador.innerHTML = InputHopodoge.id
        MascotaJugadorAtaque =  InputHopodoge.id
        // Monstruo = InputHopodoge.id
    }else if (InputCapipepo.checked){
        spanMascotaJugador.innerHTML = InputCapipepo.id
        MascotaJugadorAtaque =  InputCapipepo.id
        // Monstruo = InputCapipepo.id
    }else if (InputRatigueya.checked){
        spanMascotaJugador.innerHTML = InputRatigueya.id
        MascotaJugadorAtaque =  InputRatigueya.id
        // Monstruo = InputRatigueya.id
    }else{
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
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '☀️\n        '){
                ataquejugador.push('☀️')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '💥\n        '){
                ataquejugador.push('💥')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true


            } else if (e.target.textContent === '💧\n        ') {
                ataquejugador.push('💧')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '🌊\n        ') {
                ataquejugador.push('🌊')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '❄️\n        ') {
                ataquejugador.push('❄️')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
           

            } else if (e.target.textContent === '🌱\n        '){
                ataquejugador.push('🌱')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '☄️\n        '){
                ataquejugador.push('☄️')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '🗻\n        '){
                ataquejugador.push('🗻')
                // console.log(ataquejugador)
                boton.style.background = '#112f58'
                boton.disabled = true
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
    // console.log(ataqueenemigo)
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



function SePresionaTecla(event){

    switch (event.key) {
        case 'ArrowUp' || 'w':
            MoverMokeponU()
            break;
        case 'ArrowDown'|| 's':
            MoverMokeponD()
            break;
        case 'ArrowRight' || 'd':
            MoverMokeponR()
            break;
        case 'ArrowLeft' || 'a':
            MoverMokeponL()
            break;
        case 'w':
            MoverMokeponU()
            break;
        case  's':
            MoverMokeponD()
            break;
        case 'd':
            MoverMokeponR()
            break;
        case 'a':
            MoverMokeponL()
            break;
        default:
            break;
    }
}



function random (min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}



function PintarMokepon() {
    capipepo.x = capipepo.x + capipepo.VelocidadX
    capipepo.y = capipepo.y + capipepo.VelocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(capipepo.MapaFoto,
                     capipepo.x,
                     capipepo.y,
                     capipepo.ancho,
                     capipepo.alto)
}

function MoverMokeponL(){
    capipepo.VelocidadX = -5
}

function MoverMokeponR(){
    capipepo.VelocidadX = 5
}

function MoverMokeponU(){
    capipepo.VelocidadY = -5
}

function MoverMokeponD(){
    capipepo.VelocidadY = 5
}

function DetenerMovimiento(){
    capipepo.VelocidadX = 0
    capipepo.VelocidadY = 0
}



function iniciarmapa(){
    intervalo = setInterval(PintarMokepon,50)
    window.addEventListener('keydown', SePresionaTecla)
    window.addEventListener('keyup', DetenerMovimiento)

}

window.addEventListener('load',iniciarJuego)

    
