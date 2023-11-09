function showtime() {
    scheduleMeetingAlert(1000, "Weekly meeting", "https://meet.opensuse.org/meeting");
}


Notification.requestPermission().then((result) => {
    console.log(result);
  });



function MeetingAlert(title, url) {
    const img = "/calendar.svg";
    const text = `Meeting ${title} is about to start.\nConnect to ${url}`;
    const notification = new Notification("To do list", { body: text, icon: img });
}
  
function scheduleMeetingAlert(delay, title, url) {
    setTimeout(MeetingAlert(title, url),delay);
}