//SESSION LENGTH INCREMENT - DECREMENT BUTTON
let sincbtn = document.querySelector(".sincbtn");
let sdecbtn = document.querySelector(".sdecbtn");

//BREAK LENGTH INCREMENT - DECREMENT BUTTON
let bincbtn = document.querySelector(".bincbtn");
let bdecbtn = document.querySelector(".bdecbtn");

//SESSION - BREAK INC DEC COUNTER
let slen = document.querySelector(".session-length");
let blen = document.querySelector(".break-length");

const min = document.querySelector("#minute");

let counter1 = document.querySelector(".session-length").textContent;
let counter2 = document.querySelector(".break-length").textContent;

class Clock {
  constructor(incbtn, decbtn, counter) {
    this.incbtn = incbtn;
    this.decbtn = decbtn;
    this.counter = counter;
    this.min = min;
  }

  lenIncrement(str) {
    console.log(this.incbtn);
    this.incbtn.addEventListener("click", () => {
      if (this.incbtn === `document.querySelector(".sincbtn")`) {
        if (this.counter < 60) {
          this.counter++;
          str.textContent = this.counter;
          this.min.textContent = counter;
        }
      } else {
        if (this.counter < 60) {
          this.counter++;
          str.textContent = this.counter;
        }
      }
    });
  }
  lenDecrement = str => {
    this.decbtn.addEventListener("click", () => {
      //console.log(text);
      if (this.counter > 1) {
        this.counter--;
        str.textContent = this.counter;
      }
    });
  };

  timer = () => {
    let time = 120;

    this.min=
 
  }
}

let c1 = new Clock(sincbtn, sdecbtn, counter1);
let c2 = new Clock(bincbtn, bdecbtn, counter2);
c1.lenIncrement(slen);
c1.lenDecrement(slen);
// c1.displayMinutes(min);
c2.lenIncrement(blen);
c2.lenDecrement(blen);















