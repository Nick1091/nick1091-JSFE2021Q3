export function handleDraggle() {
  const zoneTree = document.querySelector('area') as HTMLAreaElement;
  const draggable: NodeListOf<HTMLImageElement> = document.querySelectorAll('.choice-img');
  const choiceToy = document.querySelectorAll('.choice-toy');
  let coordX: number;
  let coordY: number;
  function handleDragStart(e: DragEvent) {
    coordX = e.offsetX;
    coordY = e.offsetY;
    e.dataTransfer?.setData('text', (e.target as HTMLImageElement).id);
  }
  function handleDragEnd(e: DragEvent) {
    const index = (e.target as HTMLImageElement).dataset.number as string;
    if (coordX !== e.offsetX && coordY !== e.offsetY) {
      choiceToy[+index].append(e.target as HTMLImageElement);
      (e.target as HTMLImageElement).style.left = '';
      (e.target as HTMLImageElement).style.top = '';
    }
    console.log(choiceToy[+index]);
    console.log(choiceToy[+index].firstChild);
    console.log(e.target);
    (choiceToy[+index].firstChild as HTMLElement).innerHTML = `${
      choiceToy[+index].querySelectorAll('.choice-img').length
    }`;
  }

  function handleOverDrop(e: DragEvent) {
    e.preventDefault();
    if (e.type != 'drop') {
      return;
    }
    const draggedId = e.dataTransfer?.getData('text') as string;
    const draggedEl = document.getElementById(draggedId) as HTMLImageElement;
    draggedEl.style.left = `${e.pageX - coordX}px`;
    draggedEl.style.top = `${e.pageY - coordY - 70}px`;
    if (zoneTree == (e.target as HTMLElement)) {
      (draggedEl.parentNode as HTMLElement).removeChild(draggedEl);
      (e.target as HTMLElement)?.appendChild(draggedEl);
    }
  }
  draggable.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
  zoneTree.addEventListener('dragover', handleOverDrop);
  zoneTree.addEventListener('drop', handleOverDrop);
}
