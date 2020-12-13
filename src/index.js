import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate.getTime();
    this.timer = document.querySelector(selector);
    this.days = this.timer.querySelector('[data-value="days"]');
    this.hours = this.timer.querySelector('[data-value="hours"]');
    this.mins = this.timer.querySelector('[data-value="mins"]');
    this.secs = this.timer.querySelector('[data-value="secs"]');
    this.start();
  }

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
