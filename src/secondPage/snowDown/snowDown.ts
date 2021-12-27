export function getSnowInterval() {
  function createSnowFlake() {
    const snowWindow = document.querySelector('.tree-snow-container') as HTMLElement;
    const snowFlake = document.createElement('i') as HTMLElement;
    snowFlake.classList.add('fa-snowflake');
    snowFlake.style.left = Math.random() * (snowWindow?.clientWidth - 20) + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
    snowFlake.style.opacity = `${Math.random()}`;
    snowFlake.style.width = Math.random() * 10 + 10 + 'px';
    snowWindow?.appendChild(snowFlake);

    setTimeout(() => {
      snowFlake.remove();
    }, 5000);
  }

  const snowControl = document.querySelector('.snow-setting') as HTMLElement;
  const snowflakesIntervalId = setInterval(() => {
    if (snowControl.classList.contains('active')) {
      createSnowFlake();
    } else {
      clearInterval(snowflakesIntervalId);
    }
  }, 50);
}
