const express = require("express")
const morgan = require("morgan")
const path = require("path")
const app = express();
//Configuracion
app.set('port', process.env.PORT || 3000);
//Midleware
app.use(morgan("dev"))
app.use(express.json())
//Routes
app.use("/api/post",require("./routes/post.routes"))

app.use(express.static(path.join(__dirname, "public")))

app.listen(app.get('port'), () => {
    console.log("Hello word")
})