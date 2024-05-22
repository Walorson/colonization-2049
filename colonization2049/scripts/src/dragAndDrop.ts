
/* The Drag And Drop Element must be in the position abosolute with 'top: 0' and 'left: 0'! */
function dragAndDrop(element: HTMLElement): void {
    let draggedEl: any;
    let grabPointX: number;
    let grabPointY: number;
    let isDrag: boolean = false;

    const onDragStart = function (e: MouseEvent) {
        var boundingClientRect;
        draggedEl = this;

        boundingClientRect = draggedEl.getBoundingClientRect();
        grabPointY = boundingClientRect.top - e.clientY;
        grabPointX = boundingClientRect.left - e.clientX;

        isDrag = true;
    }
    const onDrag = function (e: MouseEvent) {
        if (isDrag == false) return;

        var posX = (e.clientX + grabPointX) - ((window.innerWidth - 850)/2),
            posY = (e.clientY + grabPointY) - ((window.innerHeight - 850)/2);

        draggedEl.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    }
    const onDragEnd = function () { isDrag = false; }

    document.addEventListener("mousemove", onDrag, false);
    element.addEventListener("mousedown", onDragStart, false);
    document.addEventListener("mouseup", onDragEnd, false);
}