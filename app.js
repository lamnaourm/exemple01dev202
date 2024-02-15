import express from 'express'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())


const port = 3000

app.get('/home', (req, res) => {
    console.log(req.body)
    res.status(404).json({id:2,nom:'sdsd'})
})

app.get('/home/:id/:name', (req, res) => {
    res.status(404).json({id:req.params.id,nom:req.params.name})
})

app.post('/home', (req, res) => {
    res.send('POST - Home ...')
})

app.put('/home', (req, res) => {
    res.status(202).send('PUT - Home ...')
})

app.delete('/home', (req, res) => {
    res.send('DELETE - Home ...')
})

app.listen(port, (err) => {
    if(!err)
        console.log('Server started at 3000')
    else
        console.log('Server not started at 3000')

})