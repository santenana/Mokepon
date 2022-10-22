const express = require ("express")

const app = express()

const jugadores = []
class Jugador {
    constructor(id){
        this.id = id
    }
}

app.get("/unirse",(req, res)=> {
    const id =  `${Math.round((Math.random())*10000)}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.send(id)
    console.log(jugadores)
})

app.listen(8080,()=> {
    console.log("El servidor arranco")
})
 

