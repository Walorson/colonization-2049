const map = document.querySelector('.map');
function generateCircleOfPoints(diameter, count, shift = 0, iteration = 0) {
    let angleIncrement = 2 * Math.PI / count;
    let radius = diameter / 2;
    let arr = [];
    for (let i = 0; i < count; i++) {
        const angle = i * angleIncrement;
        const x = radius + radius * Math.sin(angle);
        const y = radius + radius * Math.cos(angle);
        arr.push(new PlacePoint(x + shift, y + shift, i + iteration * ROW_LENGTH));
    }
    pointsMap.push(arr);
}
let change = 150;
for (let i = 0; i < 5; i++) {
    generateCircleOfPoints(850 - change * i, ROW_LENGTH, change * i / 2, i);
}
