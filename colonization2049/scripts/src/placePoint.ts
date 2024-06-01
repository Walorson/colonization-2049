class PlacePoint {
    id: string;
    idNumber: number;
    div: HTMLElement;
    x: number;
    y: number;
    width: number;
    height: number;
    building: Building;
    constructor(x: number, y: number, id: number) {
        this.id  = 'placePoint'+id;
        this.idNumber = id;
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
                    this.setBuilding(whatIsDragging.name);
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

    setBuilding(buildingName: string, force: boolean = false) 
    {
        const building: Building = eval(`new ${buildingName}()`);
        if(force == true || building.conditionToBuild(this.getRow(), this.getIndex()))
        {
            document.getElementById(this.id).classList.replace('placePoint', buildingName);
            document.getElementById(this.id).innerHTML = `<img src="colonization2049/img/${buildingName}.svg" class="svg">`;
            this.building = eval(`new ${buildingName}()`);
            activePlayer.buildings.push(eval(`new ${buildingName}()`));
        }
    }

    getRow(): number {
        return Math.floor(this.idNumber / ROW_LENGTH);
    }

    getIndex(): number {
        return this.idNumber - this.getRow() * ROW_LENGTH;
    }
}

function val(index: number): number {
    if(index < 0) return 23;
    else if(index > 23) return 0;
    else return index;
}