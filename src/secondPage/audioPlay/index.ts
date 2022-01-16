import { getStorage } from '../../firstPage/getLocalStorage/index';
export function audioPlay() {
  let isPlay = false;
  const playAudio = document.querySelector('.audio-setting');
  if (!(playAudio instanceof HTMLElement)) {
    throw new Error('Error');
  }
  const audio = document.querySelector('.audio');
  if (!(audio instanceof HTMLAudioElement)) {
    throw new Error('Error');
  }

  isPlay = getStorage('isPlay') ? getStorage('isPlay') : isPlay;

  function lod() {
    if (!(audio instanceof HTMLAudioElement)) {
      throw new Error('Error');
    }
    playAudio?.classList.toggle('active');
    audio.volume = 0.4;
    audio.play();
    window.removeEventListener('click', lod);
  }
  window.addEventListener('load', () => {
    if (isPlay) {
      window.addEventListener('click', lod);
    }
  });
  playAudio.addEventListener('click', (event) => {
    event.stopPropagation();
    playAudio.classList.toggle('active');
    if (playAudio.classList.contains('active')) {
      audio.volume = 0.4;
      audio.play();
      isPlay = true;
    } else {
      audio.pause();
      isPlay = false;
    }
    localStorage.setItem('isPlay', JSON.stringify(isPlay));
  });
}
