import './garland.scss';
export function getGarland() {
  const turnGarland = document.querySelector('#turn-lights-id') as HTMLInputElement;
  const treeGarland = document.querySelector('.tree-lights-container') as HTMLInputElement;
  let colorGarland = 'multicolor';
  function getGarlandColor(e: Event) {
    treeGarland.innerHTML = '';
    turnGarland.checked = (e.target as HTMLButtonElement).classList.contains('btn-color') ? true : turnGarland.checked;
    colorGarland =
      (e.target as HTMLButtonElement).dataset.color !== undefined
        ? `${(e.target as HTMLButtonElement).dataset.color}`
        : colorGarland;
    if (turnGarland.checked) {
      let angle = 12;
      const n = [
        [60, 6],
        [58, 7],
        [59, 8],
        [58, 9],
        [58, 10],
        [58, 13],
        [57, 17],
        [56, 25],
      ];

      for (let i = 0; i < n.length; i++) {
        let rot = n[i][0];
        const listLight = document.createElement('ul');
        listLight.classList.add('chain-garland');
        const width = 120 + (150 / 2) * i;
        const height = 120 + (150 / 2) * i;
        listLight.style.height = `${height}px`;
        listLight.style.width = `${width}px`;
        for (let a = 0; a < n[i][1]; a++) {
          const light = document.createElement('li');
          light.style.transform = `rotate(${rot}deg) translate(${height / 2}px) rotate(-${rot}deg)`;
          light.classList.add(colorGarland);
          rot += angle;
          listLight.append(light);
        }
        angle -= 1.3;
        treeGarland.append(listLight);
      }
    }
    return;
  }
  const btnColor = document.querySelectorAll('.btn-color') as NodeListOf<HTMLButtonElement>;
  btnColor.forEach((elem) => {
    elem.addEventListener('click', getGarlandColor);
  });
  turnGarland.addEventListener('click', getGarlandColor);
}
