import './styles.css';

const daysRef = document.querySelector('[data-value = "days"]');
const hoursRef = document.querySelector('[data-value = "hours"]');
const minsRef = document.querySelector('[data-value = "mins"]');
const secsRef = document.querySelector('[data-value = "secs"]');
const crBtn = document.querySelector('.crBtn');

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    setInterval(() => {
      let time = targetDate - new Date();
      daysRef.textContent = String(
        Math.floor(time / (1000 * 60 * 60 * 24)),
      ).padStart(2, '0');
      hoursRef.textContent = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      minsRef.textContent = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      secsRef.textContent = String(
        Math.floor((time % (1000 * 60)) / 1000),
      ).padStart(2, '0');
    }, 1000);
  }
}

crBtn.addEventListener('click', createTimer());

function createTimer() {
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  });
}
