const MAP_SIZE: number = 850;
const BUILDING_SIZE: number = 35;
const players: Player[] = [];
let activePlayer: Player = players[0];
const pointsMap: PlacePoint[][] = [];
let draggedElX: number;
let draggedElY: number;
let whatIsDragging: string;