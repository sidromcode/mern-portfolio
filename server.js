const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const portfolioRoute = require('./routes/portfolioRouter');


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'./client/build')));


app.use('/api/v1/portfolio',portfolioRoute);
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})