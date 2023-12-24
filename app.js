let express = require('express')
let app = express()
let path = require('path')
let port = 3000
app.set('view engine','ejs')

let createPath = (page) => path.resolve(__dirname,'public','view',`${page}.ejs`)
app.use(express.static(path.resolve(__dirname,'public','styles')))
app.use(express.static(path.resolve(__dirname,'public','script')))
app.use(express.static(path.resolve(__dirname,'public','images')))

app.get('/',(req,res)=>{
    res.render(createPath('index'))
})


app.listen(port,(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('Server started')
    }
})