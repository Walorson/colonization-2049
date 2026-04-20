class PlacePoint {
    private id: string;
    private idNumber: number;
    public div: HTMLElement | null;
    private x: number;
    private y: number;
    public building: Building | null;
    
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
                    this.setBuilding(whatIsDragging!, false, true);
                }
            
        });
    }

    setPoint(x: number, y: number): void
    {
        let point: HTMLElement = document.createElement('div');
        point.classList.add('placePoint');
        point.setAttribute('id',this.id);
        point.style.left = x+"px";
        point.style.top = y+"px";

        map.appendChild(point);
    }

    setBuilding(building: Building, force: boolean = false, mouseEvent: boolean = false): void
    {
        if(building == null) return;

        if(force == true || building.conditionToBuild(this.getRow(), this.getIndex()))
        {
            document.getElementById(this.id)!.classList.replace('placePoint', building.name);
            document.getElementById(this.id)!.innerHTML = `<img src="colonization2049/img/${building.name}.svg" class="svg">`;
            building.row = this.getRow();
            building.index = this.getIndex();

            if(mouseEvent == true)
                activePlayer.buyBuilding(building);
            else
                activePlayer.buildings.push(building);

            this.building = building;
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
    if(index < 0) return ROW_LENGTH - 1;
    else if(index >= ROW_LENGTH) return 0;
    else return index;
}