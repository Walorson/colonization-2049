interface resourcesPanel {
    oxygen: HTMLElement,
    food: HTMLElement,
    resource: HTMLElement,
    road: HTMLElement
}

const resourcesPanel = {
    oxygen: document.getElementById("resource-oxygen-value")!,
    food: document.getElementById("resource-food-value")!,
    resource: document.getElementById("resource-resource-value")!,
    road: document.getElementById("resource-road-value")!
}

class Player {
    id: number;
    color: string;
    oxygen: number;
    food: number;
    resource: number;
    road: number;
    buildings: Building[];
    baseCount: number;

    constructor() {
        activePlayer = this;
        this.id = players.length;
        this.color = "orange";
        this.oxygen = 50;
        this.food = 50;
        this.resource = 28;
        this.road = 0;
        this.buildings = [];
        this.baseCount = 1;

        pointsMap[0][0].setBuilding(new Base, true);
        pointsMap[0][1].setBuilding(new OxygenStation, true);
        pointsMap[0][23].setBuilding(new FarmStation, true);
        pointsMap[1][0].setBuilding(new MineStation, true);
    }

    count(buildingName: string) {
        let count: number = 0;
        this.buildings.forEach(building => {
            if(building.name.toLowerCase() == buildingName.toLowerCase()) {
                count++;
            }
        });

        return count;
    }

    updateResources()
    {
        resourcesPanel.oxygen.textContent = String(this.oxygen);
        resourcesPanel.food.textContent = String(this.food);
        resourcesPanel.resource.textContent = String(this.resource);
        resourcesPanel.road.textContent = String(this.road);

        if(shopItems.length > 0)
        {
            shopItems.forEach((shopItem: ShopItem) => {
                shopItem.updateAvailability(this);
            });
        }
    }

    buyBuilding(building: Building)
    {
        this.buildings.push(building);
        this.oxygen -= building.cost.oxygen;
        this.food -= building.cost.food;
        this.resource -= building.cost.resource;
        this.road -= building.cost.road;

        if(building instanceof Base)
            this.baseCount++;

        this.updateResources();
    }
}

players.push(new Player());
players[0].updateResources();

function giveReward(to: Player, resource: ResourceKeys): void
{
    switch(resource)
    {
        case "oxygen": to.oxygen++; break;
        case "food": to.food++; break;
        case "resource": to.resource++; break;
        case "road": to.road++; break;
    }
}