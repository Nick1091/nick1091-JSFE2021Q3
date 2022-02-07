import './garland.scss';
export function getGarland() {
  const treeGarland = document.querySelector('.tree-lights-container');
  let colorGarland = 'multicolor';
  const turnGarland = document.querySelector('#turn-lights-id');
  const turnGarlandLabel = document.querySelector('.turn-lights');
  if (!(turnGarlandLabel instanceof HTMLButtonElement)) {
    throw new Error('Error');
  }
  function getGarlandColor(e: Event) {
    if (!(turnGarland instanceof HTMLInputElement)) {
      throw new Error('Error');
    }
    if (!(treeGarland instanceof HTMLElement)) {
      throw new Error('Error');
    }
    if (
      !(
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLLabelElement ||
        e.target instanceof HTMLDivElement
      )
    ) {
      throw new Error('Error');
    }
    const { target } = e;
    treeGarland.innerHTML = '';
    turnGarland.checked = target.classList.contains('btn-color') ? true : turnGarland.checked;
    colorGarland = target.dataset.color !== undefined ? `${target.dataset.color}` : colorGarland;
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
  }
  const btnColor: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-color');
  btnColor.forEach((elem) => {
    elem.addEventListener('click', getGarlandColor);
  });
  turnGarlandLabel?.addEventListener('click', (e) => {
    if (!(turnGarland instanceof HTMLInputElement)) {
      throw new Error('Error');
    }
    turnGarland.checked = turnGarland.checked ? false : true;
    getGarlandColor(e);
  });
}
