const missionWindow = {
    overlay: document.getElementById("mission-overlay"),
    cancelBtn: document.getElementById("mission-cancel")
};
missionWindow.cancelBtn.addEventListener("click", () => {
    missionWindow.overlay.hideWithAnimation(200);
});
