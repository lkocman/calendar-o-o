function showtime() {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes();
    document.getElementById('timenow').innerHTML = "Current time " + time;
}

setInterval(showtime, 1000);