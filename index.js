const express = require ("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []
class Jugador {
    constructor(id){
        this.id = id
    }
    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
    actualizarPosicion(x,y){
        this.x = x
        this.y = y
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}


app.get("/unirse",(req, res)=> {
    const id =  `${Math.round((Math.random())*100000)}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin","*")
    res.send(id)
    console.log(jugadores)

})


app.post("/mokepon/:jugadorId", (req,res)=>{
    const jugadorId = req.params.jugadorId || "" 
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId==jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})



app.post("/mokepon/:jugadorId/posicion",(req,res)=>{
    const jugadorId = req.params.jugadorId || "" 
    const x = req.body.pos_x || 0
    const y = req.body.pos_y || 0
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId==jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }
    res.end()
})


app.listen(8080,()=> {
    console.log("El servidor arranco")
})
 

// Comentario de prueba para SSH