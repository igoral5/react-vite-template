export class Timer {
  private timer?: number;
  private intervalTime: number;
  private callback?: () => void;

  time?: Date;

  constructor(intervalTime: number = 1000) {
    this.timer = undefined;
    this.callback = undefined;
    this.intervalTime = intervalTime;
    this.updateTime();
  }

  onChange(callback: () => void) {
    this.callback = callback;
  }

  updateTime() {
    this.time = new Date();
    this.callback?.();
  }

  start() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, this.intervalTime);
  }

  stop() {
    clearInterval(this.timer);
  }
}
