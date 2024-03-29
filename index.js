const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmeEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondsEl.innerText = s;
  ampmeEl.innerText = ampm;

  setTimeout(() => {
    updateClock() ;
  }, 1000);
}
updateClock();
