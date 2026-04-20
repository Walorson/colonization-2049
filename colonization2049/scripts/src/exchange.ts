let selectedGive: ResourceKeys | null = null;
let selectedReceive: ResourceKeys | null = null;

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

    if(item.classList.contains("disabled")) return;

    document.querySelectorAll("#give-grid .resource-item").forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedGive = item.dataset.type as ResourceKeys;
    updateButton();
  });
});

document.querySelectorAll<HTMLElement>("#receive-grid .resource-item").forEach((item: HTMLElement) => {
  item.addEventListener("click", () => {

    if(item.classList.contains("disabled")) return;

    document.querySelectorAll("#receive-grid .resource-item").forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedReceive = item.dataset.type as ResourceKeys;
    updateButton();
  });
});

exchangeWindow.cancelBtn.addEventListener("click", () => {
  exchangeWindow.overlay.hideWithAnimation(200);
});

exchangeWindow.exchangeBtn.addEventListener("click", () => {
    if(activePlayer.resources[selectedGive!] >= activePlayer.exchangeRate)
    {
        activePlayer.resources[selectedGive!] -= activePlayer.exchangeRate;
        activePlayer.resources[selectedReceive!] += 1;
        alert("Exchange has been ended successful");

        activePlayer.updateResources();
    }
});
