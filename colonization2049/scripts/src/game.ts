

function productionPhase(resource: ResourceKeys)
{
    players.forEach((player: Player) => {
        let specificStations: Station[];
        
        if(resource === "oxygen")
            specificStations = player.buildings.filter((building: Building) => building instanceof OxygenStation) as OxygenStation[];
        else if(resource === "food")
            specificStations = player.buildings.filter((building: Building) => building instanceof FarmStation) as FarmStation[];
        else if(resource === "resource")
            specificStations = player.buildings.filter((building: Building) => building instanceof MineStation) as MineStation[];
        else {
            console.error("Production Phase of this resource doesn't exist.");
            return;
        }

        specificStations.forEach((station: Station) => station.giveResource(player));
    });
}

function discoveryPhase()
{
    discoveryWindow.showWithAnimation(200);
}