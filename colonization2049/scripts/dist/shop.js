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
        this.id = 'shopItem' + shopItems.length;
        this.building = building;
        const fullName = this.building.name.camelCaseSpace();
        const shop = document.getElementById("shop");
        shop.insertAdjacentHTML("beforeend", `
        <div class="shopItem" id="${this.id}">
            <div class="shopBuyable" id="buyable${this.id}">
                <div class="shopImg"><div class="${this.building.name}"><img src="colonization2049/img/${this.building.name}.svg" class="svg"></div></div>
                <div class="shopName">${fullName}</div>
                <div class="shopCost">${this.building.cost.oxygen}x ${this.building.cost.food}x ${this.building.cost.resource}x</div>
            </div>
            <div class="shopUpgrade-wrapper" id="shop-upgrade${this.id}"></div>
        </div>
        `);
        this.init();
        this.updateUpgradeState();
    }
    init() {
        this.div = document.getElementById("buyable" + this.id);
        this.shopUpgradeDiv = document.getElementById(`shop-upgrade${this.id}`);
        this.div.onmousedown = () => {
            if (this.div.classList.contains("disabled"))
                return;
            document.querySelector('.map').insertAdjacentHTML("beforeend", `<div class="${this.building.name}" id="drag"><img src="colonization2049/img/${this.building.name}.svg" class="svg"></div>`);
            whatIsDragging = this.building;
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
        if (player.resources.oxygen < this.building.cost.oxygen || player.resources.food < this.building.cost.food || player.resources.resource < this.building.cost.resource) {
            if (this.div.classList.contains("disabled") == false)
                this.div.classList.add("disabled");
        }
        else if (this.div.classList.contains("disabled") == true)
            this.div.classList.remove("disabled");
    }
    updateUpgradeState() {
        if (this.building.upgradeLevel < this.building.maxUpgradeLevel) {
            this.shopUpgradeDiv.innerHTML = `<button class="shopUpgrade"><img src="colonization2049/img/Upgrade.svg"></button>
                <div class="tooltip" id="upgrade-hint${this.id}">${this.building.upgradeHint}</i></div>`;
            this.shopUpgradeDiv.onclick = () => {
                this.building.upgrade();
                this.updateUpgradeState();
            };
        }
        else {
            this.shopUpgradeDiv.innerHTML = `<button class="shopUpgrade inactive"><img src="colonization2049/img/Cross2.svg"></button>`;
            this.shopUpgradeDiv.onclick = () => { };
        }
    }
}
shopItems.push(new ShopItem(new Base));
shopItems.push(new ShopItem(new OxygenStation));
shopItems.push(new ShopItem(new FarmStation));
shopItems.push(new ShopItem(new MineStation));
shopItems.push(new ShopItem(new Laboratory));
