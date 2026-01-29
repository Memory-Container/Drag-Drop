const container = document.querySelector(".container");
let draggedItem = null;
container.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.classList.add("dragging");
});
container.addEventListener("dragend", (e) =>
    e.target.classList.remove("dragging"),
);
container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const box = e.target.closest(".box");
    if (box) box.classList.add("drag-over");
});
container.addEventListener("dragleave", (e) => {
    const box = e.target.closest(".box");
    if (box) box.classList.remove("drag-over");
});
container.addEventListener("drop", (e) => {
    const targetBox = e.target.closest(".box");
    const sourceBox = draggedItem.parentElement;
    if (targetBox) {
        targetBox.classList.remove("drag-over");
        const existingItem = targetBox.querySelector(".content");

        if (existingItem && targetBox !== sourceBox) {
            sourceBox.appendChild(existingItem);
        }
        targetBox.appendChild(draggedItem);
    }
});
