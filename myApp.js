let express = require('express');
let app = express();

// absolutePath = __dirname + '/views/index.html';
// app.get("/", function (req, res) {
//     res.sendFile(absolutePath)
// })
// app.use(express.static(__dirname + '/public'))

//  app.use("/public", express.static(__dirname + "/public"));

mensaje = {"message": "Hello json"}
app.get('/', function(req, res) {
    res.json({"message": "Hello json"});
  })
  
app.listen(8080)