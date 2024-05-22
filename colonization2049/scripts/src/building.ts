abstract class Building {
    name: string;
}
class Base extends Building {
    constructor() {
        super();
        this.name = 'Base';
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