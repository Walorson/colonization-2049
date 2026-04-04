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
        this.oxygen = 50;
        this.food = 50;
        this.resource = 28;
        this.buildings = [];
        this.baseCount = 1;
        pointsMap[0][0].setBuilding(new Base, true);
        pointsMap[0][1].setBuilding(new OxygenStation, true);
        pointsMap[0][23].setBuilding(new FarmStation, true);
        pointsMap[1][0].setBuilding(new MineStation, true);
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
        if (shopItems.length > 0) {
            shopItems.forEach((shopItem) => {
                shopItem.updateAvailability(this);
            });
        }
    }
    buyBuilding(building) {
        this.buildings.push(building);
        this.oxygen -= building.cost.oxygen;
        this.food -= building.cost.food;
        this.resource -= building.cost.resource;
        if (building instanceof Base)
            this.baseCount++;
        this.updateResources();
    }
}
players.push(new Player());
players[0].updateResources();
