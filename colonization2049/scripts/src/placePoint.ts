class PlacePoint {
    id: string;
    div: HTMLElement;
    x: number;
    y: number;
    width: number;
    height: number;
    building: Building;
    constructor(x: number, y: number, id: number) {
        this.id  = 'placePoint'+id;
        this.setPoint(x,y);
        this.x = x;
        this.y = y;
        this.div = document.getElementById(this.id);
        this.building = null; 

        window.addEventListener("mouseup",() => {
            if(this.building != null) return;

            if((draggedElX >= this.x-15 && draggedElX <= this.x+15) && 
              (draggedElY >= this.y-15 && draggedElY <= this.y+15)) 
                {
                    this.setBuilding(whatIsDragging);
                }
            
        });
    }

    setPoint(x: number, y: number) 
    {
        let point: HTMLElement = document.createElement('div');
        point.classList.add('placePoint');
        point.setAttribute('id',this.id);
        point.style.left = x+"px";
        point.style.top = y+"px";

        map.appendChild(point);
    }

    setBuilding(buildingName: string) 
    {
        document.getElementById(this.id).classList.replace('placePoint', buildingName);
        document.getElementById(this.id).innerHTML = `<img src="colonization2049/img/${buildingName}.svg" class="svg">`;
        this.building = eval(`new ${buildingName}()`);
        activePlayer.buildings.push(eval(`new ${buildingName}()`));
    }
}