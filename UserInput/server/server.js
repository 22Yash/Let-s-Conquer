const express = require('express');
const app = express();
const cors = require('cors')

require('./db/conn')
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE',   // Specify allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
}));


const inputRoutes = require('./routes/input')

app.use('/input',inputRoutes)

app.listen(4000,()=>{
    console.log("server running");
    
})