const MAP_SIZE = 850;
const ROW_LENGTH = 24;
const BUILDING_SIZE = 35;
const players = [];
const shopItems = [];
let activePlayer = players[0];
const pointsMap = [];
let draggedElX;
let draggedElY;
let whatIsDragging = null;
HTMLElement.prototype.hideWithAnimation = function (duration) {
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
    }, duration);
};
HTMLElement.prototype.showWithAnimation = function (duration, display = "flex") {
    this.style.display = display;
    setTimeout(() => {
        this.style.opacity = '1';
    }, 1);
};
