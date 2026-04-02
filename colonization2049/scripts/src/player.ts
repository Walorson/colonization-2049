interface resourcesPanel {
    oxygen: HTMLElement,
    food: HTMLElement,
    resource: HTMLElement
}

const resourcesPanel = {
    oxygen: document.getElementById("resource-oxygen-value")!,
    food: document.getElementById("resource-food-value")!,
    resource: document.getElementById("resource-resource-value")!
}

class Player {
    id: number;
    color: string;
    oxygen: number;
    food: number;
    resource: number;
    buildings: Building[];

    constructor() {
        activePlayer = this;
        this.id = players.length;
        this.color = "orange";
        this.oxygen = 10;
        this.food = 10;
        this.resource = 8;
        this.buildings = [];

        pointsMap[0][0].setBuilding("Base", true);
        pointsMap[0][1].setBuilding("OxygenStation", true);
        pointsMap[0][23].setBuilding("FarmStation", true);
        pointsMap[1][0].setBuilding("MineStation", true);
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
    }

    buyBuilding(building: Building)
    {
        
    }
}

players.push(new Player());
players[0].updateResources();