

const express = require("express");

const connectdatabase = require("./config/connect")

const app = express();

connectdatabase()

app.use(express.json({extended:false}))

app.use("/", require("./routes/index"))
app.use("/api/url", require("./routes/url"))

app.listen(5000,()=>{
    console.log("connected 5000")
})