require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')
const port = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')


mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true
    }
).then(()=>{
    console.log("Connected to database")
}).catch((err)=>{
    console.log(`Error \n${err}`)
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


app.use(require('./routes/index'));

app.listen(process.env.PORT || 3000)