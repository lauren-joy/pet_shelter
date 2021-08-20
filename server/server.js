const express = require('express');
const app = express();
const cors = require("cors");

require('../server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PetRoutes = require('./routes/pet.routes')
PetRoutes(app);

app.listen(8000, () => {
    console.log("Listening at port 8000")
})