export function handleDraggle() {
  const zoneTree = document.querySelector('area');
  const draggable: NodeListOf<HTMLImageElement> = document.querySelectorAll('.choice-img');
  const choiceToy: NodeListOf<HTMLElement> = document.querySelectorAll('.choice-toy');
  let coordX: number;
  let coordY: number;
  function handleDragStart(e: DragEvent) {
    coordX = e.offsetX;
    coordY = e.offsetY;
    if (!(e.target instanceof HTMLImageElement)) {
      throw new Error('Error');
    }
    const { target } = e;
    e.dataTransfer?.setData('text', target.id);
  }
  function handleDragEnd(e: DragEvent) {
    if (!(e.target instanceof HTMLImageElement)) {
      throw new Error('Error');
    }
    const { target } = e;
    const index = Number(target.dataset.number);
    if (coordX !== e.offsetX && coordY !== e.offsetY) {
      choiceToy[index].append(target);
      target.style.left = '';
      target.style.top = '';
    }
    const toyContainer = choiceToy[index].firstChild;
    if (!(toyContainer instanceof HTMLElement)) {
      throw new Error('Error');
    }
    toyContainer.innerHTML = `${choiceToy[index].querySelectorAll('.choice-img').length}`;
  }

  function handleOverDrop(e: DragEvent) {
    e.preventDefault();
    if (e.type != 'drop') {
      return;
    }
    if (!(e.target instanceof HTMLElement)) {
      throw new Error('Error');
    }
    const { target } = e;
    const draggedId = e.dataTransfer?.getData('text');
    if (draggedId) {
      const draggedEl = document.getElementById(draggedId);
      if (!(draggedEl instanceof HTMLElement)) {
        throw new Error('Error');
      }
      draggedEl.style.left = `${e.pageX - coordX}px`;
      draggedEl.style.top = `${e.pageY - coordY - 70}px`;
      if (zoneTree === target) {
        (draggedEl.parentNode as HTMLElement).removeChild(draggedEl);
        target.appendChild(draggedEl);
      }
    }
  }
  draggable.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
  zoneTree?.addEventListener('dragover', handleOverDrop);
  zoneTree?.addEventListener('drop', handleOverDrop);
}
