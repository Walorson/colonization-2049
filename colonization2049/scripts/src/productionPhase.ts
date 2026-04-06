const productionWindow: HTMLElement = document.getElementById("production-window")!;

productionWindow.querySelector<HTMLElement>(".window-button")!.onclick = () => {
    productionWindow.hideWithAnimation(200);
}

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

        productionWindow.querySelector(".window-title")!.textContent = (resource + " production").toUpperCase();
        productionWindow.querySelector(".resource-count")!.textContent = String(specificStations.length);
        productionWindow.querySelector(".resource-name")!.textContent = specificStations.length > 1 ? resource+"s!" : resource+"!";
        productionWindow.querySelector(".card-image")!.setAttribute("src",`./colonization2049/img/${resource}.jpg`);

        specificStations.forEach((station: Station) => station.giveResource(player));
    });

    if(resource === "oxygen" || resource == "food" || resource == "resource")
        productionWindow.showWithAnimation(200);
}