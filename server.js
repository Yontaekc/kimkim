let express = require("express");
let bodyParser = require("body-parser");
let db = require("./database/model");

let app = express();

app.use(express.static(__dirname + "/client/public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

db.createTables();

app.listen(3000, () => {
  console.log("listening to port 3000");
});
