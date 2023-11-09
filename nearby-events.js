const moment = require('moment');

var List = require("collections/list");

function nearbyEvents(icalEvents, date) {
    result = List();
    for (const event of Object.values(icalEvents)) {
        if (event.type == 'VEVENT') {
            upcoming = isSoonish(event, date);
            if (!upcoming) {
                continue
            }
            
            // default to remote
            location = "https://meet.opensuse.org/meeting"
            if (event.location) {
                console.log(event.location);
                location = event.location   
            }

            momentEvent = {start : new moment(event.start),
                end : new moment(event.end),
                location: location,
                description: event.description,
                summary: event.summary};
            result.add(momentEvent);

            console.log("Upcoming " + upcoming);
        }
    }
    return result;
}


function isSoonish(event, date) {

    //moment.js
    eventDate = moment(event.start);
    days = eventDate.diff(date, "days");
    hours = eventDate.diff(date, "hours");
    console.log(days + " days " + hours + " hours from now");


    if (hours >= 0 && hours < (14 * 24)) {
     return true;
    }
    return false;
}

module.exports = nearbyEvents;