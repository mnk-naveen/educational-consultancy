let value = 0;
const step = 0.1;
const target = 4.8;
const counter = document.getElementById('counter');

const interval = setInterval(() => {
  counter.textContent = value.toFixed(1);
  value += step;
  if (value > target) {
    clearInterval(interval);
  }
}, 50); 