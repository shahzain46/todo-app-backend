const express = require('express');
const app = express();
require('dotenv').config();

const toDoRoutes = require('./routes/toDoRoutes');

const connectDB = require('./config/connectDB');


const cors = require('cors');

PORT = process.env.PORT || 5000

// middleWare
app.use(express.json())
app.use(cors())


app.use('/todo', toDoRoutes)


const start = async ()=> {
try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, ()=> console.log(`server is listening on port ${PORT}`) )
} catch (error) {
    console.log(error)
}
}

start()


