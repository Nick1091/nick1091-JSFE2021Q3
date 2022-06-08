import { IQuizSettings } from '../interfaces';

export class SoundManager {
  private baseUrl = './assets/audio/';

  private cache = new Map<string, Blob>();

  private soundList: Array<string> = ['correct_a', 'incorrect_a', 'final', 'press_btn'];

  settings: IQuizSettings;

  preload() {
    const results = Promise.all(this.soundList.map((it) => this.preloadFile(`${this.baseUrl}${it}.mp3`)));
    results.then((res) => {
      this.soundList.forEach((soundName, i) => {
        this.cache.set(soundName, res[i]);
      });
    });
  }

  private preloadFile(url: string) {
    return fetch(url).then((res) => res.blob());
  }

  correctAudio(settings: IQuizSettings) {
    this.playSound('correct_a', settings);
  }

  fail(settings: IQuizSettings) {
    this.playSound('incorrect_a', settings);
  }

  playSound(name: string, settings: IQuizSettings) {
    const cached = this.cache.get(name);
    if (cached) {
      const audio = new Audio(URL.createObjectURL(cached));
      if (settings.volumeEnable) {
        audio.volume = settings.volume / 400;
        audio.play();
      }
    } else {
      const audio = new Audio(`${this.baseUrl}${name}.mp3`);
      if (settings.volumeEnable) {
        audio.volume = settings.volume / 400;
        audio.play();
      }
    }
  }
}

export const soundManager = new SoundManager();
