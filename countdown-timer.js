function startCountdown(seconds) {
  const interval = setInterval(() => {
    console.log(`Time left: ${seconds--}s`);
    if (seconds < 0) {
      clearInterval(interval);
      console.log('Countdown finished!');
    }
  }, 1000);
}

startCountdown(10);
