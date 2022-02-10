n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
var datetime = new Date().toLocaleTimeString();
document.getElementById("date-time").innerHTML = m + "/" + d + "/" + y + "   " + datetime;

function refreshTime() {
    const timeDisplay = document.getElementById("date-time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);