const express = require ('express')
const app = express()
const cors = require('cors')
app.use(cors())
  

app.get('/',(req,res) => {
    res.send('l\' api est en ligne !')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})