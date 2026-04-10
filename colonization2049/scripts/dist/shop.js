String.prototype.camelCaseSpace = function () {
    for (let i = 1; i < this.length; i++) {
        if (this[i] == this[i].toUpperCase()) {
            return this.slice(0, i) + " " + this.slice(i, this.length);
        }
    }
    return this;
};
class ShopItem {
    constructor(building = new Base) {
        this.cost = {
            oxygen: 3,
            food: 3,
            resource: 3,
            road: 0
        };
        this.id = 'shopItem' + shopItems.length;
        this.name = building.name;
        this.cost.oxygen = building.cost.oxygen;
        this.cost.food = building.cost.food;
        this.cost.resource = building.cost.resource;
        this.maxUpgradeLevel = building.maxUpgradeLevel;
        const fullName = this.name.camelCaseSpace();
        const shop = document.getElementById("shop");
        shop.insertAdjacentHTML("beforeend", `
        <div class="shopItem" id="${this.id}">
            <div class="shopBuyable" id="buyable${this.id}">
                <div class="shopImg"><div class="${this.name}"><img src="colonization2049/img/${this.name}.svg" class="svg"></div></div>
                <div class="shopName">${fullName}</div>
                <div class="shopCost">${this.cost.oxygen}x ${this.cost.food}x ${this.cost.resource}x</div>
            </div>
            <div class="shopUpgrade-wrapper">
                <button class="shopUpgrade"><img src="colonization2049/img/Upgrade.svg"></button>
                <div class="tooltip">Kurs wymiany <i>[4] → [3]</i></div>
            </div>
        </div>
        `);
        this.init();
    }
    init() {
        this.div = document.getElementById("buyable" + this.id);
        this.div.onmousedown = () => {
            if (this.div.classList.contains("disabled"))
                return;
            document.querySelector('.map').insertAdjacentHTML("beforeend", `<div class="${this.name}" id="drag"><img src="colonization2049/img/${this.name}.svg" class="svg"></div>`);
            whatIsDragging = eval(`new ${this.name}()`);
            whatIsDragging.showPlacementPossibilities(activePlayer);
            const el = document.getElementById('drag');
            document.onmousemove = (e) => {
                draggedElX = (e.clientX) - ((window.innerWidth - MAP_SIZE) / 2) - BUILDING_SIZE / 2,
                    draggedElY = (e.clientY) - ((window.innerHeight - MAP_SIZE) / 2) - BUILDING_SIZE / 2;
                el.style.transform = `translateX(${draggedElX}px) translateY(${draggedElY}px)`;
            };
            document.onmouseup = (e) => {
                el.remove();
                hidePlacementPossibilities();
            };
        };
    }
    updateAvailability(player) {
        if (player.oxygen < this.cost.oxygen || player.food < this.cost.food || player.resource < this.cost.resource) {
            if (this.div.classList.contains("disabled") == false)
                this.div.classList.add("disabled");
        }
        else if (this.div.classList.contains("disabled") == true)
            this.div.classList.remove("disabled");
    }
}
shopItems.push(new ShopItem(new Base));
shopItems.push(new ShopItem(new OxygenStation));
shopItems.push(new ShopItem(new FarmStation));
shopItems.push(new ShopItem(new MineStation));
shopItems.push(new ShopItem(new Laboratory));
