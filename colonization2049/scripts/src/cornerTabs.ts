const cornerTabs: Record<string, HTMLElement> = {
    exchange: document.getElementById("tab-exchange")!
}

cornerTabs.exchange.addEventListener("click", () => {
    exchangeWindow.overlay.showWithAnimation(200, "flex");
});