const mongoose = require('mongoose');

function connectDB(url) {
    mongoose.connect(url) .then(() => {
        console.log("connected to the database");
    })
    .catch((err) => console.log(err));
}


module.exports = connectDB