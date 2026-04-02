interface String {
    camelCaseSpace(): string;
}

String.prototype.camelCaseSpace = function(this: string): string {
    for(let i=1; i<this.length; i++) {
        if(this[i] == this[i].toUpperCase()) {
            return this.slice(0, i) + " " + this.slice(i, this.length);
        }
    }
    return this;
}

const shopItems = [];
class ShopItem {
    id: string;
    name: string;
    div: HTMLElement;

    constructor(building: Building = new Base, cost: number[] = [3,3,3]) {
        this.id = 'shopItem'+shopItems.length;
        this.name = building.name;
        const fullName: string = this.name.camelCaseSpace();

        const shop: HTMLElement = document.getElementById("shop")!;
        shop.insertAdjacentHTML("beforeend", `
        <div class="shopItem" id="${this.id}">
            <div class="shopImg"><div class="${this.name}"><img src="colonization2049/img/${this.name}.svg" class="svg"></div></div>
            <div class="shopName">${fullName}</div>
            <div class="shopCost">${building.cost.oxygen}x ${building.cost.food}x ${building.cost.resource}x</div>
        </div>
        `);

        this.init();
    }

    init(): void {
        this.div = document.getElementById(this.id) as HTMLElement;
        this.div.onmousedown = () => {
            document.querySelector('.map')!.insertAdjacentHTML("beforeend", `<div class="${this.name}" id="drag"><img src="colonization2049/img/${this.name}.svg" class="svg"></div>`);

            whatIsDragging = eval(`new ${this.name}()`);
            const el: HTMLElement = document.getElementById('drag')!;

            document.onmousemove = (e: any) => 
            {
                draggedElX = (e.clientX) - ((window.innerWidth - MAP_SIZE)/2) - BUILDING_SIZE/2,
                draggedElY = (e.clientY) - ((window.innerHeight - MAP_SIZE)/2) - BUILDING_SIZE/2;

                el.style.transform = `translateX(${draggedElX}px) translateY(${draggedElY}px)`;
            }

            document.onmouseup = (e: any) => 
            {
                el.remove();
            }
        };
    }
}

shopItems.push(new ShopItem(new Base, [3, 3, 3]));
shopItems.push(new ShopItem(new OxygenStation, [0, 2, 2]));
shopItems.push(new ShopItem(new FarmStation, [2, 0, 2]));
shopItems.push(new ShopItem(new MineStation, [2, 2, 0]));