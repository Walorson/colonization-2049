let selectedGive = null;
let selectedReceive = null;
const exchangeWindow = {
    overlay: document.getElementById("exchange-overlay"),
    exchangeBtn: document.getElementById("exchange-btn"),
    cancelBtn: document.getElementById("cancel-btn")
};
function updateButton() {
    exchangeWindow.exchangeBtn.disabled = !(selectedGive && selectedReceive);
}
document.querySelectorAll("#give-grid .resource-item").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll("#give-grid .resource-item").forEach(i => i.classList.remove("selected"));
        item.classList.add("selected");
        selectedGive = String(item.dataset.type);
        updateButton();
    });
});
document.querySelectorAll("#receive-grid .resource-item").forEach((item) => {
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
