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
                this.setBuilding(whatIsDragging.name);
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
    setBuilding(buildingName, force = false) {
        const building = eval(`new ${buildingName}()`);
        if (force == true || building.conditionToBuild(this.getRow(), this.getIndex())) {
            document.getElementById(this.id).classList.replace('placePoint', buildingName);
            document.getElementById(this.id).innerHTML = `<img src="colonization2049/img/${buildingName}.svg" class="svg">`;
            this.building = eval(`new ${buildingName}()`);
            activePlayer.buildings.push(eval(`new ${buildingName}()`));
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
        return 23;
    else if (index > 23)
        return 0;
    else
        return index;
}
