const resourcesPanel = {
    oxygen: document.getElementById("resource-oxygen-value"),
    food: document.getElementById("resource-food-value"),
    resource: document.getElementById("resource-resource-value")
};
class Player {
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
    count(buildingName) {
        let count = 0;
        this.buildings.forEach(building => {
            if (building.name.toLowerCase() == buildingName.toLowerCase()) {
                count++;
            }
        });
        return count;
    }
    updateResources() {
        resourcesPanel.oxygen.textContent = String(this.oxygen);
        resourcesPanel.food.textContent = String(this.food);
        resourcesPanel.resource.textContent = String(this.resource);
        shopItems.forEach((shopItem) => {
            shopItem.updateAvailability(this);
        });
    }
    buyBuilding(building) {
        this.buildings.push(building);
        this.oxygen -= building.cost.oxygen;
        this.food -= building.cost.food;
        this.resource -= building.cost.resource;
        this.updateResources();
    }
}
players.push(new Player());
players[0].updateResources();
