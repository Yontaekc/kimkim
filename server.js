let express = require("express");
let bodyParser = require("body-parser");
let db = require("./database/model");
let app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// app.use(express.static(__dirname + "/client/public"));

db.createTripPlans();
db.createDays();

app.listen(5000, () => {
  console.log("listening to port 5000");
});
