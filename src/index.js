import './styles.css';

const daysRef = document.querySelector('[data-value = "days"]');
const hoursRef = document.querySelector('[data-value = "hours"]');
const minsRef = document.querySelector('[data-value = "mins"]');
const secsRef = document.querySelector('[data-value = "secs"]');

const currentTime = targetDate => {
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
};

class CountdownTimer {
  constructor({ targetDate }) {
    setInterval(() => {
      currentTime(targetDate);
    }, 1000);
  }
}
currentTime(new Date('Sep 28, 2021'));

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 28, 2021'),
});
