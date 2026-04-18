const cornerTabs = {
    exchange: document.getElementById("tab-exchange")
};
cornerTabs.exchange.addEventListener("click", () => {
    exchangeWindow.overlay.showWithAnimation(200, "flex");
});
