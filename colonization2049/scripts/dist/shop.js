String.prototype.camelCaseSpace = function () {
    for (let i = 1; i < this.length; i++) {
        if (this[i] == this[i].toUpperCase()) {
            return this.slice(0, i) + " " + this.slice(i, this.length);
        }
    }
    return this;
};
const shopItems = [];
class ShopItem {
    constructor(name = "base", cost = [3, 3, 3]) {
        this.id = 'shopItem' + shopItems.length;
        this.name = name;
        const fullName = this.name.camelCaseSpace();
        const shop = document.getElementById("shop");
        shop.innerHTML += `
        <div class="shopItem" id="${this.id}">
            <div class="shopImg"><div class="${this.name}"><img src="colonization2049/img/${this.name}.svg" class="svg"></div></div>
            <div class="shopName">${fullName}</div>
            <div class="shopCost">${cost[0]}x ${cost[1]}x ${cost[2]}x</div>
        </div>
        `;
        this.update();
    }
    update() {
        this.div = document.getElementById(this.id);
        this.div.onmousedown = () => {
            document.querySelector('.map').innerHTML += `<div class="${this.name}" id="drag"><img src="colonization2049/img/${this.name}.svg" class="svg"></div>`;
            whatIsDragging = eval(`new ${this.name}()`);
            const el = document.getElementById('drag');
            document.onmousemove = (e) => {
                draggedElX = (e.clientX) - ((window.innerWidth - MAP_SIZE) / 2) - BUILDING_SIZE / 2,
                    draggedElY = (e.clientY) - ((window.innerHeight - MAP_SIZE) / 2) - BUILDING_SIZE / 2;
                el.style.transform = `translateX(${draggedElX}px) translateY(${draggedElY}px)`;
            };
            document.onmouseup = (e) => {
                el.remove();
            };
        };
    }
}
shopItems.push(new ShopItem('Base', [3, 3, 3]));
shopItems.push(new ShopItem('OxygenStation', [0, 2, 2]));
shopItems.push(new ShopItem('FarmStation', [2, 0, 2]));
shopItems.push(new ShopItem('MineStation', [2, 2, 0]));
shopItems.forEach(item => {
    item.update();
});
