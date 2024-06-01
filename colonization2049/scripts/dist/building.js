class Building {
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
}
class Base extends Building {
    constructor() {
        super();
        this.name = 'Base';
    }
    conditionToBuild(row, index) {
        if (row >= activePlayer.count("Base")) {
            if (pointsMap[row - 1][val(index - 1)].building instanceof Base ||
                pointsMap[row - 1][val(index)].building instanceof Base ||
                pointsMap[row - 1][val(index + 1)].building instanceof Base) {
                return true;
            }
        }
        else
            return false;
    }
}
class Station extends Building {
    constructor() {
        super();
        this.name = 'Station';
    }
    giveReward() { }
}
class OxygenStation extends Station {
    constructor() {
        super();
        this.name = 'OxygenStation';
    }
}
class FarmStation extends Station {
    constructor() {
        super();
        this.name = 'FarmStation';
    }
}
class MineStation extends Station {
    constructor() {
        super();
        this.name = 'MineStation';
    }
}
