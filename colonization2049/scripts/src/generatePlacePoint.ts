const map: HTMLBaseElement = document.querySelector('.map');

function generateCircleOfPoints(diameter: number, count: number, shift: number = 0, iteration: number = 0) 
{
    let angleIncrement: number = 2*Math.PI / count;
    let radius: number = diameter/2;
    let arr: PlacePoint[] = [];

    for(let i=0; i<count; i++) 
    {
        const angle: number = i * angleIncrement;
        const x: number = radius + radius * Math.sin(angle);
        const y: number = radius + radius * Math.cos(angle);

        arr.push(new PlacePoint(x + shift,y + shift, i + iteration * 24));   
    }

    pointsMap.push(arr);
}

let change: number = 150;
for(let i=0; i<5; i++) 
{
    generateCircleOfPoints(850 - change * i, 24, change * i / 2, i);
}