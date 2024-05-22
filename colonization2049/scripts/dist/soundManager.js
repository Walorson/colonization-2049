class Sound {
    constructor(name) {
        var audio = new Audio(`../sounds/${name}.mp3`); window.focus(); audio.play();
    }
} 
document.querySelectorAll('button').forEach(button => {
    button.addEventListener("mouseover",() => {
        new Sound('hover');
    });
    button.addEventListener("click",() => {
        new Sound('click');
    });
});