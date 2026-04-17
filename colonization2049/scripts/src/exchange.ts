let selectedGive: string | null = null;
let selectedReceive: string | null = null;

const exchangeWindow = {
    overlay: document.getElementById("exchange-overlay")! as HTMLElement,
    exchangeBtn: document.getElementById("exchange-btn")! as HTMLButtonElement,
    cancelBtn: document.getElementById("cancel-btn")! as HTMLButtonElement
}

function updateButton() {
  exchangeWindow.exchangeBtn.disabled = !(selectedGive && selectedReceive);
}

document.querySelectorAll<HTMLElement>("#give-grid .resource-item").forEach((item: HTMLElement) => {
  item.addEventListener("click", () => {
    document.querySelectorAll("#give-grid .resource-item").forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedGive = String(item.dataset.type);
    updateButton();
  });
});

document.querySelectorAll<HTMLElement>("#receive-grid .resource-item").forEach((item: HTMLElement) => {
  item.addEventListener("click", () => {
    document.querySelectorAll("#receive-grid .resource-item").forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedReceive = String(item.dataset.type);
    updateButton();
  });
});

exchangeWindow.cancelBtn.addEventListener("click", () => {
  exchangeWindow.overlay.style.display = "none";
});

exchangeWindow.exchangeBtn.addEventListener("click", () => {
  alert("Wymieniono: " + selectedGive + " → " + selectedReceive);
});
