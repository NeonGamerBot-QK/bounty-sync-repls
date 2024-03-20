const express = require('express')
const app = express();
let cache =  []

app.use(express.json())
app.use(require('cors')())
app.get('/', (req,res) => {
res.json({ "hello": "world"})
})

app.get('/ping', (req,res) => {
    res.json({ ok: true })
})

app.post('/sync', (req,res) => {
    let body = req.body
    console.log(body)
 if(!cache.includes(body)) {
    cache.push(body)
 }
    res.json({ status: 200 })
})

app.get('/get_cache', (req,res) => {
    res.json(cache)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("up on ::3000")
})