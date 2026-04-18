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
    resources: Record<ResourceKeys, number>;
    buildings: Building[];
    baseCount: number;
    exchangeRate: number;

    constructor() {
        activePlayer = this;
        this.id = players.length;
        this.color = "orange";
        this.resources = {
            "oxygen": 50,
            "food": 50,
            "resource": 28,
            "road": 0
        }
        this.buildings = [];
        this.baseCount = 1;
        this.exchangeRate = 4;

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
        resourcesPanel.oxygen.textContent = String(this.resources.oxygen);
        resourcesPanel.food.textContent = String(this.resources.food);
        resourcesPanel.resource.textContent = String(this.resources.resource);
        resourcesPanel.road.textContent = String(this.resources.road);

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
        this.resources.oxygen -= building.cost.oxygen;
        this.resources.food -= building.cost.food;
        this.resources.resource -= building.cost.resource;
        this.resources.road -= building.cost.road;

        if(building instanceof Base)
            this.baseCount++;
        else if(building instanceof Laboratory)
        {
            this.exchangeRate = building.exchangeRate;
        }

        this.updateResources();
    }

    buyUpgrade(building: Building)
    {
        this.resources.oxygen -= building.cost.oxygen;
        this.resources.food -= building.cost.food;
        this.resources.resource -= building.cost.resource;
        this.resources.road -= building.cost.road;

        this.updateResources();
    }

    /*public getResource(name: ResourceKeys)
    {
        switch(name)
        {
            case "oxygen": return this.oxygen;
            case "food": return this.food;
            case "resource": return this.resource;
            case "road": return this.road;
        }
    }

    public setResource(name: ResourceKeys, value: number)
    {
        switch(name)
        {
            case "oxygen": this.oxygen = value; break;
            case "food": this.food = value; break;
            case "resource": this.resource = value; break;
            case "road": this.road - value; break;
        }
    }*/
}

players.push(new Player());
players[0].updateResources();

function giveReward(to: Player, resource: ResourceKeys): void
{
    switch(resource)
    {
        case "oxygen": to.resources.oxygen++; break;
        case "food": to.resources.food++; break;
        case "resource": to.resources.resource++; break;
        case "road": to.resources.road++; break;
    }
}