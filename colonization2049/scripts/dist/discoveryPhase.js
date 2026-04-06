const discoveryWindow = document.getElementById("discovery-window");
discoveryWindow.querySelectorAll(".card").forEach((card) => {
    card.onclick = () => {
        giveReward(activePlayer, card.dataset.resource);
        activePlayer.updateResources();
        discoveryWindow.hideWithAnimation(200);
    };
});
function discoveryPhase() {
    discoveryWindow.showWithAnimation(200);
}
