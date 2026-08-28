function updateClock() {
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const now = new Date();
  const month = months[now.getMonth()];
  const date = now.getDate();
  const day = days[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  document.getElementById("clock").textContent =
    month + " " + date + ", " + day + " " + hours + ":" + minutes;
}

updateClock();
setInterval(updateClock, 1000);
