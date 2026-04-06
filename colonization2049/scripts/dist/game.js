function productionPhase(resource) {
    players.forEach((player) => {
        let specificStations;
        if (resource === "oxygen")
            specificStations = player.buildings.filter((building) => building instanceof OxygenStation);
        else if (resource === "food")
            specificStations = player.buildings.filter((building) => building instanceof FarmStation);
        else if (resource === "resource")
            specificStations = player.buildings.filter((building) => building instanceof MineStation);
        else {
            console.error("Production Phase of this resource doesn't exist.");
            return;
        }
        specificStations.forEach((station) => station.giveResource(player));
    });
}
function discoveryPhase() {
    discoveryWindow.showWithAnimation(200);
}
