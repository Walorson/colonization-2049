class Building {
}
class Base extends Building {
    constructor() {
        super();
        this.name = 'Base';
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
