export function audioPlay() {
  let isPlay = false;
  const playAudio = document.querySelector('.audio-setting') as HTMLElement;
  const audio = document.querySelector('.audio') as HTMLAudioElement;

  if (localStorage.getItem('isPlay')) {
    isPlay = JSON.parse(localStorage.getItem('isPlay') as string);
  }
  function lod() {
    playAudio.classList.toggle('active');
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
