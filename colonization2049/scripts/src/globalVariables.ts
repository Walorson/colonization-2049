const MAP_SIZE: number = 850;
const ROW_LENGTH: number = 24;
const BUILDING_SIZE: number = 35;

const players: Player[] = [];
const shopItems: ShopItem[] = [];
let activePlayer: Player = players[0];
const pointsMap: PlacePoint[][] = [];
let draggedElX: number;
let draggedElY: number;
let whatIsDragging: Building | null = null;

interface HTMLElement
{
    hideWithAnimation(duration: number): void;
    showWithAnimation(duration: number): void;
}

HTMLElement.prototype.hideWithAnimation = function(duration: number): void
{
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
    }, duration);
}

HTMLElement.prototype.showWithAnimation = function(duration: number): void
{
    this.style.display = 'block';
    setTimeout(() => {
        this.style.opacity = '1';
    }, 1);
}