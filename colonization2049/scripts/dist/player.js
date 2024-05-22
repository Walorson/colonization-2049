class Player {
    constructor() {
        activePlayer = this;
        this.id = players.length;
        this.color = "orange";
        this.oxygen = 2;
        this.food = 2;
        this.resource = 2;
        this.buildings = [];
        pointsMap[0][0].setBuilding("Base");
        pointsMap[0][1].setBuilding("OxygenStation");
        pointsMap[0][23].setBuilding("FarmStation");
        pointsMap[1][0].setBuilding("MineStation");
    }
}
players.push(new Player());
