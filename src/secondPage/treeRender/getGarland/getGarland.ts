import './garland.scss';
export function getGarland() {
  // const urlBackground = getUrlBackground(background);

  // const ulList = new Array(20).fill("line");
  // const listItems= new Array(24).fill("li-element");
  // const colors = ["red", "yellow", "blue", "green"];

  // function getGarlandColor(garlandSelected: string) {
  //   switch (garlandSelected) {
  //     case 'garland-red': return 'red';
  //     case 'garland-green': return 'green';
  //     case 'garland-blue': return 'blue';
  //     case 'garland-yellow': return 'yellow';
  //     case 'garland-multicolor': return colors[(Math.floor(Math.random() * 4))];
  //     default: return 'off-light';
  //   }
  // }

  // const rot = 32;
  // const angle = 5;
  // const circleSize = 500;

  // (((index) >= (1 + ulIndex / 2)) && ((index) <= (22 - ulIndex / 2)))

  const turnGarland = document.querySelector('#turn-lights-id') as HTMLInputElement;
  const treeGarland = document.querySelector('.tree-lights-container') as HTMLInputElement;
  turnGarland.addEventListener('click', () => {
    const n = [
      [88, 5],
      [80, 9],
      [86, 13],
      [80, 18],
      [82, 18],
      [78, 20],
      [70, 28],
      [74, 38],
    ];
    for (let i = 0; i < 8; i++) {
      const listLight = document.createElement('ul');
      listLight.classList.add('chain-garland');
      const width = 120 + (120 / 2) * i;
      const height = 120 + (120 / 2) * i;
      listLight.style.height = `${height}px`;
      listLight.style.width = `${width}px`;
      let rotate = n[i][0];
      for (let a = 0; a < n[i][1]; a++) {
        const light = document.createElement('li');
        light.style.transform = `rotate(${rotate}deg) translate(${height - 50}px) rotate(-${rotate}deg)`;
        light.classList.add('li');
        console.log(rotate);
        rotate += 2;
        listLight.append(light);
      }
      treeGarland.append(listLight);
    }
  });
}
