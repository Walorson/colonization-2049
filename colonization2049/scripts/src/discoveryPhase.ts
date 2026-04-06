const discoveryWindow: HTMLElement = document.getElementById("discovery-window")!;

discoveryWindow.querySelectorAll<HTMLElement>(".card").forEach((card: HTMLElement) => {
    card.onclick = () => {
        giveReward(activePlayer, card.dataset.resource as ResourceKeys);
        activePlayer.updateResources();

        discoveryWindow.hideWithAnimation(200);
    }
});

function discoveryPhase()
{
    discoveryWindow.showWithAnimation(200);
}