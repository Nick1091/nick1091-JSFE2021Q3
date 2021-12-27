import './garland.scss';
export function getGarland() {
  const turnGarland = document.querySelector('#turn-lights-id') as HTMLInputElement;
  turnGarland?.addEventListener('click', () => {
    // turnGarland.checked = true;
  });
}
