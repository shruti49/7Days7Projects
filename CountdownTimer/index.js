let deadline = new Date("Jan 31, 2020 11:59:00").getTime();
console.log(deadline);

let x = setInterval(() => {
  let now = new Date().getTime();
  let time = deadline - now;

  let day = Math.floor(time / (1000 * 60 * 60 * 24));
  let hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = day;
  document.getElementById("hours").innerText = hour;
  document.getElementById("minutes").innerText = min;
  document.getElementById("seconds").innerText = sec;

  if (time < 0) {
    clearInterval(x);
    document.getElementById("demo").innerText = "Times Up";
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
  }
}, 1000);

function start() {
  
  
  let m = document.getElementById("minute").innerText;
    let s = document.getElementById("second").innerText;
    

  console.log(t);
}
