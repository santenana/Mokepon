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
let mapaback = new Image()
mapaback.src = '/imagenes/mokemap.png'
let Monstruo 






let lienzo = mapa.getContext("2d")
let intervalo

class Mokepon{
    constructor(nombre,foto,vidas,fotoMapa,x=10,y=10){
        this.name = nombre
        this.img = foto
        this.life = vidas
        this.ataque = []
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.MapaFoto = new Image()
        this.MapaFoto.src = fotoMapa
        this.VelocidadX = 0
        this.VelocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(this.MapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto)
    }
}

let hopodoge = new Mokepon('Hopodoge', '/imagenes/mokepons_mokepon_hipodoge_attack.png', 5,'/imagenes/hipodoge.png')
let capipepo = new Mokepon('Capipepo', '/imagenes/mokepons_mokepon_capipepo_attack.png', 5,'/imagenes/capipepo.png')
let ratigueya = new Mokepon('Ratigueya', '/imagenes/mokepons_mokepon_ratigueya_attack.png', 5,'/imagenes/ratigueya.png')


let hopodogeEnemigo = new Mokepon('Hopodoge', '/imagenes/mokepons_mokepon_hipodoge_attack.png', 5,'/imagenes/hipodoge.png',50,150)
let capipepoEnemigo = new Mokepon('Capipepo', '/imagenes/mokepons_mokepon_capipepo_attack.png', 5,'/imagenes/capipepo.png',190,10)
let ratigueyaEnemigo = new Mokepon('Ratigueya', '/imagenes/mokepons_mokepon_ratigueya_attack.png', 5,'/imagenes/ratigueya.png',200,150)

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
    SectionVerMapa.style.display = 'flex'
    iniciarmapa()
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
        case 'ArrowUp' :
            MoverMokeponU()
            break;
        case 'ArrowDown' :
            MoverMokeponD()
            break;
        case 'ArrowRight' :
            MoverMokeponR()
            break;
        case 'ArrowLeft' :
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



function PintarCanvas() {
    Monstruo.x = Monstruo.x + Monstruo.VelocidadX
    Monstruo.y = Monstruo.y + Monstruo.VelocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage( mapaback,
                      0,
                      0,
                      mapa.width,
                      mapa.height)
    Monstruo.pintarMokepon()
    hopodogeEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()

    if (Monstruo.VelocidadX !== 0 || Monstruo.VelocidadY !== 0){
        revisarColision(hopodogeEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(capipepoEnemigo)   
    }
}



function MoverMokeponL(){
    Monstruo.VelocidadX = -5
}



function MoverMokeponR(){
    Monstruo.VelocidadX = 5
}



function MoverMokeponU(){
    Monstruo.VelocidadY = -5
}



function MoverMokeponD(){
    Monstruo.VelocidadY = 5
}



function DetenerMovimiento(){
    Monstruo.VelocidadX = 0
    Monstruo.VelocidadY = 0
}



function obtenerMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(MascotaJugadorAtaque == mokepones[i].name){
            return mokepones[i]
        }
    }  
}



function iniciarmapa(){
    mapa.width = 320
    mapa.height = 240
    Monstruo =  obtenerMascota(MascotaJugadorAtaque)
    intervalo = setInterval(PintarCanvas,50)
    window.addEventListener('keydown', SePresionaTecla)
    window.addEventListener('keyup', DetenerMovimiento)

}



function revisarColision(AtackE){
    const arribaEnemigo = AtackE.y
    const abajoEnemigo  =AtackE.y + AtackE.alto
    const derechaEnemigo = AtackE.x + AtackE.ancho
    const izquierdaEnemigo = AtackE.x

    const arribaMascota= Monstruo.y
    const abajoMascota= Monstruo.y + Monstruo.alto
    const derechaMascota= Monstruo.x + Monstruo.ancho
    const izquierdaMascota= Monstruo.x

    if( abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo || 
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;   
    }
    DetenerMovimiento()
    alert('Un ' +AtackE.name +' Salvaje ha aparecido')
}


window.addEventListener('load',iniciarJuego)

