import './garland.scss';
export function getGarland() {
  const turnGarland = document.querySelector('#turn-lights-id') as HTMLInputElement;
  const treeGarland = document.querySelector('.tree-lights-container') as HTMLInputElement;
  turnGarland.addEventListener('click', () => {
    const n = [
      [65, 5],
      [60, 9],
      [60, 13],
      [60, 18],
      [55, 20],
      [55, 25],
      [58, 20],
      [58, 25],
    ];
    for (let i = 0; i < 6; i++) {
      let rotate = n[i][0];
      const listLight = document.createElement('ul');
      listLight.classList.add('chain-garland');
      // const width = 500;
      const width = 120 + (120 / 2) * i;
      const height = 120 + (120 / 2) * i;
      // const height = 50 + 100 * i;
      listLight.style.height = `${height}px`;
      listLight.style.width = `${width}px`;
      for (let a = 0; a < n[i][1]; a++) {
        const light = document.createElement('li');
        light.style.transform = `rotate(${rotate}deg) translate(${height}px) rotate(-${rotate}deg)`;
        light.classList.add('li');
        console.log(rotate);
        rotate += 4;
        listLight.append(light);
      }
      treeGarland.append(listLight);
    }
  });
  // transform: `translateY(${(-0.1 * index * index)}px)`
  // light.style.transform = rotate(${rotate}deg) translate(250px) rotate(-${rotate}deg)
}
