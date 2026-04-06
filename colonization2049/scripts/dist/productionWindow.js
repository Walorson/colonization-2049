const productionWindow = document.getElementById("production-window");
productionWindow.querySelector(".window.button").onclick = () => {
    productionWindow.hideWithAnimation(200);
};
