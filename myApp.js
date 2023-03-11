let express = require('express');
let app = express();
console.log("Hello World")

// app.get("/",function(req, res) {
//     res.send("Hello Express");
//   })
absolutePath = __dirname + '/views/index.html';
rutaAbsoluta = __dirname + "/public/style.css"
app.get("/",function(req, res ){
    
res.sendFile(absolutePath)
})
 app.use(path, express.static(rutaAbsoluta))


































 module.exports = app;
