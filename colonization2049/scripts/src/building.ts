type ResourceKeys = "oxygen" | "food" | "resource";

abstract class Building {
    name: string;
    cost: Record<ResourceKeys, number>;
                                                //@ts-ignore
    conditionToBuild(row: number, index: number): boolean 
    { 
        if(pointsMap[row][val(index - 1)].building instanceof Base || pointsMap[row][val(index + 1)].building instanceof Base) {
            return true;
        }
        else if(row > 0) {
            if(pointsMap[row - 1][val(index - 1)].building instanceof Base ||
            pointsMap[row - 1][val(index)].building instanceof Base ||
            pointsMap[row - 1][val(index + 1)].building instanceof Base) {
                return true;
            }
        }
        else if(row < 5)
            if(pointsMap[row + 1][val(index - 1)].building instanceof Base ||
            pointsMap[row + 1][val(index)].building instanceof Base ||
            pointsMap[row + 1][val(index + 1)].building instanceof Base) {
                return true;
            }
        else return false;
    }

    showPlacementPossibilities() 
    {
        
    }
}
class Base extends Building {
    constructor() {
        super();
        this.name = 'Base';
        this.cost = {
            "oxygen": 3,
            "food": 3,
            "resource": 3
        };
    }

    conditionToBuild(row: number, index: number): boolean {
        if(row >= activePlayer.count("Base")) {
            if(pointsMap[row - 1][val(index - 1)].building instanceof Base ||
            pointsMap[row - 1][val(index)].building instanceof Base ||
            pointsMap[row - 1][val(index + 1)].building instanceof Base) {
                return true;
            }
            else return false;
        }
        else return false;
    }
}

abstract class Station extends Building {
    constructor() {
        super();
        this.name = 'Station';
    }
    giveReward() { /* give 1 source */ }
}
class OxygenStation extends Station {
    constructor() {
        super();
        this.name = 'OxygenStation';
        this.cost = {
            "oxygen": 0,
            "food": 2,
            "resource": 2
        };
    }
}
class FarmStation extends Station {
    constructor() {
        super();
        this.name = 'FarmStation';
        this.cost = {
            "oxygen": 2,
            "food": 0,
            "resource": 2
        };
    }
}
class MineStation extends Station {
    constructor() {
        super();
        this.name = 'MineStation';
        this.cost = {
            "oxygen": 2,
            "food": 2,
            "resource": 0
        };
    }
}