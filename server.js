import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import bodyParser from 'body-parser';

// configure env
dotenv.config(); // in our case it is in root so no need to give path otherwise give path inside brakets

// database config
connectDB();

// rest object
const app  = express();


// middelware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res)=>{
    res.send({
        message:'WelCome to my website'
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server is runnig on ${process.env.DEV_MODE} port ${PORT}`)
})