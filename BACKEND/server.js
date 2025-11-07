import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'

const app = express()
await connectDB()
//Middleware

app.use(cors())
app.use(express.json())

//routes
app.get('/', (req,res) => res.send('Server is Live'))

const PORT = process.env.PORT ||3000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})