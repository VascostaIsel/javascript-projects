function displayDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session

    if (hours <= 12) {
        session = "AM"
    } else {
        session = "PM"
        hours = hours - 12
    }
    
    document.getElementById("date").innerHTML = day + "/" + month + "/" + year
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + " " + session
}

setInterval(displayDate, 100);