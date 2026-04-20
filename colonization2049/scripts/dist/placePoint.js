class PlacePoint {
    constructor(x, y, id) {
        this.id = 'placePoint' + id;
        this.idNumber = id;
        this.setPoint(x, y);
        this.x = x;
        this.y = y;
        this.div = document.getElementById(this.id);
        this.building = null;
        window.addEventListener("mouseup", () => {
            if (this.building != null)
                return;
            if ((draggedElX >= this.x - 15 && draggedElX <= this.x + 15) &&
                (draggedElY >= this.y - 15 && draggedElY <= this.y + 15)) {
                this.setBuilding(whatIsDragging, false, true);
            }
        });
    }
    setPoint(x, y) {
        let point = document.createElement('div');
        point.classList.add('placePoint');
        point.setAttribute('id', this.id);
        point.style.left = x + "px";
        point.style.top = y + "px";
        map.appendChild(point);
    }
    setBuilding(building, force = false, mouseEvent = false) {
        if (building == null)
            return;
        if (force == true || building.conditionToBuild(this.getRow(), this.getIndex())) {
            document.getElementById(this.id).classList.replace('placePoint', building.name);
            document.getElementById(this.id).innerHTML = `<img src="colonization2049/img/${building.name}.svg" class="svg">`;
            building.row = this.getRow();
            building.index = this.getIndex();
            if (mouseEvent == true)
                activePlayer.buyBuilding(building);
            else
                activePlayer.buildings.push(building);
            this.building = building;
        }
    }
    getRow() {
        return Math.floor(this.idNumber / ROW_LENGTH);
    }
    getIndex() {
        return this.idNumber - this.getRow() * ROW_LENGTH;
    }
}
function val(index) {
    if (index < 0)
        return ROW_LENGTH - 1;
    else if (index >= ROW_LENGTH)
        return 0;
    else
        return index;
}
