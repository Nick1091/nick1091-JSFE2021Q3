import Control from '../../common/control';

export class Timer extends Control {
  onTimeout: () => void;

  timer: number;

  initialTime: number;

  start(time: number) {
    this.initialTime = time;
    if (this.timer) {
      this.stop();
    }
    let currentTime = time;
    const render = (current: number) => {
      this.node.textContent = `${current <= 9 ? `0${current}` : current} / ${this.initialTime}`;
    };
    render(time);
    this.timer = window.setInterval(() => {
      currentTime -= 1;
      render(currentTime);
      if (currentTime <= 0) {
        this.onTimeout();
      }
    }, 1000);
  }

  stop() {
    window.clearInterval(this.timer);
  }
}
