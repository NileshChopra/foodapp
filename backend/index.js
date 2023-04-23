const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
const mongoDB = require("./db")
app.use(cors())
app.use(express.json())
app.use('/api/',require("./Routes/CreateUser"))
app.use('/api/',require("./Routes/DisplayData"))
app.use('/api/',require("./Routes/OrderData"))
mongoDB();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept ");
  next();
})

// app.get('/', (req, res) => {
//   res.send('Hello World!--')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.get('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a Single Route'})
// })

// app.listen(5000, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })