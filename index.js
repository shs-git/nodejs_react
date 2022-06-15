// index,js는 백엔드의 시작점
const express = require('express')
const app = express()
const port = 5000 


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shs1:tmax1234@nodejsreact.0rv4w.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})