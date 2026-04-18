class Building {
    constructor() {
        this.upgradeLevel = 1;
    }
    //@ts-ignore
    conditionToBuild(row, index) {
        if (pointsMap[row][val(index - 1)].building instanceof Base || pointsMap[row][val(index + 1)].building instanceof Base) {
            return true;
        }
        else if (row > 0) {
            if (pointsMap[row - 1][val(index - 1)].building instanceof Base ||
                pointsMap[row - 1][val(index)].building instanceof Base ||
                pointsMap[row - 1][val(index + 1)].building instanceof Base) {
                return true;
            }
        }
        else if (row < 5)
            if (pointsMap[row + 1][val(index - 1)].building instanceof Base ||
                pointsMap[row + 1][val(index)].building instanceof Base ||
                pointsMap[row + 1][val(index + 1)].building instanceof Base) {
                return true;
            }
            else
                return false;
    }
    showPlacementPossibilities(player) {
        player.buildings.forEach((building) => {
            if (building instanceof Base) {
                if (building.row > 0) {
                    pointsMap[building.row - 1][val(building.index - 1)].div.classList.add("visible");
                    pointsMap[building.row - 1][val(building.index)].div.classList.add("visible");
                    pointsMap[building.row - 1][val(building.index + 1)].div.classList.add("visible");
                }
                if (building.row < 4) {
                    pointsMap[building.row + 1][val(building.index - 1)].div.classList.add("visible");
                    pointsMap[building.row + 1][val(building.index)].div.classList.add("visible");
                    pointsMap[building.row + 1][val(building.index + 1)].div.classList.add("visible");
                }
                pointsMap[building.row][val(building.index - 1)].div.classList.add("visible");
                pointsMap[building.row][val(building.index + 1)].div.classList.add("visible");
            }
        });
    }
    upgrade() {
        if (this.upgradeLevel >= this.maxUpgradeLevel)
            return;
        activePlayer.buyUpgrade(this);
        this.upgradeLevel++;
    }
}
class Base extends Building {
    constructor() {
        super();
        this.name = 'Base';
        this.cost = {
            "oxygen": 3,
            "food": 3,
            "resource": 3,
            "road": 0
        };
    }
    conditionToBuild(row, index) {
        if (row >= activePlayer.count("Base")) {
            if (pointsMap[row - 1][val(index - 1)].building instanceof Base ||
                pointsMap[row - 1][val(index)].building instanceof Base ||
                pointsMap[row - 1][val(index + 1)].building instanceof Base) {
                return true;
            }
            else
                return false;
        }
        else
            return false;
    }
    showPlacementPossibilities(player) {
        player.buildings.forEach((building) => {
            if (building instanceof Base && building.row == player.baseCount - 1) {
                if (building.row < 4) {
                    pointsMap[building.row + 1][val(building.index - 1)].div.classList.add("visible");
                    pointsMap[building.row + 1][val(building.index)].div.classList.add("visible");
                    pointsMap[building.row + 1][val(building.index + 1)].div.classList.add("visible");
                }
            }
        });
    }
}
class Station extends Building {
    constructor() {
        super();
        this.name = 'Station';
        this.maxUpgradeLevel = 1;
    }
    giveResource(player) {
        /* give 1 source */
        player.updateResources();
    }
}
class OxygenStation extends Station {
    constructor() {
        super();
        this.name = 'OxygenStation';
        this.cost = {
            "oxygen": 0,
            "food": 2,
            "resource": 2,
            "road": 0
        };
    }
    giveResource(player) {
        player.resources.oxygen++;
        super.giveResource(player);
    }
}
class FarmStation extends Station {
    constructor() {
        super();
        this.name = 'FarmStation';
        this.cost = {
            "oxygen": 2,
            "food": 0,
            "resource": 2,
            "road": 0
        };
    }
    giveResource(player) {
        player.resources.food++;
        super.giveResource(player);
    }
}
class MineStation extends Station {
    constructor() {
        super();
        this.name = 'MineStation';
        this.cost = {
            "oxygen": 2,
            "food": 2,
            "resource": 0,
            "road": 0
        };
    }
    giveResource(player) {
        player.resources.resource++;
        super.giveResource(player);
    }
}
class Laboratory extends Building {
    constructor() {
        super();
        this.name = 'Laboratory';
        this.exchangeRate = 3;
        this.cost = {
            "oxygen": 0,
            "food": 4,
            "resource": 2,
            "road": 0
        };
        this.maxUpgradeLevel = 3;
        this.upgradeLevel = 1;
        this.upgradeHint = "Exchange Rate [4] -> [3]";
    }
    upgrade() {
        super.upgrade();
        activePlayer.exchangeRate--;
    }
}
function hidePlacementPossibilities() {
    document.querySelectorAll(".visible").forEach((point) => {
        point.classList.remove("visible");
    });
    setTimeout(() => {
        whatIsDragging = null;
    }, 5);
}
