const express = require("express");
const ical = require('node-ical');
const app = express();
const ics_location = "events.ics";
const port = 3000;
const moment = require("moment");
const nearbyEvents = require("./nearby-events");

app.set("view-engine", "ejs");
const path = require('path');
__dirname = path.resolve();
app.use(express.static((path.join(__dirname, 'views'))));

app.get("/",(req,res)=>{
    icalEvents = ical.sync.parseFile(ics_location);
    // nowish
    var date = moment();
    var nrbyEvents = nearbyEvents(icalEvents, date);
    res.render("index.ejs",{events: nrbyEvents, date: date, moment: moment});
});

app.listen(port,()=>{
    console.log("app is listening on port", port);
});
