import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    // this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.days = document.querySelector(`${selector} [data-value="days"]`);
    this.hours = document.querySelector(`${selector}  [data-value="hours"]`);
    this.mins = document.querySelector(`${selector}  [data-value="mins"]`);
    this.secs = document.querySelector(`${selector}  [data-value="secs"]`);
    this.start();
  }

  // refs = {
  //   timer: document.querySelector(this.selector),
  //   days: document.querySelector(`${this.selector} [data-value="days"]`),
  //   hours: document.querySelector(`${this.selector}  [data-value="hours"]`),
  //   mins: document.querySelector(`${this.selector}  [data-value="mins"]`),
  //   secs: document.querySelector(`${this.selector}  [data-value="secs"]`),
  // };

  start() {
    this.intervalId = setInterval(this.updateTimer, 1000);
  }

  updateTimer = () => {
    const timeNow = Date.now();
    const time = this.targetDate - timeNow;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  };
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020'),
});
