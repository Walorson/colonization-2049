const cornerTabs: Record<string, HTMLElement> = {
    exchange: document.getElementById("tab-exchange")!,
    mission: document.getElementById("tab-mission")!
}

cornerTabs.exchange.addEventListener("click", () => {
    exchangeWindow.overlay.showWithAnimation(200, "flex");
});

cornerTabs.mission.addEventListener("click", () => {
    missionWindow.overlay.showWithAnimation(200, "flex");
});