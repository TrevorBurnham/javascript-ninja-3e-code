let tick = 0;
const timerId = setInterval(() => {
  tick++;
  console.log(`tick ${tick}`);
  if (tick === 5) {
    clearInterval(timerId);
  }
}, 10);
