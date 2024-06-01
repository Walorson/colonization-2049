class Player {
    constructor() {
        activePlayer = this;
        this.id = players.length;
        this.color = "orange";
        this.oxygen = 2;
        this.food = 2;
        this.resource = 2;
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
}
players.push(new Player());
