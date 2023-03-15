let express = require('express');
let app = express();

// app.get("/",function(req, res) {
//     res.send("Hello Express");
//   })
// absolutePath = __dirname + '/views/index.html';

// app.get("/", function (req, res) {

//     res.sendFile(absolutePath)
// })
// //app.use(express.static(__dirname+ "/public"))

// app.use("/public", express.static(__dirname + "/public"));
// 
app.get("https://boilerplate-express.dariohimo.repl.co/json", function (req, res) {

    res.json({"message": "Hello json"})
 //   your-app-url/json
})

































module.exports = app;
