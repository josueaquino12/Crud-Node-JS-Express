const express = require ('express');
const apiRouter = require('./server');
const app = express();

const port = 3000

app.use(express.json())

app.get('/', (req, res)=> {
   res.send('Hola mundo')
})


apiRouter(app)


/*app.get('/users', (req, res) => {
    const {limit, offset} = req.query
    if(limit && offset){
        res.json({
            limit,
            offset
        })
    } else {
        res.send('No hay ningun parametro')
    }
})*/

app.listen(port, (req,res)=>{
    console.log(`Puerto escuchando en el ${port}`)
} )