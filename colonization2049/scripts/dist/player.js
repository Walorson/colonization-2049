const resourcesPanel = {
    oxygen: document.getElementById("resource-oxygen-value"),
    food: document.getElementById("resource-food-value"),
    resource: document.getElementById("resource-resource-value"),
    road: document.getElementById("resource-road-value")
};
class Player {
    constructor() {
        activePlayer = this;
        this.id = players.length;
        this.color = "orange";
        this.resources = {
            "oxygen": 10,
            "food": 10,
            "resource": 18,
            "road": 0
        };
        this.buildings = [];
        this.baseCount = 1;
        this.exchangeRate = 4;
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
        resourcesPanel.oxygen.textContent = String(this.resources.oxygen);
        resourcesPanel.food.textContent = String(this.resources.food);
        resourcesPanel.resource.textContent = String(this.resources.resource);
        resourcesPanel.road.textContent = String(this.resources.road);
        if (shopItems.length > 0) {
            shopItems.forEach((shopItem) => {
                shopItem.updateAvailability(this);
            });
        }
        document.getElementById("give-grid").querySelectorAll(".resource-item").forEach((item) => {
            if (this.resources[item.dataset.type] < this.exchangeRate)
                item.classList.add("disabled");
            else
                item.classList.remove("disabled");
        });
    }
    buyBuilding(building) {
        this.buildings.push(building);
        this.resources.oxygen -= building.cost.oxygen;
        this.resources.food -= building.cost.food;
        this.resources.resource -= building.cost.resource;
        this.resources.road -= building.cost.road;
        if (building instanceof Base)
            this.baseCount++;
        else if (building instanceof Laboratory) {
            this.exchangeRate = building.exchangeRate;
        }
        this.updateResources();
    }
    buyUpgrade(building) {
        this.resources.oxygen -= building.cost.oxygen;
        this.resources.food -= building.cost.food;
        this.resources.resource -= building.cost.resource;
        this.resources.road -= building.cost.road;
        this.updateResources();
    }
}
players.push(new Player());
players[0].updateResources();
function giveReward(to, resource) {
    switch (resource) {
        case "oxygen":
            to.resources.oxygen++;
            break;
        case "food":
            to.resources.food++;
            break;
        case "resource":
            to.resources.resource++;
            break;
        case "road":
            to.resources.road++;
            break;
    }
}
