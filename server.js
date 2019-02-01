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

db.createTables();

app.get("/trip/all", db.getAllTrips);

app.get("/trip/:id", db.getTripById);

app.get("/days/:id", db.getDayById);

app.get("/days/:id/all", db.getAllDaysById);

app.get("/view/:id", db.viewTripById);

app.post("/trip", db.createTrip);

app.post("/days/:id", db.createDay);

app.put("/trip/:id", db.editTrip);

app.put("/days/:id", db.editDayById);

app.delete("/trip/:id", db.deleteTrip);

app.delete("/days/:id", db.deleteDayById);

app.listen(5000, () => {
  console.log("listening to port 5000");
});
