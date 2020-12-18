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
    if (this.getTime() <= 0) {
      this.days.textContent = 0;
      this.hours.textContent = 0;
      this.mins.textContent = 0;
      this.secs.textContent = 0;
      return;
    } else {
      this.intervalId = setInterval(this.updateTimer, 1000);
    }
  }

  getTime() {
    const timeNow = Date.now();
    const time = this.targetDate - timeNow;
    return time;
  }

  countTime() {
    const time = this.getTime();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { hours, days, mins, secs };
  }

  updateTimer = () => {
    if (this.getTime() <= 0) {
      clearInterval(this.intervalId);
      return;
    }

    this.days.textContent = this.countTime().days;
    this.hours.textContent = this.countTime().hours;
    this.mins.textContent = this.countTime().mins;
    this.secs.textContent = this.countTime().secs;
  };
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020'),
});
