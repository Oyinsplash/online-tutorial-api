const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/userRoute')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1',userRoute);
app.get('/', (req, res) => {
    res.send("Welcome!")
});

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex :true }
)
    .then(result => {
        app.listen(process.env.PORT || 5000);
        console.log("Database connected");
    })
    .catch(err => console.log(err));
