

const mongoose = require("mongoose");


const db = "mongodb+srv://chaitanya:girase123@cluster0.dypcc.mongodb.net/shortAPI?retryWrites=true&w=majority";

const connectdatabase = async()=>{
    try {
        await mongoose.connect(db,
            {useNewUrlParser:true})

        console.log("mongo connected");
    } catch (error) {
        console.error(error.message)
        process.exit(1);
    }
}


module.exports = connectdatabase;
