document.addEventListener('DOMContentLoaded', function () {
  const timerDisplay = document.getElementById('timer');
  let timeLeft = 3000; // 15 minutes in seconds

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  function updateTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
    if (timeLeft > 0) {
      timeLeft--;
      setTimeout(updateTimer, 1000);
    } else {
      timerDisplay.textContent = '00:00';
    }
  }

  updateTimer();
});
